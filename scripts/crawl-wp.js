const fs = require('fs');
const path = require('path');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function fetchJson(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) {
      console.warn(`Fetch ${url} failed with status ${res.status}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`Fetch ${url} error:`, err.message);
    return null;
  }
}

async function fetchText(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) {
      console.warn(`Fetch ${url} failed with status ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.error(`Fetch ${url} error:`, err.message);
    return null;
  }
}

async function main() {
  if (!fs.existsSync('extracted_data')) {
    fs.mkdirSync('extracted_data', { recursive: true });
  }
  if (!fs.existsSync('extracted_data/html')) {
    fs.mkdirSync('extracted_data/html', { recursive: true });
  }

  console.log('Fetching WP pages...');
  const pages = await fetchJson('https://viennadaytrip.com/wp-json/wp/v2/pages?per_page=100');
  if (pages) {
    fs.writeFileSync('extracted_data/pages.json', JSON.stringify(pages, null, 2), 'utf-8');
    console.log(`Saved ${pages.length} pages to extracted_data/pages.json`);
    for (const p of pages) {
      console.log(`- [${p.id}] ${p.slug} (${p.title.rendered})`);
    }
  }

  console.log('Fetching WP posts (first 100)...');
  const posts = await fetchJson('https://viennadaytrip.com/wp-json/wp/v2/posts?per_page=100');
  if (posts) {
    fs.writeFileSync('extracted_data/posts.json', JSON.stringify(posts, null, 2), 'utf-8');
    console.log(`Saved ${posts.length} posts to extracted_data/posts.json`);
  }

  console.log('Fetching WP categories...');
  const categories = await fetchJson('https://viennadaytrip.com/wp-json/wp/v2/categories?per_page=100');
  if (categories) {
    fs.writeFileSync('extracted_data/categories.json', JSON.stringify(categories, null, 2), 'utf-8');
    console.log(`Saved ${categories.length} categories to extracted_data/categories.json`);
  }

  console.log('Fetching WP media (pages 1 to 5)...');
  let allMedia = [];
  for (let page = 1; page <= 5; page++) {
    const mediaPage = await fetchJson(`https://viennadaytrip.com/wp-json/wp/v2/media?per_page=100&page=${page}`);
    if (mediaPage && Array.isArray(mediaPage) && mediaPage.length > 0) {
      allMedia = allMedia.concat(mediaPage);
      console.log(`Fetched media page ${page}: ${mediaPage.length} items`);
    } else {
      break;
    }
  }
  fs.writeFileSync('extracted_data/media.json', JSON.stringify(allMedia, null, 2), 'utf-8');
  console.log(`Saved total ${allMedia.length} media items to extracted_data/media.json`);

  // Fetch HTML for primary pages from all_sitemap_urls.json
  if (fs.existsSync('all_sitemap_urls.json')) {
    const sitemaps = JSON.parse(fs.readFileSync('all_sitemap_urls.json', 'utf-8'));
    const pageGroup = sitemaps.find(g => g.sitemap.includes('page-sitemap'));
    if (pageGroup && pageGroup.urls) {
      console.log(`Fetching HTML for ${pageGroup.urls.length} primary pages...`);
      for (const pageUrl of pageGroup.urls) {
        let slug = pageUrl.replace('https://viennadaytrip.com/', '').replace(/\/$/, '') || 'home';
        slug = slug.replace(/[^a-zA-Z0-9_-]/g, '_');
        console.log(`Downloading HTML for ${slug} (${pageUrl})...`);
        const html = await fetchText(pageUrl);
        if (html) {
          fs.writeFileSync(`extracted_data/html/${slug}.html`, html, 'utf-8');
        }
      }
    }
  }

  console.log('Extraction complete!');
}

main().catch(console.error);
