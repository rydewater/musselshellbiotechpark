export type IntroStep = {
  id: string;
  order: number;
  status: "now" | "next" | "hold";
  name: string;
  role: string;
  why: string;
  reach: string[];
  script: string;
};

export type Lender = {
  id: string;
  name: string;
  desk: string;
  phone: string;
  email?: string;
  fit: string;
  script: string;
};

export type MoneyPath = {
  id: string;
  name: string;
  ceiling: string;
  mechanism: string;
  advantage: string;
  catch: string;
};

export const PEOPLE = {
  andrew: {
    name: "Andrew Klein",
    firm: "Tomahawk Turbine / Trick-Cycle",
    email: "aklein@tomahawkturbine.com",
    linkedin: "https://www.linkedin.com/in/andrew-klein-8214a922",
    note: "Met Thu 10 Sep 10:00 a.m. PT. Product engineer at Solventum. Hardware founder: Eccentric Innovations (Hemi PFI) and Tomahawk TX closed-chamber turbine.",
  },
  kurek: {
    name: "Gary Kurek",
    firm: "Kurek Robot / Kugar Inc.",
    phone: "415-696-9459",
    web: "https://kurekrobot.com/",
    linkedin: "https://www.linkedin.com/in/garykurek",
    x: "https://x.com/garykurek",
    note: "Thiel Fellow. ~65 aerospace parts at ~5-micron. AI-native high-precision metal and composite production. No public email — phone, LinkedIn, or Boardy intro.",
  },
  burhop: {
    name: "Mark Burhop",
    firm: "Sciath aiM",
    linkedin: "https://www.linkedin.com/in/burhop",
    note: "Siemens 2022 Inventor of the Year. Contract CNC + metal 3D-print + AI toolpaths / 3MF. Step two, after Kurek is in the thread.",
  },
  james: {
    name: "James Stephens",
    firm: "The Hidden Machinery",
    email: "james@thehiddenmachinery.com",
    meet: "https://meet.google.com/bhz-iszw-qof",
    when: "Tue 15 Sep · 1:00–1:30 p.m. MDT / 12:00–12:30 p.m. PT",
    note: "Repeat biotech founder. Industrial fermentation platform through acquisition. Montana ag-biotech grant conversation.",
  },
  jackie: {
    name: "Jacqueline Anderson",
    file: "Standard $300k FHA pre-approval — habitability is the blocker, not credit.",
  },
};

export const INTROS: IntroStep[] = [
  {
    id: "kurek",
    order: 1,
    status: "now",
    name: "Gary Kurek",
    role: "First. Do not skip.",
    why: "Andrew’s Tomahawk bottleneck is ~0.001 in (25 µm) hot clearance across intermeshing rotors. Near-net additive will not hold that under thermal load. The engine lives or dies on secondary finishing, grinding, and metrology. Kurek’s demonstrated ~5 µm aerospace work is the direct answer to Andrew’s tolerance-stack skepticism.",
    reach: [
      "Boardy intro (fastest — Boardy already named him today)",
      "415-696-9459",
      "linkedin.com/in/garykurek",
      "kurekrobot.com",
    ],
    script: `Gary — John Antaramian, ScanIQ (computational manufacturing, PicoGK SDF → gated G-code). Connecting you with Andrew Klein at Tomahawk Turbine.

Andrew’s architecture is a closed-chamber, turbine-like engine (Tomahawk TX). The make-or-break spec is ~0.001" (25 µm) hot clearance across intermeshing rotors. Additive gets a near-net blank. It does not hold operating clearance under dynamic thermal load. That is a finishing + grinding + metrology problem, which is why you are first, not a printer vendor.

You have produced on the order of 65 aerospace parts at ~5-micron. That is the number Andrew needs to hear from a shop that already lives there — not from a slide.

20 minutes. Andrew on the thread. I stay on to map ScanIQ’s constraint graph into your finishing envelope. No pitch deck.`,
  },
  {
    id: "burhop",
    order: 2,
    status: "next",
    name: "Mark Burhop",
    role: "Immediately after Kurek is in.",
    why: "Once Kurek owns the finishing envelope, Burhop connects near-net metal additive and AI toolpaths (Sciath aiM / 3MF / Siemens Inventor of the Year) to that envelope. Do not lead with Burhop — Andrew’s objection is post-machine, not print strategy.",
    reach: ["linkedin.com/in/burhop", "Boardy after Kurek confirms"],
    script: `Mark — John Antaramian, ScanIQ. Andrew Klein (Tomahawk TX) needs a near-net metal additive path whose toolpaths and heat input leave a grindable stock envelope for ~25 µm hot rotor clearance. Gary Kurek is on finishing/metrology first. You are the print + AI-toolpath half.

Ask: can Sciath aiM hold a defined stock-on allowance on intermeshing rotor blanks so a 5-micron finish pass is possible, not a hope? 20 minutes with Andrew and me after the Kurek call.`,
  },
];

export const MONEY: MoneyPath[] = [
  {
    id: "203k",
    name: "FHA 203(k) Standard or Fannie HomeStyle",
    ceiling: "FHA Musselshell 1-unit $541,287 · conventional $832,750",
    mechanism: "Purchase + power, well, septic, HVAC as one loan on as-completed value. Jackie’s $300k file moves to a renovation desk — not a new borrower.",
    advantage: "Bypasses current habitability defects because escrow pays the contractor after close. HomeStyle is usually looser than FHA on non-traditional rural stock.",
    catch: "Still needs a licensed contractor, a 203(k) consultant on Standard, and the as-completed appraisal to clear. Will not close a true Amish no-electric house as-is.",
  },
  {
    id: "carry",
    name: "Contract for deed / seller carryback",
    ceiling: "Whatever the seller will hold · 24–36 month balloon",
    mechanism: "Cash down + monthly interest, balloon when utilities are in, then refinance conventional / FHA / USDA.",
    advantage: "No HUD MPS, no GSE appraisal, no underwriter. This is the only path that closes an unplumbed / unwired parcel this month.",
    catch: "Seller has to want out more than they want a bank. Neil runs this conversation, not the mortgage broker.",
  },
  {
    id: "fsa",
    name: "FSA Direct Farm Ownership",
    ceiling: "Up to $600,000 · joint-financing 50% FSA",
    mechanism: "USDA Farm Service Agency lends for owner-operator farmland. Roundup office: 747 Main, 406-323-2103 / 406-323-2067.",
    advantage: "Less suburban-code rigidity if the parcel is a working ag or ag-biotech site.",
    catch: "Applicant must be a farmer (typically 3 years of farm-business participation, not labor-only). ScanIQ-as-shop is a stretch until Jackie documents an ag enterprise. Ask, do not assume yes.",
  },
  {
    id: "cdfi",
    name: "Montana CDFI / portfolio (Clearwater, MoFi)",
    ceiling: "Balance-sheet · case by case",
    mechanism: "In-house paper that does not sell to Fannie or FHA. Can underwrite off-grid, unfinished, or non-conforming rural stock.",
    advantage: "The actual workaround when 203(k) still wants a wired house on day one.",
    catch: "Slower credit box, membership (Clearwater), and they will still want a path to utilities inside 6–12 months.",
  },
];

export const LENDERS: Lender[] = [
  {
    id: "guild",
    name: "Guild Mortgage — Billings",
    desk: "Dede Stoner, branch manager · NMLS 250504 · renovation / FHA / USDA",
    phone: "406-237-0104",
    fit: "First call. Switch Jackie’s $300k FHA file onto 203(k) Standard or HomeStyle. Ask as-completed capacity vs Musselshell $541,287 FHA / $832,750 conventional.",
    script: `Jackie is pre-approved for a standard $300k FHA loan. The rural Montana parcels we are targeting lack conventional electrical and indoor plumbing. We need to move her file onto FHA 203(k) Standard or Fannie Mae HomeStyle, sized on as-completed value.

What is max borrowing capacity on future completed value, what is the Musselshell County limit you will actually underwrite, and how fast can her existing file land on your renovation desk?`,
  },
  {
    id: "clearwater",
    name: "Clearwater Credit Union",
    desk: "Dean Gillmore, real estate LO · NMLS 190283 · Montana’s largest CDFI",
    phone: "406-523-3526",
    email: "dean.gillmore@clearwatercreditunion.org",
    fit: "Portfolio / construction / rural. Mortgage servicing 406-523-3360. Missoula HQ, Bozeman branch.",
    script: `We are looking at rural residential parcels in Montana — timber or heavy construction, currently off-grid, no conventional electrical drop or plumbing. FHA and secondary-market paper will not touch them as-is.

Do you offer portfolio bridge, rural residential construction, or land-plus-improvement loans held on your balance sheet so we can acquire and finish mechanicals in 6–12 months?`,
  },
  {
    id: "mofi",
    name: "MoFi (Montana CDC)",
    desk: "Small-business + housing CDFI · 229 E Main, Missoula",
    phone: "406-728-9234",
    email: "info@mtcdc.org",
    fit: "Non-bank. Business loans to $3M, home repair, down-payment assistance. Not a first-lien Amish closer — a stack piece and a rural-credit translator.",
    script: `ScanIQ LLC (WOSB) is locating a computational manufacturing and ag-biotech test footprint on rural Musselshell County acreage. Standard FHA is blocking on HUD 4000.1 electrical/plumbing. We need CDFI or portfolio options for non-conforming rural acquisition plus a 6–12 month finish-out. Who on your desk underwrites that?`,
  },
  {
    id: "fsa",
    name: "FSA — Roundup Service Center",
    desk: "Michelle Blegen, CED · 747 Main Street, Roundup",
    phone: "406-323-2103",
    fit: "Walk-in while you still have a Roundup presence via Neil. Direct Farm Ownership / beginning-farmer. Honesty required: we are not a conventional farm yet.",
    script: `We are acquiring rural property in Musselshell County for residential use alongside controlled agricultural and bio-manufacturing research. FHA is bottlenecking on off-grid guidelines. Can this parcel classify under beginning farmer or agricultural-enterprise funding if we deploy ag-biotech, soil development, or bio-processing on site? What three-year farm-experience test will you apply?`,
  },
  {
    id: "rd",
    name: "USDA Rural Development — Montana",
    desk: "Housing: Katina Uecker · Business: Lad Barney · Billings area office",
    phone: "406-371-2553",
    fit: "Section 502/504 is housing repair/purchase, not a shop. B&I guaranteed loan (Lad Barney, 406-585-2540) is the manufacturing capital path. Keep them separate on the call.",
    script: `Two files, not one. (1) Jackie’s rural residence — is 502/504 or a repair grant even possible if the house fails HUD electrical/plumbing today? (2) ScanIQ shop on Fergus Electric — B&I guaranteed loan via a lender, 85% under $5M. Who owns each desk in Billings?`,
  },
  {
    id: "neil-seller",
    name: "Neil / seller — contract for deed",
    desk: "Neil Beyer, ELEPHAS · 406-272-6568 · neil@elephasre.com",
    phone: "406-272-6568",
    email: "neil@elephasre.com",
    fit: "The un-banked close. Use on any Amish, unwired, or unplumbed listing that 203(k) still will not touch.",
    script: `We recognize the build quality, but conventional and FHA appraisals will stall on grid power and standard plumbing. We want to present a contract for deed or seller carryback: earnest capital, monthly interest, 24–36 month balloon, we install code-compliant utilities at our cost. Would the seller close without an appraisal contingency?`,
  },
];

export const DAY = [
  { id: "lend", time: "08:30–09:30", title: "Lending pivot", who: "Guild / renovation specialist", obj: "Move Jackie’s $300k FHA onto 203(k) or HomeStyle. Ask as-completed cap vs $541,287 / $832,750." },
  { id: "cdfi", time: "09:30–10:30", title: "Portfolio / CDFI", who: "Clearwater + MoFi", obj: "In-house paper for off-grid / unplumbed. Get a name, not a brochure." },
  { id: "usda", time: "10:30–11:30", title: "USDA + FSA", who: "Roundup FSA 406-323-2103 · RD housing 406-371-2553", obj: "Farm Ownership eligibility (honest) and 502/504 vs B&I split." },
  { id: "deed", time: "11:30–12:30", title: "Seller carry", who: "Neil Beyer", obj: "Contract-for-deed terms on any Amish / off-grid parcel. Balloon 24–36 months." },
  { id: "kurek", time: "13:30–14:30", title: "Gary Kurek intro", who: "Boardy → Andrew + Gary", obj: "Send the draft. 20 minutes. Finishing first, printers second." },
  { id: "james", time: "14:30–16:00", title: "James Stephens prep", who: "Tue 15 Sep 1:00 p.m. MDT", obj: "ScanIQ as organic-geometry engine. MBRCT + Growth Through Agriculture. Dual-use acreage." },
  { id: "wrap", time: "16:00–17:00", title: "Daily review", who: "Jackie + John", obj: "Term sheets, lender notes, escrow budget for utilities." },
];

export const JAMES_PREP = [
  {
    title: "Computational-to-physical biotech",
    body: "ScanIQ is not a wet lab. It is the geometry engine: porous scaffolding, nutrient-fluid channels, micro-lattices for cellular growth or protein synthesis — the same SDF kernel that keeps a Halbach housing manifold. Phone LiDAR / SfM → provenance graph → PicoGK → gated toolpaths. James commercialized fermentation. We commercialized the part you cannot Boolean in SolidWorks.",
  },
  {
    title: "Montana grant stack for Tuesday",
    body: "MBRCT (Board of Research and Commercialization Technology) and MDA Growth Through Agriculture (match required, value-added ag). Federal NSF SBIR Project Pitch is already copy-ready in Capital — do not reopen it on this call. GTA 2026 already awarded (Solum Inc. bio-materials in Bozeman is the comparable). Next GTA window is the ask, not a yesterday award.",
  },
  {
    title: "Dual-use acreage",
    body: "A dedicated ag-biotech test pad on rural Montana land is what makes FSA and GTA even theoretically in play, and it offsets site cost. Do not call the 314-acre Hwy 87 N tract a farm unless James agrees the cropping/bioreactor story is real. Shop stays 304 Main. Research buffer can be Buckskin or the 314.",
  },
];

export const HUD_BLOCK =
  "HUD Handbook 4000.1 Minimum Property Standards require operational continuous electrical service, pressurized hot/cold water, permanent heating, and code-compliant plumbing. That is why a standard $300k FHA dies on Amish / off-grid stock. 203(k) and HomeStyle lend against the finished house. Seller carry ignores HUD entirely.";

export const NOW = {
  asOf: "Thu 10 Sep · ~12:30 p.m. PT",
  line: "Morning lender blocks slipped. Kurek is the live hour. Burhop stays on hold. James is Tuesday.",
  actions: [
    { id: "send-kurek", label: "Read the Kurek draft once, then send it. Boardy + Andrew, same thread as this morning." },
    { id: "guild", label: "Call Guild Billings 406-237-0104. Switch Jackie’s $300k FHA onto 203(k) or HomeStyle." },
    { id: "cdfi-send", label: "Send Clearwater + MoFi drafts. Do not send Burhop." },
  ],
};

export const KUREK_EMAIL = `Boardy / Andrew —

Just off the 10:00 a.m. PT call. Priority is Gary Kurek first. Not Mark Burhop. Not a printer OEM.

Andrew, your Tomahawk bottleneck as I heard it: ~0.001" (25 µm) hot clearance across intermeshing rotors. Near-net additive cannot hold operating clearance under dynamic thermal load. The engine lives on secondary finishing, grinding, and metrology.

Gary Kurek (Kurek Robot / Kugar, Thiel Fellow) has produced on the order of 65 aerospace parts at ~5-micron. That number is the answer to the tolerance-stack objection. Phone 415-696-9459. LinkedIn linkedin.com/in/garykurek. Site kurekrobot.com.

Boardy — please make the intro: Gary Kurek ↔ Andrew Klein, John on the thread, 20 minutes. I will not lead with a deck.

Mark Burhop / Sciath aiM is step two, after Gary is in. He owns near-net metal additive and AI toolpaths. Sending him first would confirm Andrew’s fear that we are printing our way around a grind problem.

John Antaramian
ScanIQ LLC · WOSB
442-458-1130
ja@scaniq.online`;

export const BURHOP_EMAIL = `HOLD until Kurek has replied. Do not send this to Andrew.

Boardy —

Step two, as agreed: Mark Burhop, Sciath aiM (Siemens 2022 Inventor of the Year). Contract CNC + metal 3D-print + AI toolpaths / 3MF. LinkedIn linkedin.com/in/burhop.

Ask of Mark: a defined stock-on allowance on Tomahawk intermeshing rotor blanks so Gary’s 5-micron finish pass is possible. Print strategy in service of the grind, not instead of it.

Please intro Mark after Gary is on a calendar.

John Antaramian
ScanIQ LLC
442-458-1130`;

export const JAMES_NOTES = `James — for Tue 15 Sep 1:00 p.m. MDT (meet.google.com/bhz-iszw-qof).

ScanIQ maps complex organic geometry — porous scaffolds, nutrient channels, micro-lattices — with an implicit SDF kernel, then gates G-code. We are the computational-to-physical layer, not a fermenter.

Montana: MBRCT + Growth Through Agriculture as the state stack; NSF Project Pitch already in draft for Nov 4. Dual-use rural acreage in Musselshell County is how we try to open FSA / GTA, with 304 Main as the Day-1 shop.

I want your read on whether a fermentation-class founder would actually use that geometry path, and which Montana program officer you would call first.`;

export const CLEARWATER_EMAIL = `Dean —

Jacqueline Anderson has a standard $300k FHA pre-approval. Credit is not the problem. The rural Montana parcels we are targeting in Musselshell County / Roundup are timber or heavy construction but currently off-grid — no conventional electrical drop, no standard indoor plumbing. HUD Handbook 4000.1 kills a plain FHA file on those houses.

We need in-house paper: portfolio bridge, rural residential construction, or land-plus-improvement held on Clearwater’s balance sheet so we can acquire and finish mechanicals in 6–12 months. FHA 203(k) Standard and Fannie HomeStyle are the parallel path if a renovation desk will size on as-completed value (Musselshell 1-unit FHA limit $541,287; conventional $832,750).

Do you underwrite that, or who on your desk does? Jackie can be on a call this week.

John Antaramian
ScanIQ LLC · Jackie is CEO / majority (WOSB)
442-458-1130
ja@scaniq.online`;

export const MOFI_EMAIL = `MoFi desk —

ScanIQ LLC (WOSB) is locating a computational manufacturing and ag-biotech test footprint on rural Musselshell County acreage. Jackie Anderson, our CEO, has a $300k standard FHA pre-approval that dies on HUD 4000.1 electrical and plumbing — the stock is off-grid / unplumbed, not a credit fail.

We need CDFI or portfolio options for non-conforming rural acquisition plus a 6–12 month finish-out of power, well, septic, HVAC. Who on your desk underwrites that, and is this a housing file, a small-business file, or a stack of both?

John Antaramian
Technical Lead, ScanIQ LLC
442-458-1130
ja@scaniq.online`;

export const NEIL_CARRY_EMAIL = `Neil —

Follow-up on the off-grid / Amish-built stock in the ten. Conventional and FHA appraisals will stall on grid power and standard plumbing. On those listings we want to present a contract for deed or seller carryback: earnest capital, monthly interest, 24–36 month balloon, we install code-compliant utilities at our cost. No appraisal contingency.

Which of the ten will a seller even entertain as owner-financed? Those are the ones we can close this month. 203(k) / HomeStyle is the path once a house can take a contractor.

John Antaramian
442-458-1130
ja@scaniq.online`;
