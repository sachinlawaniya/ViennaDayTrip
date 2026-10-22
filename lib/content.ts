import { Vehicle, DayTrip, ServiceItem, ReviewItem } from './types';

export const COMPANY_INFO = {
  name: "Vienna Day Trip",
  legalName: "Vienna Day Trip Chauffeur & Limousine Services",
  tagline: "Your Private Chauffeur in Vienna & Beyond",
  subtagline: "Luxury Transfers, Hourly Chauffeur & Private Day Trips Across Central Europe",
  phone: "+43 664 2035445",
  phoneFormatted: "+43 664 2035445",
  phoneHref: "tel:+436642035445",
  whatsappHref: "https://wa.me/436642035445",
  email: "booking@viennadaytrip.com",
  address: {
    street: "Lechnerstraße 2",
    city: "Vienna",
    postalCode: "1030",
    country: "Austria",
    full: "Lechnerstraße 2, 1030 Vienna, Austria",
  },
  hours: "24/7 Service Available (Reservation recommended 2h in advance)",
  googleRating: 5.0,
  reviewCount: 48,
  social: {
    facebook: "https://www.facebook.com/people/Viennadaytrip/61578864492007/",
    instagram: "https://www.instagram.com/viennadaytrip",
    tiktok: "https://www.tiktok.com/@viennadaytrip",
  },
  allowedServiceAreas: [
    "vienna",
    "wien",
    "lower austria",
    "niederösterreich",
    "burgenland",
    "salzburg",
    "hallstatt",
    "budapest",
    "prague",
    "bratislava",
    "wachau",
    "zell am see",
    "kaprun"
  ],
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-vienna-day-trip" },
  {
    name: "Our Services",
    href: "/our-services",
    submenu: [
      { name: "Vienna Airport Pick & Drop-off", href: "/airport-transfer-vienna" },
      { name: "Hourly Chauffeur Service", href: "/hourly-chauffeur-service" },
      { name: "Vienna Sightseeing Tour", href: "/vienna-sightseeing-tour" },
      { name: "Wachau Valley Trip", href: "/wachau-valley-trip" },
      { name: "Hallstatt Day Trip", href: "/hallstatt-day-trip-from-vienna" },
      { name: "Salzburg Day Trip", href: "/salzburg-day-trip" },
      { name: "Budapest Day Trip", href: "/budapest-day-trip" },
      { name: "Prague Day Trip", href: "/prague-day-trip" },
      { name: "Bratislava Day Trip", href: "/bratislava-day-trip" },
      { name: "Customized Day Trips From Vienna", href: "/customized-day-trips" },
      { name: "Secure Transportation", href: "/secure-transportation" },
    ],
  },
  { name: "Our Fleet", href: "/our-fleet" },
  { name: "B2B Solutions", href: "/b2b-solutions" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact Us", href: "/contact-us-i" },
];

export const FOOTER_LINKS = {
  services: [
    { name: "Vienna Airport Pick & Drop-off", href: "/airport-transfer-vienna" },
    { name: "Hourly Chauffeur Service", href: "/hourly-chauffeur-service" },
    { name: "Vienna Sightseeing Tour", href: "/vienna-sightseeing-tour" },
    { name: "Secure Transportation", href: "/secure-transportation" },
    { name: "Our Fleet", href: "/our-fleet" },
    { name: "B2B Solutions", href: "/b2b-solutions" },
  ],
  destinations: [
    { name: "Hallstatt Day Trip", href: "/hallstatt-day-trip-from-vienna" },
    { name: "Wachau Valley Trip", href: "/wachau-valley-trip" },
    { name: "Salzburg Day Trip", href: "/salzburg-day-trip" },
    { name: "Budapest Day Trip", href: "/budapest-day-trip" },
    { name: "Prague Day Trip", href: "/prague-day-trip" },
    { name: "Bratislava Day Trip", href: "/bratislava-day-trip" },
    { name: "Zell am See and Kaprun", href: "/zell-am-see-and-kaprun" },
    { name: "Customized Day Trips", href: "/customized-day-trips" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
    { name: "Imprint", href: "/imprint" },
    { name: "Tour Pricing", href: "/tour-pricing" },
  ],
};

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: "e-class",
    name: "Mercedes-Benz E-Class",
    category: "Business Class Sedan",
    passengers: 3,
    luggage: 2,
    image: "/images/fleet/premium-mercedes-benz-sedan-for-vienna-airport-tra.jpeg",
    description: "The Mercedes E-Class is where sophistication meets everyday practicality. Designed for comfort and efficiency, it offers a smooth and quiet ride, suited to both business and private transfers.",
    features: [
      "Leather upholstery & climate control",
      "Complimentary Wi-Fi & bottled water",
      "Phone chargers (USB-C & Lightning)",
      "Acoustic noise isolation glass",
      "Discreet and professional private chauffeur"
    ],
    recommendedFor: "Business travelers, solo flyers, couples, and swift airport transfers."
  },
  {
    id: "s-class",
    name: "Mercedes-Benz S-Class",
    category: "First Class Luxury Sedan",
    passengers: 3,
    luggage: 2,
    image: "/images/fleet/S-class-interior-1.png",
    description: "The Mercedes S-Class represents the highest level of luxury in our fleet. Every detail is designed to provide a first-class travel experience—from its ultra-quiet cabin to its cutting-edge technology.",
    features: [
      "Executive reclining seats with massage function",
      "Burmester® 3D High-End Surround Sound",
      "Panoramic ambient mood lighting",
      "Air suspension for supreme gliding ride",
      "VIP privacy blinds and tinted rear windows"
    ],
    recommendedFor: "VIPs, dignitaries, executives, special celebrations, and discerning luxury travelers."
  },
  {
    id: "v-class",
    name: "Mercedes-Benz V-Class",
    category: "Luxury Van & MPV",
    passengers: 7,
    luggage: 7,
    image: "/images/fleet/V-class-interior-1.png",
    description: "The Mercedes V-Class offers the perfect combination of space and luxury. With generous seating and flexible layouts, it is ideal for families, small groups, and long-distance day trips across Europe.",
    features: [
      "Face-to-face conference seating arrangement",
      "Generous luggage capacity for large suitcases",
      "Individual rear air conditioning controls",
      "Electric sliding doors on both sides",
      "Spacious legroom for long alpine journeys"
    ],
    recommendedFor: "Families, travel groups, ski luggage, and full-day private tours."
  },
  {
    id: "sprinter",
    name: "Mercedes-Benz Sprinter",
    category: "VIP Minibus",
    passengers: 16,
    luggage: 16,
    image: "/images/fleet/Mercedes-Sprinter-–-VIP-Group-Transport.jpeg",
    description: "The Mercedes Sprinter offers premium comfort, generous space, and smooth travel for group transportation, corporate delegations, airport transfers, and private tours across Europe.",
    features: [
      "High roof with panoramic windows",
      "Reclining ergonomic leather coach seats",
      "Microphone system for guided tours",
      "Dedicated extra-large rear luggage compartment",
      "Individual overhead air vents & reading lamps"
    ],
    recommendedFor: "Corporate delegations, wedding parties, conference transfers, and large family tours."
  },
  {
    id: "armored",
    name: "Armored Luxury Vehicle",
    category: "Elite Secure Transportation",
    passengers: 3,
    luggage: 2,
    image: "/images/fleet/Armored-Vehicle-.jpeg",
    description: "Our armored vehicles combine discreet protection with premium luxury, designed for VIPs, executives, diplomats, celebrities, and clients requiring enhanced security across Europe.",
    features: [
      "Certified ballistic protection (B6 / B7)",
      "Run-flat tire protection system",
      "Reinforced chassis and blast-resistant floor",
      "Specially trained tactical defensive chauffeurs",
      "Strict confidentiality and non-disclosure protocol"
    ],
    recommendedFor: "Embassy officials, high-profile dignitaries, VIPs requiring discreet personal security."
  }
];

export const DAY_TRIPS: DayTrip[] = [
  {
    id: "hallstatt",
    slug: "hallstatt-day-trip-from-vienna",
    title: "Hallstatt Day Trip",
    subtitle: "Experience Austria’s most picturesque fairytale lakeside village in the Salzkammergut Alps",
    duration: "10-12 Hours",
    distance: "290 km (approx. 3.5 hrs drive each way)",
    badge: "Most Popular",
    heroImage: "/images/destinations/hallstatt-day-trip-2.webp",
    cardImage: "/images/destinations/hallstatt-day-trip-2.webp",
    shortDescription: "A breathtaking full-day private journey through Austria's Salzkammergut lake district to the UNESCO World Heritage alpine village of Hallstatt.",
    description: "Escape the city for a scenic journey into the heart of the Austrian Alps. Travel in pure luxury through picturesque countryside, turquoise alpine lakes, and dramatic mountain peaks before reaching Hallstatt. Explore the 7,000-year-old salt mine, the famous Beinhaus (Bone House), walk along the scenic lake promenade, or ascend to the World Heritage Skywalk overlooking the fjord-like Lake Hallstatt.",
    highlights: [
      "Door-to-door private hotel pickup and return in Vienna",
      "Scenic drive through the breathtaking Salzkammergut Lake District",
      "Photo stop at picturesque St. Gilgen on Lake Wolfgang",
      "Ample free time (3-4 hours) in Hallstatt village without rushing",
      "Options to visit Hallstatt Skywalk, Salt Mine, or take an electric boat ride",
      "Complimentary chilled Austrian spring water and onboard Wi-Fi"
    ],
    itinerary: [
      {
        title: "08:00 AM – Hotel Pickup in Vienna",
        description: "Your professional chauffeur greets you at your hotel or residence lobby in Vienna in a spotless Mercedes-Benz.",
        duration: "15 min"
      },
      {
        title: "08:15 AM – Scenic Drive through Salzkammergut",
        description: "Comfortable drive west across Lower and Upper Austria with panoramic alpine views.",
        duration: "2.5 hrs"
      },
      {
        title: "10:45 AM – Coffee & Photo Stop at Lake Wolfgang (St. Gilgen)",
        description: "Short relaxing stop to admire Mozart's mother's village and take memorable lake photos.",
        duration: "30 min"
      },
      {
        title: "11:45 AM – Arrival in Hallstatt",
        description: "Chauffeur parks at the convenient terminal. You have 3.5 to 4 hours of leisure time for exploration, lunch by the water, and sightseeing.",
        duration: "4 hrs"
      },
      {
        title: "03:45 PM – Relaxing Return Drive to Vienna",
        description: "Sit back and unwind in leather luxury as your chauffeur navigates safely back to Vienna.",
        duration: "3.5 hrs"
      },
      {
        title: "07:30 PM – Hotel Drop-off",
        description: "Direct drop-off at your hotel or preferred evening dinner location in Vienna."
      }
    ],
    included: [
      "Private Mercedes-Benz sedan or van with personal chauffeur",
      "All highway tolls, fuel, parking fees, and road taxes",
      "Bottled water, refreshments, and phone chargers onboard",
      "Flexible schedule and custom photo stops along the way"
    ],
    faqs: [
      {
        question: "How long is the Hallstatt day trip?",
        answer: "The total tour duration is approximately 10 to 12 hours. Drive time is around 3.5 hours each way with comfortable rest stops."
      },
      {
        question: "Is the Hallstatt tour private?",
        answer: "Yes, 100% private. Only your party travels in the vehicle, and the itinerary can be customized to your pace."
      },
      {
        question: "Can we stop for photos or coffee during the journey?",
        answer: "Absolutely. St. Gilgen, Gmunden on Lake Traunsee, or local alpine viewpoints can be added seamlessly."
      },
      {
        question: "Are tickets to the Salt Mine or Skywalk included?",
        answer: "Entrance tickets are not included so you can decide on the day whether you prefer mountain activities, museums, or relaxed lakeside dining."
      }
    ]
  },
  {
    id: "wachau",
    slug: "wachau-valley-trip",
    title: "Wachau Valley Trip",
    subtitle: "Terraced vineyards, medieval castle ruins, and baroque Melk Abbey along the Blue Danube",
    duration: "8-9 Hours",
    distance: "85 km (approx. 1 hr drive each way)",
    badge: "Wine & Culture",
    heroImage: "/images/destinations/Wachau-Valley-from-Vienna-Day-Trip.webp",
    cardImage: "/images/destinations/Wachau-Valley-from-Vienna-Day-Trip.webp",
    shortDescription: "Discover Austria's premier UNESCO wine region, famed for Grüner Veltliner, apricot orchards, medieval Dürnstein, and the stunning Melk Abbey.",
    description: "The Wachau Valley is one of Europe's most enchanting river landscapes. Just an hour from Vienna, the Danube winds through steep vineyard terraces, centuries-old villages, and hilltop ruins where King Richard the Lionheart was once imprisoned. Visit the majestic Benedictine Melk Abbey, stroll charming cobblestone streets in Dürnstein, and enjoy world-class wine tastings at authentic local vintners.",
    highlights: [
      "Visit the magnificent Baroque Melk Abbey overlooking the Danube River",
      "Stroll the romantic blue-towered village of Dürnstein",
      "Optional hike to Dürnstein Castle ruins with sweeping valley panoramas",
      "Private wine tasting at a traditional Wachau winery (Domäne Wachau)",
      "Scenic driving route through Spitz, Weißenkirchen, and Krems",
      "Flexible stops for authentic Austrian apricot delicacies and local Heuriger taverns"
    ],
    itinerary: [
      {
        title: "09:00 AM – Vienna Departure",
        description: "Pickup from your Vienna hotel in a luxury vehicle."
      },
      {
        title: "10:15 AM – Melk Abbey Visit",
        description: "Explore the golden baroque abbey, world-famous library, and lush abbey gardens (approx. 2 hours stay).",
        duration: "2 hrs"
      },
      {
        title: "12:30 PM – Scenic Drive along the Danube River",
        description: "Panoramic route tracing the Danube past terraced stone vineyards and fortified churches.",
        duration: "45 min"
      },
      {
        title: "01:15 PM – Lunch in Weißenkirchen or Spitz",
        description: "Enjoy fresh Danube trout and authentic Austrian specialities paired with local wine."
      },
      {
        title: "02:45 PM – Dürnstein Village & Castle Ruin",
        description: "Walk the historic alleys, visit the iconic blue church tower, or sample Wachau apricot liqueurs.",
        duration: "2 hrs"
      },
      {
        title: "05:00 PM – Return to Vienna",
        description: "Scenic drive back to Vienna arriving by approximately 6:00 PM."
      }
    ],
    included: [
      "Private vehicle with English-speaking professional chauffeur",
      "Fuel, tolls, parking, and mineral water",
      "Flexible schedule adjusted to your wine tasting and sightseeing preferences"
    ],
    faqs: [
      {
        question: "How long does the Wachau Valley day trip take?",
        answer: "A standard Wachau Valley tour lasts approximately 8 hours, offering a relaxed pace without rush."
      },
      {
        question: "Can we include a wine tasting?",
        answer: "Yes! We can arrange or recommend top local wineries such as Domäne Wachau or charming family-run Heurigen along the route."
      },
      {
        question: "Is this tour suitable for families and seniors?",
        answer: "Yes, it is very comfortable with minimal walking required unless you choose to hike to the castle ruins."
      }
    ]
  },
  {
    id: "salzburg",
    slug: "salzburg-day-trip",
    title: "Salzburg Day Trip",
    subtitle: "The City of Mozart, Sound of Music gardens, and towering Hohensalzburg Fortress",
    duration: "11-12 Hours",
    distance: "300 km (approx. 3 hrs drive each way)",
    badge: "Heritage",
    heroImage: "/images/destinations/Salzburg-2.webp",
    cardImage: "/images/destinations/Salzburg-2.webp",
    shortDescription: "Explore the historic birthplace of Mozart, the baroque Mirabell Gardens, and the majestic alpine fortress overlooking Salzburg's UNESCO old town.",
    description: "Travel from imperial Vienna to magical Salzburg, nestled against the Northern Alps. Wander through Mirabell Gardens, cross the Salzach River into the medieval Getreidegasse, view Mozart's Birthplace, and admire Salzburg Cathedral and St. Peter's Abbey. The towering Hohensalzburg Fortress provides panoramic views of the city rooftops and snowy mountain backdrops.",
    highlights: [
      "Stroll Mirabell Palace and Gardens (famous from The Sound of Music)",
      "Explore Getreidegasse and visit Mozart's Birthplace",
      "Marvel at Salzburg Cathedral and Residenzplatz",
      "Ascend to the 900-year-old Hohensalzburg Fortress via funicular",
      "Scenic highway journey through Upper Austria's rolling hills",
      "Option to include a scenic stop at Lake Mondsee"
    ],
    itinerary: [
      {
        title: "07:30 AM – Hotel Pickup in Vienna",
        description: "Early morning start in a comfortable private Mercedes sedan or van."
      },
      {
        title: "10:45 AM – Arrival in Salzburg",
        description: "Drop-off right by Mirabell Gardens or Old Town gates for convenient access."
      },
      {
        title: "11:00 AM – 03:30 PM – Exploring Salzburg",
        description: "4.5 hours of free exploration: Mozart's Birthplace, Getreidegasse shopping, authentic Salzburger Nockerl dessert, and the Fortress."
      },
      {
        title: "04:00 PM – Return Journey",
        description: "Relaxed scenic return to Vienna with an optional coffee stop."
      },
      {
        title: "07:15 PM – Hotel Drop-off in Vienna",
        description: "Smooth arrival back at your doorstep."
      }
    ],
    included: [
      "Private Mercedes chauffeur service with hotel pickup and drop-off",
      "Highway vignettes, tolls, fuel, and parking fees",
      "Complimentary Wi-Fi and chilled water onboard"
    ],
    faqs: [
      {
        question: "How long does it take to drive from Vienna to Salzburg?",
        answer: "The direct drive takes around 3 hours each way via the A1 West Autobahn, with opportunities for scenic rest stops."
      },
      {
        question: "Can I book a local tour guide in Salzburg?",
        answer: "Yes, we can arrange an accredited local Salzburg city guide to meet you upon arrival if requested in advance."
      }
    ]
  },
  {
    id: "budapest",
    slug: "budapest-day-trip",
    title: "Budapest Day Trip",
    subtitle: "Cross into Hungary to discover the Pearl of the Danube, Buda Castle, and the iconic Parliament",
    duration: "10-11 Hours",
    distance: "245 km (approx. 2.5 hrs drive each way)",
    badge: "Cross-Border",
    heroImage: "/images/destinations/Budapest.webp",
    cardImage: "/images/destinations/Budapest.webp",
    shortDescription: "A seamless international day excursion from Vienna to Budapest. Discover Fisherman's Bastion, Matthias Church, Chain Bridge, and Heroes' Square.",
    description: "Experience two world-class imperial capitals in one trip! A swift 2.5-hour highway drive from Vienna brings you to Budapest, divided by the majestic Danube River into historic Buda and vibrant Pest. Take in breathtaking panoramas from Fisherman's Bastion, marvel at the neo-Gothic Hungarian Parliament, and stroll the grand boulevard of Andrássy Avenue.",
    highlights: [
      "Panoramic views of the Danube from Fisherman's Bastion & Castle Hill",
      "Photo stops at the world-famous Hungarian Parliament and Chain Bridge",
      "Visit Heroes' Square and St. Stephen's Basilica",
      "Ample time for authentic Hungarian goulash lunch or a thermal bath experience",
      "Direct cross-border private transfer without train or bus queues"
    ],
    itinerary: [
      {
        title: "08:00 AM – Pickup in Vienna",
        description: "Comfortable pickup from your accommodation."
      },
      {
        title: "10:30 AM – Arrival on Castle Hill (Buda)",
        description: "Panoramic view across the Danube, Fisherman's Bastion, and Matthias Church."
      },
      {
        title: "12:30 PM – Cross Chain Bridge to Pest",
        description: "St. Stephen's Basilica, Parliament building, and lunch at a traditional restaurant."
      },
      {
        title: "02:30 PM – Heroes' Square & City Park",
        description: "Explore the grand monument, Vajdahunyad Castle, and vibrant shopping streets."
      },
      {
        title: "04:30 PM – Return to Vienna",
        description: "Smooth evening drive returning to Vienna by approx. 7:00 PM."
      }
    ],
    included: [
      "International highway vignettes for Austria and Hungary",
      "Private Mercedes luxury transfer with licensed chauffeur",
      "Door-to-door hotel service in both countries"
    ],
    faqs: [
      {
        question: "Do I need my passport for Budapest?",
        answer: "Yes, since you will be crossing into Hungary, valid passports/Schengen visas are required for all passengers."
      },
      {
        question: "How long is the drive to Budapest?",
        answer: "It takes roughly 2.5 hours via the modern M1 motorway."
      }
    ]
  },
  {
    id: "prague",
    slug: "prague-day-trip",
    title: "Prague Day Trip",
    subtitle: "The City of a Hundred Spires, Charles Bridge, and Prague Castle in the Czech Republic",
    duration: "12-13 Hours",
    distance: "330 km (approx. 3.5 hrs drive each way)",
    badge: "Gothic & Baroque",
    heroImage: "/images/destinations/Prague.webp",
    cardImage: "/images/destinations/Prague.webp",
    shortDescription: "Journey from Vienna to the fairytale Czech capital. Walk across historic Charles Bridge, see the Astronomical Clock, and explore Prague Castle.",
    description: "Prague is one of the best-preserved medieval and baroque cities in the world. Travel in executive comfort from Vienna across the Czech border to explore Prague's historic Old Town Square, watch the hourly show of the Astronomical Clock, wander Charles Bridge lined with baroque statues, and gaze up at St. Vitus Cathedral within Prague Castle.",
    highlights: [
      "Explore Prague Castle (Pražský hrad) and St. Vitus Cathedral",
      "Walk the iconic cobblestone Charles Bridge over the Vltava River",
      "Old Town Square with the 600-year-old Astronomical Clock",
      "Sample famous Czech Pilsner beer and hearty Bohemian cuisine",
      "Seamless roundtrip travel in high-end Mercedes comfort"
    ],
    itinerary: [
      {
        title: "07:00 AM – Departure from Vienna",
        description: "Early departure to maximize your time in Prague."
      },
      {
        title: "10:30 AM – Arrival at Prague Castle",
        description: "Start at the top of the hill with panoramic city views and explore the castle courtyards."
      },
      {
        title: "12:30 PM – Charles Bridge & Malá Strana",
        description: "Walk down through the Lesser Town and cross Charles Bridge."
      },
      {
        title: "01:30 PM – Old Town Square & Bohemian Lunch",
        description: "Free time for shopping, lunch, and seeing the Astronomical Clock."
      },
      {
        title: "04:30 PM – Departure for Vienna",
        description: "Relaxed return drive arriving in Vienna around 8:00 PM."
      }
    ],
    included: [
      "Czech and Austrian highway vignettes and all tolls",
      "Private Mercedes-Benz sedan or executive van",
      "Bottled water, onboard Wi-Fi, and personalized chauffeur service"
    ],
    faqs: [
      {
        question: "Is a day trip to Prague realistic from Vienna?",
        answer: "Yes, with an early morning start by private car (approx. 3.5 hours drive), you enjoy 5 to 6 full hours in Prague before returning comfortably."
      }
    ]
  },
  {
    id: "bratislava",
    slug: "bratislava-day-trip",
    title: "Bratislava Day Trip",
    subtitle: "The closest European capital to Vienna—historic Slovak charm just 1 hour away",
    duration: "5-6 Hours",
    distance: "80 km (approx. 1 hr drive each way)",
    badge: "Quick Getaway",
    heroImage: "/images/destinations/Bratislava-Castle.jpg",
    cardImage: "/images/destinations/Bratislava-Castle.jpg",
    shortDescription: "A relaxed half-day or full-day trip to Slovakia's capital. Explore Bratislava Castle, the UFO bridge, and the pedestrianized medieval Old Town.",
    description: "Vienna and Bratislava are the two closest capital cities in Europe, situated only 80 km apart. In just one hour of comfortable driving, arrive in Slovakia's charming capital. Stroll the compact cobblestone Old Town with its whimsical bronze statues, visit the hilltop white Bratislava Castle overlooking the Danube and three nations, and discover the art-nouveau Blue Church.",
    highlights: [
      "Only 60 minutes travel time from door to door",
      "Bratislava Castle with 360° views across Slovakia, Austria, and Hungary",
      "Charming medieval Old Town: St. Martin's Cathedral and Michael's Gate",
      "The whimsical Cumil (Man at Work) statue and Main Square cafes",
      "Optional stop at Devin Castle ruins at the confluence of the Danube and Morava"
    ],
    itinerary: [
      {
        title: "09:30 AM – Hotel Pickup in Vienna",
        description: "A relaxed morning start from your hotel in Vienna."
      },
      {
        title: "10:30 AM – Bratislava Castle",
        description: "Visit the iconic castle grounds and baroque gardens."
      },
      {
        title: "11:45 AM – Old Town Walking & Lunch",
        description: "Free time in the pedestrian historic district for lunch, coffee, and sightseeing."
      },
      {
        title: "02:30 PM – Return Drive",
        description: "Short 60-minute drive back to Vienna arriving by 3:30 PM."
      }
    ],
    included: [
      "Slovak and Austrian road tolls and vignettes",
      "Private vehicle and dedicated chauffeur",
      "Flexible schedule tailored to your pace"
    ],
    faqs: [
      {
        question: "How long does a day trip to Bratislava take?",
        answer: "It can easily be done as a 5-6 hour half-day trip or extended to a full 8-hour tour with Devin Castle."
      }
    ]
  },
  {
    id: "zell-am-see",
    slug: "zell-am-see-and-kaprun",
    title: "From Vienna to Zell am See and Kaprun",
    subtitle: "Crystal clear alpine lake and year-round glacier wonderland in Salzburg's high peaks",
    duration: "Full Day / Transfer",
    distance: "390 km (approx. 4 hrs drive)",
    badge: "Alpine Wonder",
    heroImage: "/images/destinations/IMG_6709.webp",
    cardImage: "/images/destinations/IMG_6709.webp",
    shortDescription: "Direct private long-distance transfer and tour from Vienna to the scenic lakeside town of Zell am See and the glacier resort of Kaprun.",
    description: "Travel smoothly from Vienna directly into the dramatic high Alps of Salzburg province. Whether visiting for summer lake breezes and mountain hiking, or heading to the Kitzsteinhorn glacier for winter ski adventures, our private transfer ensures luggage handling, zero train changes, and an executive journey in first-class comfort.",
    highlights: [
      "Direct door-to-door transfer with ample luggage space for ski and hiking gear",
      "Spectacular views of Lake Zell and the surrounding Hohe Tauern National Park",
      "Optional stop at Hallstatt or Salzburg along the route",
      "Modern Mercedes vehicles equipped with winter tires and climate control"
    ],
    itinerary: [
      {
        title: "Morning – Vienna Pickup",
        description: "Chauffeur assists with luggage at your Vienna hotel or airport."
      },
      {
        title: "Mid-Journey – Alpine Scenic Stop",
        description: "Enjoy a scenic break in Upper Austria or near Salzburg."
      },
      {
        title: "Afternoon – Arrival in Zell am See / Kaprun",
        description: "Direct drop-off at your alpine chalet, luxury resort, or ski lift."
      }
    ],
    included: [
      "All Austrian tolls and highway vignettes",
      "Luggage assistance for skis, snowboards, and suitcases",
      "Spacious Mercedes-Benz V-Class or sedan"
    ],
    faqs: [
      {
        question: "Can we stop in Salzburg or Hallstatt on the way?",
        answer: "Yes, we can turn your transfer into a full sightseeing day trip with stops en route."
      }
    ]
  },
  {
    id: "customized",
    slug: "customized-day-trips",
    title: "Customized Day Trips From Vienna",
    subtitle: "Design your bespoke European itinerary across Austria, Germany, Czechia, Slovakia, or Hungary",
    duration: "Custom (Flexible)",
    distance: "Tailored to your itinerary",
    badge: "Bespoke",
    heroImage: "/images/destinations/Best-Day-Trips-from-Vienna-by-Private-Chauffeur.webp",
    cardImage: "/images/destinations/Best-Day-Trips-from-Vienna-by-Private-Chauffeur.webp",
    shortDescription: "Your travel, your schedule. Combine multiple destinations, wine tastings, castle tours, and shopping excursions with your private chauffeur.",
    description: "Not every traveler wants a fixed schedule. Our customized day trips allow you to combine destinations, choose your departure times, and linger wherever you like. Whether you want to visit family castles, explore the Neusiedler See wine region, tour Lake Bled in Slovenia, or combine Bratislava and Budapest in one executive itinerary, we tailor every detail.",
    highlights: [
      "100% custom route planning with professional chauffeur consultation",
      "Combine castles, alpine viewpoints, wineries, and outlet shopping",
      "Multi-country day itineraries across Central Europe",
      "Flexible start times and duration tailored to your group"
    ],
    itinerary: [
      {
        title: "Custom Start Time",
        description: "Departure at your chosen hour from anywhere in Vienna."
      },
      {
        title: "Tailored Route",
        description: "Follow your handcrafted itinerary with impromptu photo stops."
      },
      {
        title: "Evening Return",
        description: "Smooth return to your hotel or airport."
      }
    ],
    included: [
      "Dedicated chauffeur and luxury Mercedes vehicle for the entire duration",
      "All fuel, highway tolls, and route planning assistance",
      "Complimentary amenities on board"
    ],
    faqs: [
      {
        question: "Can I customize the destinations and stops?",
        answer: "Yes, you have complete freedom to choose your stops, route, and duration."
      }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "airport-transfer",
    slug: "airport-transfer-vienna",
    title: "Vienna Airport Pick & Drop-off",
    subtitle: "Punctual, stress-free airport transfers with flight tracking and meet & greet service",
    heroImage: "/images/fleet/premium-mercedes-benz-sedan-for-vienna-airport-tra.jpeg",
    shortDescription: "Fixed-rate luxury transfers between Vienna International Airport (VIE) and any address in Vienna or Central Europe.",
    fullDescription: "Start or end your trip in absolute comfort. Your private chauffeur tracks your flight in real time, monitors any arrival delays, greets you inside the arrivals hall with a personalized name sign, assists with all your luggage, and escorts you directly to your waiting Mercedes-Benz.",
    features: [
      "Live flight tracking (no extra charge for delayed flights)",
      "60 minutes complimentary waiting time after flight touchdown",
      "Professional meet & greet inside the airport arrivals terminal",
      "Fixed, all-inclusive pricing with zero surge charges",
      "Child and infant safety seats available upon request"
    ],
    faqs: [
      {
        question: "How will I find my chauffeur at Vienna Airport?",
        answer: "Your chauffeur will wait inside the arrivals hall just after baggage claim, holding a greeting sign with your name or company logo."
      },
      {
        question: "What if my flight is delayed?",
        answer: "We track your flight live. Your chauffeur adjusts pickup time automatically at no additional fee."
      },
      {
        question: "Can I book a transfer in the middle of the night?",
        answer: "Yes, our private airport transfers operate 24 hours a day, 7 days a week."
      }
    ]
  },
  {
    id: "hourly-chauffeur",
    slug: "hourly-chauffeur-service",
    title: "Hourly Chauffeur Service",
    subtitle: "Your private chauffeur on standby for business meetings, shopping, and flexible city travel",
    heroImage: "/images/fleet/chauffeur-opening-a-car-door-for-a-passenger.jpeg",
    shortDescription: "Hire a dedicated luxury vehicle and chauffeur by the hour for complete flexibility and prestige.",
    fullDescription: "Enjoy absolute freedom with our by-the-hour chauffeur service in Vienna. Whether hopping between business meetings, attending diplomatic conferences, embarking on a luxury shopping spree at the Goldenes Quartier, or dining at fine restaurants, your driver remains on standby ready to depart whenever you are.",
    features: [
      "Chauffeur on standby throughout your entire booking",
      "Unlimited stops within the booked hours",
      "Perfect for executive roadshows, embassy visits, and events",
      "Flexible extension options on the go",
      "Choice of Mercedes-Benz E-Class, S-Class, or V-Class"
    ],
    faqs: [
      {
        question: "What is the minimum hourly hire duration?",
        answer: "Our standard minimum hourly service starts at 2 to 3 hours depending on the season and vehicle class."
      },
      {
        question: "Can I extend my booking while in the car?",
        answer: "Yes, you can simply notify your chauffeur or our dispatch team to extend hours."
      }
    ]
  },
  {
    id: "sightseeing-tour",
    slug: "vienna-sightseeing-tour",
    title: "Vienna Sightseeing Tour",
    subtitle: "Experience Vienna’s imperial grandeur, Ringstraße palaces, and hidden gems in luxury",
    heroImage: "/images/destinations/schonbrunn-min_1024x.webp",
    shortDescription: "A private, relaxed tour of Vienna's iconic landmarks with photo stops and local chauffeur insights.",
    fullDescription: "Discover Vienna's breathtaking imperial architecture without the hassle of crowded tourist buses or walking miles in the cold or heat. Glide past the Vienna State Opera, Hofburg Imperial Palace, Parliament, City Hall, and St. Stephen's Cathedral. Stop for photos and garden strolls at Schönbrunn Palace and Belvedere Palace at your own pace.",
    features: [
      "Customizable city route matching your personal interests",
      "Comfortable photo stops at Schönbrunn, Belvedere, and Hundertwasserhaus",
      "Chauffeured Ringstraße tour showcasing grand 19th-century architecture",
      "Skip crowded group buses with private door-to-door comfort",
      "English and German-speaking professional drivers"
    ],
    faqs: [
      {
        question: "How long does the Vienna sightseeing tour last?",
        answer: "Most city tours are 3 to 4 hours, which covers all major Ringstraße highlights and palaces, with options to extend for museum visits."
      }
    ]
  },
  {
    id: "secure-transportation",
    slug: "secure-transportation",
    title: "Secure Transportation",
    subtitle: "Discreet close-protection transfers and armored vehicle convoys for high-profile clients",
    heroImage: "/images/fleet/Armored-Vehicle-.jpeg",
    shortDescription: "Certified security chauffeurs and armored vehicles for VIPs, diplomats, and high-net-worth individuals.",
    fullDescription: "Vienna is a global diplomatic hub home to the United Nations, OSCE, and OPEC. We provide discreet, reliable, and secure transportation solutions designed to mitigate security risks. Our team includes close-protection drivers trained in defensive driving, route reconnaissance, and emergency response.",
    features: [
      "B6/B7 certified armored luxury sedans and SUVs",
      "Professionally trained tactical and defensive chauffeurs",
      "Route planning with contingency and alternate evasion routes",
      "Confidential service protected by non-disclosure agreements",
      "Seamless coordination with private security details and embassies"
    ],
    faqs: [
      {
        question: "Are your security drivers specially trained?",
        answer: "Yes, our secure transportation drivers have completed defensive, evasive, and tactical chauffeur training."
      },
      {
        question: "Can you provide convoys and escort vehicles?",
        answer: "Yes, we can organize multi-vehicle convoys and coordinate directly with your personal security team."
      }
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "chani Gutfreund",
    rating: 5,
    text: "The best experience ever! The driver was very friendly, professional and on time. The car was spotless and very comfortable. I highly recommend Vienna Day Trip to anyone visiting Vienna!",
    date: "February 2026",
    platform: "Google"
  },
  {
    id: "rev-2",
    author: "Ofer Sharir",
    rating: 5,
    text: "Superb service! We booked a private day trip to Hallstatt and it was completely seamless. Our driver gave us great local tips, stopped for incredible photos, and made the whole trip memorable.",
    date: "January 2026",
    platform: "Google"
  },
  {
    id: "rev-3",
    author: "Gavin",
    rating: 5,
    text: "Outstanding airport transfer and chauffeur service in Vienna. Flight was delayed by 45 minutes and the driver was right there waiting with a sign. First-class Mercedes S-Class. Truly impressed.",
    date: "December 2025",
    platform: "Google"
  },
  {
    id: "rev-4",
    author: "sara picó",
    rating: 5,
    text: "Everything was perfect! We did the Wachau Valley tour and loved every minute. Melk Abbey and Dürnstein were breathtaking. Our chauffeur was so polite and accommodating with our family.",
    date: "October 2025",
    platform: "Google"
  },
  {
    id: "rev-5",
    author: "Gurj Singh",
    rating: 5,
    text: "Top notch chauffeur company. Used them for business meetings and a day trip to Bratislava. Punctual, elegant cars, courteous drivers. Will definitely use them whenever I am in Austria.",
    date: "September 2025",
    platform: "Google"
  }
];

export const TRUST_FEATURES = [
  {
    title: "Fixed Transparent Pricing",
    description: "No hidden charges, surge multipliers, or unexpected parking fees. The price you are quoted is the price you pay."
  },
  {
    title: "100% Private & Punctual",
    description: "Exclusively private vehicles tailored to your schedule. Chauffeurs always arrive 10-15 minutes prior to pickup."
  },
  {
    title: "Premium Mercedes Fleet",
    description: "Latest model Mercedes-Benz E-Class, S-Class, V-Class, and Sprinters with complimentary Wi-Fi and water."
  },
  {
    title: "Licensed & Insured",
    description: "Officially licensed Austrian chauffeur service with comprehensive passenger insurance and vetted chauffeurs."
  }
];

export const DAY_TRIP_ROUTES_LIST = [
  "Hallstatt Day Trip (10-12 hrs)",
  "Wachau Valley & Melk Abbey (8-9 hrs)",
  "Salzburg Day Trip (11-12 hrs)",
  "Budapest Day Trip (10-11 hrs)",
  "Prague Day Trip (12-13 hrs)",
  "Bratislava Day Trip (5-6 hrs)",
  "Zell am See & Kaprun (Full Day)",
  "Customized Day Trip (Flexible)"
];
