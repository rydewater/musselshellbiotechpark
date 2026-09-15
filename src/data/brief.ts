export type Role = "campus" | "pad" | "shop" | "hq" | "office" | "expansion";

export type Property = {
  id: string;
  rank: number;
  name: string;
  address: string;
  price: string;
  acres: string;
  building?: string;
  role: Role;
  why: string;
  show: string;
  maps: string;
  listing?: string;
  agent?: string;
  notes: string;
};

export type DayPlan = {
  id: string;
  day: string;
  date: string;
  status: "critical" | "open" | "closed" | "leave";
  title: string;
  bullets: string[];
};

export const CLOCK = {
  nowLabel: "Thu 10 Sep · Kurek first",
  leave: "James Tue 15 Sep · 1:00 p.m. MDT",
  window: "Kurek now · money today · James Tuesday",
  laborDay: "Labor Day (Mon 7) already passed",
};

export const CONTACTS = {
  neil: {
    name: "Neil Beyer",
    firm: "ELEPHAS / eXp Realty",
    phone: "406-272-6568",
    email: "neil@elephasre.com",
    web: "https://neilbeyer.exprealty.com/",
    note: "Already selling in Roundup. Run contract-for-deed on any Amish / off-grid listing.",
  },
  sweeney: {
    name: "Carson Sweeney",
    title: "General Manager, Fergus Electric Cooperative",
    office: "Lewistown HQ · 84423 US Hwy 87, Lewistown, MT 59457",
    phone: "406-538-3465",
    hours: "Mon–Thu 7:00 a.m.–5:30 p.m. Closed Fri–Sun.",
  },
  roundupCoop: {
    name: "Fergus Electric — Roundup",
    address: "17128 Hwy 12 E, Roundup, MT 59072",
    phone: "406-323-1602",
    local: "Bret Nellermoe · local operations",
    board: "Terry Frost · board president · District 5 South Roundup / Musselshell",
  },
  county: {
    name: "Musselshell County",
    address: "506 Main Street, Roundup",
    phone: "406-323-1104",
    people: [
      { name: "Randy Pancratz", role: "Commissioner", cell: "rpancratz@co.musselshell.mt.us" },
      { name: "Mike Goffena", role: "Commissioner", cell: "mgoffena@co.musselshell.mt.us" },
      { name: "Turley", role: "Commissioner", cell: "mturley@co.musselshell.mt.us" },
    ],
  },
};

export const STATS = [
  { value: "10", label: "Sites for Neil" },
  { value: "$180k", label: "Day-1 shop" },
  { value: "314 ac", label: "Campus option" },
  { value: "Fergus", label: "Electric co-op" },
];

export const ROLE_LABEL: Record<Role, string> = {
  campus: "Park campus",
  pad: "Shop pad",
  shop: "Day-1 shop",
  hq: "HQ / lab",
  office: "Admin",
  expansion: "Expansion",
};

export const PROPERTIES: Property[] = [
  {
    id: "hwy87-314",
    rank: 1,
    name: "Hwy 87 N campus",
    address: "US Hwy 87 N / S34 T09N R25E, Roundup area",
    price: "$900,000",
    acres: "314.19 ac",
    role: "campus",
    why: "First sale in a century. On-site power, well, grazing + ponderosa. This is the named park if diligence clears.",
    show: "Photograph power, well, highway access, and the hay ground. Do not call it a farm on Tuesday unless James agrees.",
    maps: "https://www.google.com/maps/search/?api=1&query=US+Hwy+87+N+Roundup+MT",
    agent: "Keller Williams Yellowstone / Garilynn Rapp · MLS 359976",
    notes: "Campus, not Day-1. Shop stays 304 Main.",
  },
  {
    id: "hwy87-pad",
    rank: 2,
    name: "Hwy 87 commercial pad",
    address: "Highway 87, Roundup",
    price: "$275,000",
    acres: "3.48 ac",
    role: "pad",
    why: "New shop pad if 304 Main is dead. Verify utilities and SID before you fall in love with the acreage.",
    show: "Three-phase, curb cut, floodplain, SID balance.",
    maps: "https://www.google.com/maps/search/?api=1&query=Highway+87+Roundup+MT+commercial",
    notes: "Pad, not campus.",
  },
  {
    id: "304-main",
    rank: 3,
    name: "304 Main Street",
    address: "304 Main Street, Roundup, MT 59072",
    price: "$180,000",
    acres: "five commercial lots",
    building: "1,114 sf · 2-bay",
    role: "shop",
    why: "Day-1 fabrication. Corner of Hwy 87 and Hwy 12. Two-bay, compact CNC + printers. Close if the building is clean.",
    show: "Door height, panel, three-phase, floodplain, lot lines.",
    maps: "https://www.google.com/maps/search/?api=1&query=304+Main+Street+Roundup+MT",
    agent: "Big M / Kenneth Minnie · 406-323-3111 · MLS 358499",
    notes: "Priority close with the 314 if both are clean.",
  },
  {
    id: "218-main",
    rank: 4,
    name: "218 Main Street",
    address: "218 Main Street, Roundup, MT 59072",
    price: "$150,000",
    acres: "downtown lot",
    building: "3,561 sf · 1915 brick",
    role: "hq",
    why: "HQ / lab. Brick presence on Main. Confirm floodplain before any offer.",
    show: "Basement water, structural, flood map, rear access.",
    maps: "https://www.google.com/maps/search/?api=1&query=218+Main+Street+Roundup+MT",
    notes: "Not the shop. Confirm floodplain on every Main Street brick.",
  },
  {
    id: "1st-e",
    rank: 5,
    name: "1st Street E office",
    address: "Nhn 1st Street E, Roundup, MT",
    price: "$200,000",
    acres: "office lot",
    role: "office",
    why: "Admin fallback if 218 is a flood problem.",
    show: "Parking, panel, whether it can take a small lab.",
    maps: "https://www.google.com/maps/search/?api=1&query=1st+Street+E+Roundup+MT",
    notes: "Fallback only.",
  },
  {
    id: "klein-rd",
    rank: 6,
    name: "24 Klein Rd",
    address: "24 Klein Rd, Roundup area",
    price: "$92,500",
    acres: "7.56 ac",
    role: "pad",
    why: "Industrial-edge pad, Signal Peak geography. Quiet buffer, not the park.",
    show: "Power, well, access, neighbor industrial.",
    maps: "https://www.google.com/maps/search/?api=1&query=24+Klein+Rd+Roundup+MT",
    notes: "South / Signal Peak. Not the 314.",
  },
  {
    id: "52-buckskin",
    rank: 7,
    name: "52 Buckskin Rd",
    address: "52 Buckskin Rd, Roundup area",
    price: "$149,000",
    acres: "40 ac",
    role: "expansion",
    why: "Assemblage with 120, 51, 118. Research buffer if the 314 is too public.",
    show: "Plat lines vs 120 / 51 / 118. Water. Access.",
    maps: "https://www.google.com/maps/search/?api=1&query=52+Buckskin+Rd+Roundup+MT",
    notes: "Ask Neil for a one-plat sketch.",
  },
  {
    id: "120-buckskin",
    rank: 8,
    name: "120 Buckskin Rd",
    address: "120 Buckskin Rd, Roundup area",
    price: "$99,000",
    acres: "40 ac",
    role: "expansion",
    why: "Pair with 52. Same assemblage conversation.",
    show: "Shared access, fences, water.",
    maps: "https://www.google.com/maps/search/?api=1&query=120+Buckskin+Rd+Roundup+MT",
    notes: "Map 51 and 118 with it.",
  },
  {
    id: "25-holly",
    rank: 9,
    name: "25 Holly Ln",
    address: "25 Holly Ln, Roundup area",
    price: "$82,999",
    acres: "13.28 ac",
    role: "expansion",
    why: "Price cut 2 Sep. Smaller buffer lot.",
    show: "Access off Holly, utilities, whether it sits in the Buckskin cluster.",
    maps: "https://www.google.com/maps/search/?api=1&query=25+Holly+Ln+Roundup+MT",
    notes: "Price cut is the only reason it is in the ten.",
  },
  {
    id: "tbd-buckskin",
    rank: 10,
    name: "TBD Buckskin Rd",
    address: "Buckskin Rd, Roundup area",
    price: "$69,500",
    acres: "20 ac",
    role: "expansion",
    why: "Cheapest acreage in the loop. Only as assemblage glue.",
    show: "Legal description. Do not offer without the plat sketch.",
    maps: "https://www.google.com/maps/search/?api=1&query=Buckskin+Rd+Roundup+MT",
    notes: "TBD address — Neil has to pin it.",
  },
];

export const ITINERARY: DayPlan[] = [
  {
    id: "thu",
    day: "Thursday",
    date: "10 Sep · now",
    status: "critical",
    title: "Gary Kurek first. Then money. Burhop waits.",
    bullets: [
      "Send the Kurek intro on the Boardy + Andrew thread from this morning. 25 µm hot clearance, 5-micron finishing. Do not lead with Burhop.",
      "Call Guild 406-237-0104 — move Jackie’s $300k FHA onto 203(k) Standard or HomeStyle, as-completed vs Musselshell $541,287 / $832,750.",
      "Send Clearwater (Dean Gillmore) and MoFi drafts. Call FSA Roundup 406-323-2103 if you still have a county presence.",
      "Neil: contract-for-deed on any Amish / unwired listing. That is the only same-month close.",
    ],
  },
  {
    id: "fri",
    day: "Friday",
    date: "11 Sep",
    status: "open",
    title: "Lender names, not brochures. Wait on Gary.",
    bullets: [
      "Chase Guild renovation desk and Clearwater membership / construction box. Get a human name and a yes/no on off-grid.",
      "If Gary has not replied, one LinkedIn note + one voicemail at 415-696-9459. Still no Burhop.",
      "NSF Project Pitch copy is in Capital. Do not let land chase bury the Nov 4 window.",
    ],
  },
  {
    id: "sat",
    day: "Saturday",
    date: "12 Sep",
    status: "open",
    title: "James notes + dual-use acreage story",
    bullets: [
      "Write the Tuesday one-pager: ScanIQ as organic-geometry engine (scaffolds, nutrient channels, micro-lattices), not a wet lab.",
      "MBRCT + Growth Through Agriculture. GTA 2026 already awarded — next window is the ask.",
      "Do not call the 314-acre Hwy 87 N tract a farm unless James agrees the cropping / bioreactor story is real. Shop stays 304 Main.",
    ],
  },
  {
    id: "sun",
    day: "Sunday",
    date: "13 Sep",
    status: "open",
    title: "Read-ahead. No new intros.",
    bullets: [
      "Re-read James notes. Pack the MBRCT / GTA talking points. One page, not a deck.",
      "If a seller will hold paper, draft the 24–36 month balloon terms for Neil before Monday.",
    ],
  },
  {
    id: "mon",
    day: "Monday",
    date: "14 Sep",
    status: "open",
    title: "Jackson 9:00 a.m. PT. Burhop only if Kurek is in.",
    bullets: [
      "Jackson Matsumura (Berkeley / LiDAR + 3D geometry) · Meet 9:00–9:30 a.m. PT. Point-cloud → PicoGK is the overlap.",
      "If Gary confirmed, then and only then send the Burhop hold draft. Print strategy in service of the grind.",
      "FSA / RD follow-up if Thursday went to voicemail.",
    ],
  },
  {
    id: "tue",
    day: "Tuesday",
    date: "15 Sep",
    status: "critical",
    title: "James Stephens · biotech manufacturing",
    bullets: [
      "1:00–1:30 p.m. MDT / 12:00–12:30 p.m. PT. meet.google.com/bhz-iszw-qof. james@thehiddenmachinery.com.",
      "Ask: would a fermentation-class founder actually use the geometry path, and which Montana program officer he would call first.",
      "Dual-use acreage is how FSA / GTA even theoretically open. Do not oversell the wet-lab story.",
    ],
  },
];

export type Slide = {
  kicker: string;
  title: string;
  body: string;
  image?: string;
  caption?: string;
};

export const SLIDES: Slide[] = [
  {
    kicker: "ScanIQ LLC  ·  Confidential site brief",
    title: "A computational manufacturing park for Musselshell County",
    body: "Roundup sits on Hwy 12 and Hwy 87, 50 minutes from Billings, on Fergus Electric’s wires, with 314 acres of highway land for sale for the first time in a century. ScanIQ needs a shop this month and a campus this year.",
    image: "/images/campus-concept.jpg",
    caption: "Concept · Hwy 87 N campus on existing grazing + ponderosa",
  },
  {
    kicker: "What ScanIQ is",
    title: "Phone scan to gated G-code. Not a wet lab. Not a data center.",
    body: "LiDAR / photogrammetry in, implicit PicoGK geometry, a provenance graph, and toolpaths a two-bay shop can run. Powersports, subsea, aerospace housings. WOSB. Jackie is CEO.",
    image: "/images/shop-interior.jpg",
    caption: "Day-1 cell · two-bay print + compact CNC",
  },
  {
    kicker: "Day-1 shop",
    title: "304 Main is the shop. The 314 is the park.",
    body: "1,114 sf, two bays, five lots, $180k, corner of 87 and 12. Close it if the panel and doors are honest. Do not wait on a 314-acre diligence to start making parts.",
  },
  {
    kicker: "Campus",
    title: "314 acres on Hwy 87 N, first sale in a hundred years.",
    body: "Power and well on site. Grazing and ponderosa. TEDD conversation with the county. Fergus Electric for a staged large-load, not a fantasy substation.",
    image: "/images/roundup-prairie.jpg",
    caption: "Hwy 87 N · open grazing, highway frontage",
  },
  {
    kicker: "The ask",
    title: "Three-phase, a TEDD overlay, and a listing agent who will hold paper.",
    body: "Sweeney on load. Commissioners on TEDD and 215 Main. Neil on the ten sites — and on contract-for-deed wherever HUD 4000.1 kills a standard FHA.",
  },
];

export const SWEENEY_PITCH = [
  "ScanIQ is a computational manufacturing shop — scan to gated G-code — locating on Fergus wires, not a data center and not a crypto load.",
  "Day-1 is 304 Main: two bays, modest panel, printers plus compact CNC. Campus option is 314 acres on Hwy 87 N with existing power and a well.",
  "We need 20 minutes on three-phase at 304 Main and a staged large-load path if the 314 becomes a named park.",
  "Jackie Anderson is CEO and majority (WOSB). I am technical lead. We will leave a packet at 17128 Hwy 12 E.",
  "Ask is a conversation and a load letter, not a line extension today.",
];

export const SWEENEY_ASKS = [
  { who: "Sweeney", what: "20 minutes on three-phase at 304 Main and a staged large-load letter for the 314." },
  { who: "Nellermoe", what: "Packet at the Roundup office. Line-truck intercept if you are still in county." },
  { who: "Frost", what: "District 5 board awareness. Not a vote request." },
];

export const NEIL_SCRIPT = `Neil —

John Antaramian, ScanIQ. Follow-up on the ten Roundup / Musselshell sites.

Priority remains 1 (314 acres Hwy 87 N, $900k, Rapp / MLS 359976) and 3 (304 Main, $180k, Big M / MLS 358499). Close those if they are clean.

New constraint: Jackie’s $300k FHA dies on HUD 4000.1 electrical and plumbing. On any Amish / off-grid / unplumbed listing, we want contract for deed or seller carry — earnest, monthly interest, 24–36 month balloon, we install utilities. No appraisal contingency.

Which of the ten will a seller even entertain as owner-financed? Those close this month. 203(k) / HomeStyle is the path once a house can take a contractor.

I will call 406-272-6568.

John Antaramian
ScanIQ
442-458-1130
ja@scaniq.online`;
