const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function sanitizeFilename(name) {
  return name.trim().replace(/[\r\n\t]/g, '').replace(/[<>:"/\\|?*]/g, '_').substring(0, 150);
}

async function downloadFile(rawUrl, destPath) {
  const url = rawUrl.trim();
  return new Promise((resolve, reject) => {
    let client;
    try {
      const parsed = new URL(url);
      client = parsed.protocol === 'https:' ? https : http;
    } catch (e) {
      return reject(new Error('Invalid URL: ' + url));
    }

    let file;
    try {
      file = fs.createWriteStream(destPath);
    } catch (e) {
      return reject(e);
    }

    file.on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });

    const req = client.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlink(destPath, () => {});
        downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(destPath, () => {});
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(true));
      });
    });

    req.on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      reject(err);
    });

    req.setTimeout(15000, () => {
      req.abort();
      file.close();
      fs.unlink(destPath, () => {});
      reject(new Error('Timeout'));
    });
  });
}

function getMasterUrl(url) {
  let clean = url.trim().split('?')[0];
  return clean.replace(/-\d+x\d+(\.[a-zA-Z0-9]+)$/, '$1');
}

function categorize(url) {
  const lower = url.toLowerCase();
  if (lower.includes('logo') || lower.includes('favicon') || lower.includes('icon') || lower.includes('badge')) return 'branding';
  if (lower.includes('fleet') || lower.includes('mercedes') || lower.includes('e-class') || lower.includes('s-class') || lower.includes('v-class') || lower.includes('sprinter') || lower.includes('armored') || lower.includes('car') || lower.includes('van')) return 'fleet';
  if (lower.includes('hallstatt') || lower.includes('salzburg') || lower.includes('wachau') || lower.includes('budapest') || lower.includes('prague') || lower.includes('bratislava') || lower.includes('zell') || lower.includes('vienna') || lower.includes('danube') || lower.includes('melk') || lower.includes('trip') || lower.includes('durnstein')) return 'destinations';
  if (lower.includes('airport') || lower.includes('chauffeur') || lower.includes('tour') || lower.includes('b2b') || lower.includes('secure')) return 'services';
  if (lower.includes('review') || lower.includes('star') || lower.includes('trust') || lower.includes('googleusercontent')) return 'reviews';
  if (lower.includes('blog') || lower.includes('post')) return 'blog';
  return 'other';
}

async function main() {
  console.log('Loading media and discovered images...');
  const media = fs.existsSync('extracted_data/media.json') 
    ? JSON.parse(fs.readFileSync('extracted_data/media.json', 'utf-8'))
    : [];

  const discovered = fs.existsSync('extracted_data/discovered_images_manifest.json')
    ? JSON.parse(fs.readFileSync('extracted_data/discovered_images_manifest.json', 'utf-8'))
    : [];

  const mediaByUrl = new Map();
  const mediaByBase = new Map();
  for (const m of media) {
    if (m.source_url) {
      const info = {
        title: m.title?.rendered || '',
        alt: m.alt_text || m.title?.rendered || '',
        caption: m.caption?.rendered || '',
        mime: m.mime_type
      };
      mediaByUrl.set(m.source_url.trim(), info);
      const bName = sanitizeFilename(path.basename(m.source_url.split('?')[0]));
      mediaByBase.set(bName, info);
    }
  }

  const categories = ['branding', 'fleet', 'destinations', 'services', 'reviews', 'blog', 'other'];
  for (const cat of categories) {
    const dir = path.join('public', 'images', cat);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  const urlMap = new Map();

  for (const item of discovered) {
    const raw = item.source_url ? item.source_url.trim() : '';
    if (!raw.startsWith('http')) continue;
    const masterUrl = getMasterUrl(raw);
    const cat = categorize(masterUrl);
    const filename = sanitizeFilename(path.basename(masterUrl));
    if (!filename) continue;

    if (!urlMap.has(masterUrl)) {
      urlMap.set(masterUrl, {
        source_url: masterUrl,
        category: cat,
        filename,
        pages: [...(item.pages || [])],
        alt: item.alt || ''
      });
    } else {
      const existing = urlMap.get(masterUrl);
      for (const p of item.pages || []) {
        if (!existing.pages.includes(p)) existing.pages.push(p);
      }
    }
  }

  for (const m of media) {
    if (!m.source_url) continue;
    const raw = m.source_url.trim();
    if (!raw.startsWith('http')) continue;
    const cat = categorize(raw);
    const filename = sanitizeFilename(path.basename(raw.split('?')[0]));
    if (!filename) continue;

    if (!urlMap.has(raw)) {
      urlMap.set(raw, {
        source_url: raw,
        category: cat,
        filename,
        pages: ['media-library'],
        alt: m.alt_text || m.title?.rendered || ''
      });
    }
  }

  console.log(`Total unique master image assets to process: ${urlMap.size}`);

  const manifest = [];
  let downloadedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  const entries = Array.from(urlMap.values());
  const BATCH_SIZE = 8;

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async (entry) => {
      const localPath = path.join('public', 'images', entry.category, entry.filename);
      const publicPath = `/images/${entry.category}/${entry.filename}`;

      const meta = mediaByUrl.get(entry.source_url) || mediaByBase.get(entry.filename) || {};
      const altText = meta.alt || entry.alt || entry.filename.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '');

      if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
        skippedCount++;
        manifest.push({
          source_url: entry.source_url,
          local_path: publicPath,
          category: entry.category,
          filename: entry.filename,
          alt: altText,
          pages: entry.pages,
          download_status: 'already_exists',
          size_bytes: fs.statSync(localPath).size
        });
        return;
      }

      try {
        await downloadFile(entry.source_url, localPath);
        downloadedCount++;
        const size = fs.existsSync(localPath) ? fs.statSync(localPath).size : 0;
        manifest.push({
          source_url: entry.source_url,
          local_path: publicPath,
          category: entry.category,
          filename: entry.filename,
          alt: altText,
          pages: entry.pages,
          download_status: 'success',
          size_bytes: size
        });
      } catch (err) {
        failedCount++;
        manifest.push({
          source_url: entry.source_url,
          local_path: publicPath,
          category: entry.category,
          filename: entry.filename,
          alt: altText,
          pages: entry.pages,
          download_status: 'failed',
          error: err.message
        });
      }
    }));

    if ((i + BATCH_SIZE) % 40 === 0 || i + BATCH_SIZE >= entries.length) {
      console.log(`Progress: ${Math.min(i + BATCH_SIZE, entries.length)}/${entries.length} (Downloaded: ${downloadedCount}, Skipped: ${skippedCount}, Failed: ${failedCount})`);
    }
  }

  // Save asset-manifest.json
  fs.writeFileSync('asset-manifest.json', JSON.stringify(manifest, null, 2), 'utf-8');
  fs.writeFileSync('public/asset-manifest.json', JSON.stringify(manifest, null, 2), 'utf-8');

  console.log(`\nAsset extraction complete!`);
  console.log(`- Downloaded: ${downloadedCount}`);
  console.log(`- Existing/Skipped: ${skippedCount}`);
  console.log(`- Failed: ${failedCount}`);
  console.log(`- Total in manifest: ${manifest.length}`);
  console.log(`Saved asset-manifest.json and public/asset-manifest.json`);
}

main().catch(console.error);
