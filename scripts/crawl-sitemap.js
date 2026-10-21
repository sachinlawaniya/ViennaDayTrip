const fs = require('fs');

async function fetchSitemap(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const text = await res.text();
    const locs = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    return { url, text, locs };
  } catch (err) {
    console.error(`Failed ${url}:`, err);
    return { url, text: '', locs: [] };
  }
}

async function main() {
  const root = await fetchSitemap('https://viennadaytrip.com/sitemap.xml');
  console.log('Root sitemaps:', root.locs);

  let allPages = [];
  for (const sub of root.locs) {
    console.log(`Fetching sub-sitemap: ${sub}`);
    const subRes = await fetchSitemap(sub);
    fs.writeFileSync(sub.split('/').pop(), subRes.text, 'utf-8');
    console.log(` -> Found ${subRes.locs.length} URLs in ${sub}`);
    allPages.push({ sitemap: sub, urls: subRes.locs });
  }

  fs.writeFileSync('all_sitemap_urls.json', JSON.stringify(allPages, null, 2), 'utf-8');
  console.log('Total sitemap groups saved.');
  for (const group of allPages) {
    console.log(`\n--- ${group.sitemap} (${group.urls.length}) ---`);
    console.log(group.urls.join('\n'));
  }
}

main().catch(console.error);
