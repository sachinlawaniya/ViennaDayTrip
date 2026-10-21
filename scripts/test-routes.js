const routes = [
  '/',
  '/about-vienna-day-trip',
  '/our-services',
  '/airport-transfer-vienna',
  '/hourly-chauffeur-service',
  '/vienna-sightseeing-tour',
  '/wachau-valley-trip',
  '/hallstatt-day-trip-from-vienna',
  '/salzburg-day-trip',
  '/budapest-day-trip',
  '/prague-day-trip',
  '/bratislava-day-trip',
  '/customized-day-trips',
  '/secure-transportation',
  '/our-fleet',
  '/b2b-solutions',
  '/tour-pricing',
  '/zell-am-see-and-kaprun',
  '/booking',
  '/contact-us-i',
  '/blog',
  '/blog/duernstein-day-trip',
  '/privacy-policy',
  '/cancellation-refund-policy',
  '/imprint',
  '/sitemap.xml',
  '/robots.txt'
];

async function testAll() {
  console.log(`Testing ${routes.length} routes on http://localhost:3005...`);
  let passed = 0;
  let failed = 0;

  for (const r of routes) {
    try {
      const res = await fetch(`http://localhost:3005${r}`);
      if (res.status === 200) {
        const text = await res.text();
        console.log(`[PASS 200] ${r.padEnd(35)} (${text.length} bytes)`);
        passed++;
      } else {
        console.error(`[FAIL ${res.status}] ${r}`);
        failed++;
      }
    } catch (e) {
      console.error(`[ERROR] ${r}:`, e.message);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${routes.length} routes.`);
}

testAll();
