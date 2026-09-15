export type ProgramStatus = "apply" | "queue" | "blocked" | "closed";
export type ProgramLane =
  | "fed"
  | "state"
  | "local"
  | "agro"
  | "tech"
  | "intl"
  | "mfg"
  | "saas"
  | "client";

export type Program = {
  id: string;
  rank: number;
  name: string;
  funder: string;
  lane: ProgramLane;
  status: ProgramStatus;
  amount: string;
  deadline: string;
  why: string;
  apply: string;
  applyUrl?: string;
  contact: string;
  email?: string;
  blocker?: string;
  package: string;
};

export const LANE_LABEL: Record<ProgramLane, string> = {
  fed: "Federal",
  state: "State",
  local: "Local",
  agro: "Ag / rural",
  tech: "Tech",
  intl: "International",
  mfg: "Adv. mfg",
  saas: "SaaS",
  client: "Client $",
};

export const STATUS_LABEL: Record<ProgramStatus, string> = {
  apply: "Do now",
  queue: "Queue",
  blocked: "Blocked",
  closed: "Closed",
};

export const PROGRAMS: Program[] = [
  {
    id: "nsf-pitch",
    rank: 1,
    name: "NSF SBIR Project Pitch (NSF 26-510)",
    funder: "NSF America's Seed Fund",
    lane: "fed",
    status: "apply",
    amount: "Phase I $305,000",
    deadline: "Pitch now · full proposal 4 Nov 2026",
    why: "Critical path. Invitation required before the Nov 4 full proposal. Topic: Advanced Manufacturing — M6 Modeling & Simulation / M3 Cybermanufacturing. Two pitches per 12 months. One under review at a time.",
    apply: "Paste the four fields from the NSF panel into nsfgov.my.site.com/mywork. Jacqueline as PI/CEO (WOSB majority). John as technical lead. Cannot be submitted from this brief — NSF requires your Research.gov / myWork login.",
    applyUrl: "https://nsfgov.my.site.com/mywork",
    contact: "sbir@nsf.gov · seedfund.nsf.gov/apply/project-pitch",
    email: "sbir@nsf.gov",
    package: `NSF Project Pitch — ScanIQ LLC (WOSB)

Title: Autonomous Generative Manufacturing Platform for High-Performance Complex Geometry Optimization

Topic: Advanced Manufacturing — M6 Modeling and Simulation (alt. M3 Cybermanufacturing)

Company: ScanIQ LLC · Jacqueline Anderson, CEO/majority owner · John Antaramian, Technical Lead
Portal: https://nsfgov.my.site.com/mywork
Solicitation: NSF 26-510 · Phase I $305,000 · Full proposal window 4 Nov 2026

Paste the four character-limited fields from the Capital → NSF panel. Do not invent a second pitch this window.`,
  },
  {
    id: "mtip-fast",
    rank: 2,
    name: "MTIP FAST Microgrant FY2027",
    funder: "Montana Innovation Partnership (MSU)",
    lane: "state",
    status: "apply",
    amount: "Up to $3,000",
    deadline: "Opens 30 Sep 2026 · apply that week",
    why: "Pays NSF proposal labor: consultant, agency travel, supporting data. Requires a Montana small business actively preparing SBIR/STTR. Aligns with the Nov 4 full proposal.",
    apply: "Intro letter now (draft queued). Application PDF live; window opens 30 Sep. Need a Montana entity / registered agent before they will fund.",
    applyUrl: "https://www.montanainnovationpartnership.org/fast-microgrants",
    contact: "sbir@montana.edu · 406-994-7788",
    email: "sbir@montana.edu",
    package: `MTIP FAST Microgrant — ScanIQ LLC intro

We are a WOSB computational-manufacturing company locating a shop in Roundup / Musselshell County and submitting an NSF SBIR Project Pitch (NSF 26-510, Advanced Manufacturing M6) this window, with a 4 Nov 2026 full-proposal target.

Request: notify us the hour FY2027 FAST opens (30 Sep 2026) and confirm whether a California-formed LLC with a Montana operating location / registered agent is eligible for the $3,000 SBIR-prep microgrant.

Use of funds: NSF pitch consultant hours, supporting voxel-benchmark data, and one agency/commercialization trip.

Jacqueline Anderson, CEO · John Antaramian, Technical Lead · ja@scaniq.online · 442-458-1130`,
  },
  {
    id: "mmec",
    rank: 3,
    name: "MMEC client intake (NIST MEP)",
    funder: "Montana Manufacturing Extension Center",
    lane: "mfg",
    status: "apply",
    amount: "Advisory · often cost-share",
    deadline: "Open now",
    why: "The state MEP center is the door to shop layout, quality, and later EDA/MEP manufacturing grants. They already serve rural metal shops. Roundup two-bay + Campus is exactly their map.",
    apply: "Email mmec@montana.edu, request a rural-manufacturing intake for a computational print/CNC cell in Roundup. Ask which regional advisor covers Musselshell.",
    applyUrl: "https://www.montana.edu/mmec/",
    contact: "mmec@montana.edu · 406-994-3812",
    email: "mmec@montana.edu",
    package: `MMEC intake — ScanIQ LLC / Roundup computational manufacturing cell

ScanIQ LLC (WOSB) is locating a Day-1 two-bay fabrication shop in Roundup (looking at 304 Main, $180k) and a 314-acre campus option on US Hwy 87 N. We run an implicit-geometry (PicoGK / SDF) pipeline from phone LiDAR to gated G-code for powersports, subsea, and aerospace housings.

Ask: assign the Musselshell / Billings-region advisor. We need a 60-minute intake on (1) 3-phase and shop layout at 304 Main, (2) quality system for a two-printer + compact CNC cell, (3) which Montana manufacturing grants MMEC will co-sign once we are a client.

On the ground through Mon 7 Sep, leave pre-dawn Tue 8 Sep. Jacqueline Anderson, CEO · John Antaramian, Technical Lead · ja@scaniq.online · 442-458-1130`,
  },
  {
    id: "usda-bi",
    rank: 4,
    name: "USDA B&I Guaranteed Loan",
    funder: "USDA Rural Development — Montana",
    lane: "agro",
    status: "apply",
    amount: "Lender loan · 85% guarantee under $5M",
    deadline: "Open FY26 (1 Oct–30 Sep) · rolling",
    why: "The land stack (314 ac + 304 Main ≈ $1.08M) is a rural business acquisition in a town under 50k. B&I is the real estate path. REAP grants are paused; this is not.",
    apply: "You do not apply to USDA directly. Call MT Business Programs 406-585-2540, ask for a B&I lender in Billings/Roundup, then the bank files.",
    applyUrl: "https://www.rd.usda.gov/programs-services/business-programs/business-and-industry-guaranteed-loan",
    contact: "MT RD Business Programs · Bozeman · 406-585-2540",
    package: `USDA B&I — ScanIQ Musselshell Park project summary for a participating lender

Borrower: ScanIQ LLC (WOSB)
Project: Acquire and occupy a two-bay shop at 304 Main, Roundup, MT ($180,000) and, subject to diligence, 314.19 acres US Hwy 87 N / S34 T09N R25E ($900,000) as a computational manufacturing campus. Combined real-estate ask ≈ $1.08M plus fit-out.
Use: rural advanced-manufacturing facility (print/CNC cells, design room). Not a farm. Request 80–85% B&I guarantee.
Jobs: shop techs + visiting OEM programs (MX6, Stapes, aerospace). Non-extractive payroll in Musselshell County.
Ask of USDA MT: name two participating B&I lenders who will take a Roundup / Musselshell file this quarter.

Jacqueline Anderson, CEO · John Antaramian, Technical Lead · ja@scaniq.online · 442-458-1130`,
  },
  {
    id: "headwaters",
    rank: 5,
    name: "Headwaters Tech Hub Summit + consortium",
    funder: "EDA Tech Hubs / Headwaters (photonics)",
    lane: "tech",
    status: "apply",
    amount: "Membership + deal-flow · not a check",
    deadline: "Summit 9–11 Sep 2026 · UM Missoula",
    why: "Montana’s EDA tech door. Photonics / sensing overlap with ScanIQ scan provenance. Registration is free/FCFS. Calendar conflict: you leave Roundup pre-dawn Tue 8 Sep; Alibaba CoCreate is LA 9–10 Sep.",
    apply: "Register anyway. Send a consortium note. If you slip the Tuesday exit, be in Missoula Wednesday. If you fly LA for Alibaba, send Jackie or a one-pager.",
    applyUrl: "https://www.eventbrite.com/e/2026-headwaters-tech-hub-summit-tickets-1989921878907",
    contact: "headwaterstechhub.us/consortium-membership",
    package: `Headwaters Tech Hub — ScanIQ LLC consortium interest

ScanIQ LLC (WOSB) is standing up a computational manufacturing park in Musselshell County (Roundup). Our stack is phone LiDAR/SfM → provenance graph → PicoGK SDF → safety-gated G-code. NSF SBIR Project Pitch this window (Advanced Manufacturing M6).

We want consortium membership as a rural advanced-manufacturing / sensing node, not as a photonics fab. Cannot be in Missoula 9–11 Sep (on the ground in Roundup through 7 Sep, then either in transit or at Alibaba CoCreate LA). Please hold a 20-minute follow-up the week of 14 Sep.

Jacqueline Anderson, CEO · John Antaramian, Technical Lead · ja@scaniq.online · 442-458-1130`,
  },
  {
    id: "export-step",
    rank: 6,
    name: "Export Montana STEP",
    funder: "MT Commerce / SBA STEP",
    lane: "intl",
    status: "queue",
    amount: "50–75% reimbursement · up to $10k/award · $30k/yr",
    deadline: "Apply before the activity · rolling",
    why: "Pays international MadHat seats and trade-show booth once you are a Montana exporter. Cannot reimburse costs already spent. ja@scaniq.online is ticketed for Alibaba CoCreate LA 9–10 Sep — that trip is likely too soon; use STEP for the next foreign push.",
    apply: "Need Montana exporter status. Apply in WebGrants before the next show. Intro to Commerce this week.",
    applyUrl: "https://commerce.mt.gov/Business/Expand/Export-Montana/Grants-for-Exporters/",
    contact: "MT Commerce · 406-841-2700 · kathy.bartlett@mt.gov can route",
    email: "kathy.bartlett@mt.gov",
    blocker: "Must be a Montana exporter and pre-approved before incurring cost.",
    package: `Export Montana STEP — ScanIQ MadHat SaaS export

ScanIQ LLC is locating operations in Roundup, MT and selling MadHat as Field/Forge/Campus SaaS. Request: (1) confirm STEP eligibility once a Montana operating location is on file, (2) which WebGrants program to use, (3) whether a subsequent foreign OEM trip (not the 9–10 Sep LA event already ticketed) can be pre-approved at 50–75% up to $10,000.

Jacqueline Anderson, CEO · ja@scaniq.online · 442-458-1130`,
  },
  {
    id: "mt-sbir-match",
    rank: 7,
    name: "Montana SBIR/STTR Matching Funds",
    funder: "MT Department of Commerce",
    lane: "state",
    status: "queue",
    amount: "Up to $30,000 per phase",
    deadline: "Rolling · after federal Phase I award",
    why: "Best state stack on NSF. Montana technology company + federal SBIR/STTR award. Kathy Bartlett, Grants Coordinator. Open 1 Jul 2026 – 30 Apr 2027 per Commerce.",
    apply: "Cannot file until NSF (or other federal) Phase I is awarded AND the company is a Montana company. Intro now so she sees Roundup as the operating location.",
    applyUrl: "https://commerce.mt.gov/Business/Business-Assistance/Montana-SBIR-STTR-Matching-Funds-Program",
    contact: "Kathy Bartlett · kathy.bartlett@mt.gov · 406-841-2792",
    email: "kathy.bartlett@mt.gov",
    blocker: "Requires a federal Phase I award and a Montana company.",
    package: `Montana SBIR/STTR Matching Funds — ScanIQ LLC letter of intent

Kathy — ScanIQ LLC (WOSB) is submitting an NSF SBIR Project Pitch this window (NSF 26-510, Advanced Manufacturing) and locating a computational manufacturing shop in Roundup / Musselshell County (304 Main + 314-acre Hwy 87 N campus option).

We are not yet a Phase I awardee. This is a letter of intent: when the federal Phase I lands, we will file for the $30,000 Montana match. Please confirm (1) that a California-formed LLC with Montana operations / registered agent qualifies as a “Montana company,” and (2) the current guideline PDF still governs FY27.

Jacqueline Anderson, CEO · John Antaramian, Technical Lead · ja@scaniq.online · 442-458-1130`,
  },
  {
    id: "tedd",
    rank: 8,
    name: "Musselshell TEDD + county partnership",
    funder: "Musselshell County / MCA TEDD statute",
    lane: "local",
    status: "apply",
    amount: "Tax increment for infrastructure · not cash",
    deadline: "This Friday at 506 Main",
    why: "County already put 215 Main (Wier Building) up for sale under Resolution 2026-9 for economic development. TEDD lets a value-added manufacturing district keep increment for power, water, and pad.",
    apply: "Walk-in Friday. Commissioners Pancratz / Goffena / Turley. Draft already in Gmail. Do not email a novel tonight.",
    contact: "506 Main Street, Roundup · 406-323-1104",
    package: `Already drafted to rpancratz / mgoffena / mturley @ co.musselshell.mt.us — do not duplicate. Lead with TEDD overlay on Hwy 87 N 314 acres + Wier Building as a Main Street door.`,
  },
  {
    id: "bcvf",
    rank: 9,
    name: "Build Coachella Valley Fund",
    funder: "Inland Empire Community Foundation",
    lane: "local",
    status: "apply",
    amount: "$5k–$25k typical",
    deadline: "Relationship / rolling inquiries",
    why: "Palm Desert office, economic resilience, makers. Jackie-front. Does not fund the Montana park; funds the Coachella shop story.",
    apply: "Email Denisha Shackelford / grant-info. Jackie leads in-person.",
    applyUrl: "https://iegives.org/funds/buildcoachellavalleyfund/",
    contact: "grant-info@iegives.org · dshackelford@iegives.org · 760-836-2400",
    email: "grant-info@iegives.org",
    package: `IECF / BCVF — ScanIQ LLC (Palm Desert) maker-access inquiry

Jacqueline Anderson, CEO of ScanIQ LLC (WOSB) and managing partner of Stapes Performance, is requesting a conversation about a Coachella Valley maker-access / small-manufacturer grant. ScanIQ turns a phone scan into gated G-code so Valley shops can iterate parts without a $200k CAD seat.

Jackie fronts. John Antaramian is technical lead. ja@scaniq.online · info@stapesperformance.com`,
  },
  {
    id: "cvep",
    rank: 10,
    name: "CVEP partnership",
    funder: "Coachella Valley Economic Partnership",
    lane: "local",
    status: "queue",
    amount: "Network / workforce · not a check",
    deadline: "Open",
    why: "Local CA economic-development cover while the Montana park is the land play. Jackie-front.",
    apply: "Email Laura James. Ask for a member-business pilot, not a grant.",
    contact: "laura@cvep.com · 760-340-1575",
    email: "laura@cvep.com",
    package: `CVEP — ScanIQ as a Valley manufacturing tool

Laura — Jacqueline Anderson (ScanIQ LLC / Stapes Performance) would like 20 minutes on putting ScanIQ in front of CVEP manufacturers who do not have a generative-design seat. Phone scan → PicoGK SDF → gated G-code. WOSB. Palm Desert based, with a rural Montana production node in diligence.

ja@scaniq.online · 442-458-1130`,
  },
  {
    id: "vapg",
    rank: 11,
    name: "USDA VAPG FY26",
    funder: "USDA Rural Business",
    lane: "agro",
    status: "closed",
    amount: "—",
    deadline: "Closed 22 Apr 2026",
    why: "ScanIQ is not an agricultural producer. Do not force-fit. Next cycle only if a producer partner (hay/grazing on the 314) is real.",
    apply: "Do not apply this year.",
    applyUrl: "https://www.rd.usda.gov/programs-services/business-programs/value-added-producer-grant",
    contact: "USDA RD MT · 406-585-2540",
    blocker: "Closed. Applicant must be an ag producer.",
    package: "Do not apply. Revisit only with a producer partner on the Hwy 87 N hay ground.",
  },
  {
    id: "reap",
    rank: 12,
    name: "USDA REAP grants",
    funder: "USDA Rural Energy",
    lane: "agro",
    status: "closed",
    amount: "—",
    deadline: "Grants paused",
    why: "REAP grant window is paused. Do not build the park energy story on a frozen NOFO. B&I is the open USDA door.",
    apply: "Do not apply. Watch rd.usda.gov for a restart.",
    applyUrl: "https://www.rd.usda.gov/programs-services/energy-programs/rural-energy-america-program-renewable-energy-systems-energy-efficiency-improvement-guaranteed-loans",
    contact: "USDA RD MT · 406-585-2540",
    blocker: "Grant NOFO paused.",
    package: "Do not apply until the NOFO reopens.",
  },
];

export type Investor = {
  id: string;
  name: string;
  org: string;
  role: string;
  email?: string;
  ask: string;
  amount: string;
  status: string;
  script: string;
};

export const INVESTORS: Investor[] = [
  {
    id: "mx6",
    name: "MX6 Racing / finance",
    org: "MX6 Racing",
    role: "OEM / R&D letter + MadHat Forge",
    email: "finance@mx6racing.com",
    ask: "Convert the existing R&D commitment into a paid Forge seat and a cash or in-kind park unit.",
    amount: "Forge $297/mo + optional $25–50k park unit",
    status: "Live relationship · Jackie fronts",
    script: `MX6 — Jacqueline Anderson / ScanIQ.

We are on the ground in Roundup, MT through Monday standing the computational manufacturing shop that already runs your geometry (phone scan → PicoGK → gated G-code). NSF Project Pitch is going in this window.

Two asks, both optional:
1. Start a MadHat Forge seat ($297/mo) so MX6 jobs run on the production kernel instead of ad-hoc files.
2. If you want a named bay on the Musselshell campus (314 acres / Hwy 87 N), we will hold a Founding OEM unit at $25–50k against Year-1 machine time.

Jackie is the relationship. John is technical lead. ja@scaniq.online · 442-458-1130.`,
  },
  {
    id: "apex",
    name: "Guillermo Peña",
    org: "Apex1080 / Project Heimdall",
    role: "Dual-use helmet · missed 2 Sep Meet",
    email: "ceo@apex1080.com",
    ask: "Reschedule. Overlap is ScanIQ scan-to-geometry + Heimdall embedded telemetry. Offer Forge or Campus, not a pitch deck.",
    amount: "Forge $297 or Campus $997 · optional SAFE later",
    status: "Warm · you missed Wednesday’s Meet (you were rolling to MT)",
    script: `Guillermo — John Antaramian / ScanIQ. Sorry we crossed on the 2 Sep Meet — I was rolling to Montana that morning.

Heimdall overlap as I see it: your helmet needs a manufacturable, keep-out-clean housing and a scan-to-part loop for rider/kit variants. That is exactly MadHat (PicoGK SDF → gated G-code). We can run a Forge seat against one Heimdall housing this month without a term sheet.

I am in Roundup through Mon 7 Sep, gone pre-dawn Tue 8. 20 minutes any evening this weekend, or the week of 14 Sep. 442-458-1130 · ja@scaniq.online.`,
  },
  {
    id: "platinum",
    name: "H. Robinson",
    org: "Platinum Eagle Aerospace",
    role: "50/50 aerospace SHM · FLEX AI",
    email: "hrobinson@platinumea.com",
    ask: "Named Campus partner. Their FLEX AI is structural health; ScanIQ is the geometry that gets manufactured around the sensors.",
    amount: "Campus $997/mo or custom Park node",
    status: "Prior 50/50 frame · re-open this week",
    script: `H. — John Antaramian / Jacqueline Anderson, ScanIQ LLC.

Platinum Eagle’s FLEX AI watches structure. ScanIQ manufactures the geometry those sensors live in: implicit SDF, safety-gated G-code, phone-scan provenance. We are standing a rural computational manufacturing park in Roundup, MT and filing NSF SBIR (Advanced Manufacturing) this window.

Ask: a Campus seat ($997/mo) to run one aircraft-housing / keep-out study on our kernel, with a path to a named Park node if the 314-acre campus closes. No deck. One part.

ja@scaniq.online · 442-458-1130 · scanIQ.online`,
  },
  {
    id: "fabric8",
    name: "Jeff Herman / Tanner Immonen",
    org: "Fabric8Labs (San Diego)",
    role: "ECAM metal · $50M round",
    email: "contact@fabric8labs.com",
    ask: "Upstream design intelligence for their ECAM customers. Not a check — a paid integration study.",
    amount: "Paid pilot / Campus",
    status: "On tracker · technical fit, 2-hr drive from PD",
    script: `Fabric8Labs — ScanIQ LLC.

You print with ECAM. We generate the implicit geometry that should arrive already manifold, keep-out clean, and load-pathed so your electrochemical stack does not iterate scrap. PicoGK SDF + agentic swarm, shop-validated at Stapes / MX6.

Ask: a 30-day Campus pilot on one thermal or RF part. Jacqueline Anderson, CEO (WOSB) · John Antaramian, Technical Lead. ja@scaniq.online.`,
  },
  {
    id: "stapes",
    name: "Jacqueline Anderson",
    org: "Stapes Performance",
    role: "CEO of ScanIQ · shop origin",
    email: "info@stapesperformance.com",
    ask: "Not an external investor. She is majority owner. Convert Stapes into the first Forge/Campus production node and keep telemetry flowing.",
    amount: "Internal · first Forge seat",
    status: "Internal — do not send an invest-ask",
    script: "Do not email Jackie an invest ask. Sit the first Forge seat on Stapes and use it as the NSF commercialization letter.",
  },
];

export type NsfField = {
  id: string;
  title: string;
  prompt: string;
  limit: number;
  text: string;
};

export const NSF_META = {
  title:
    "Autonomous Generative Manufacturing Platform for High-Performance Complex Geometry Optimization",
  solicitation: "NSF 26-510",
  topic: "Advanced Manufacturing — M6 Modeling and Simulation (alt. M3 Cybermanufacturing)",
  phaseI: "$305,000",
  fullProposal: "4 Nov 2026",
  portal: "https://nsfgov.my.site.com/mywork",
  guide: "https://seedfund.nsf.gov/apply/project-pitch/",
  limit: "One pitch per window · two per 12 months · three total on the same project",
};

export const NSF_FIELDS: NsfField[] = [
  {
    id: "tech",
    title: "The Technology Innovation",
    prompt:
      "Explain the core high-risk technical innovation to be researched and developed during a Phase I project.",
    limit: 3500,
    text: `ScanIQ replaces boundary-representation (B-rep) CAD with an implicit signed-distance (SDF) voxel kernel for autonomous generative manufacturing of high-performance complex geometry.

Extreme-performance powersports, subsea propulsion, and aerospace housings depend on internal fluid channels, thermal pathways, and electromagnetic keep-outs (Halbach-array motor housings). Legacy B-rep CAD represents solids as stitched surface boundaries. When an AI optimizer mutates topology, B-rep produces non-manifold edges, self-intersections, and boolean failures. Teams spend weeks repairing models; closed-loop autonomous optimization is practically impossible.

ScanIQ evaluates every point in space as a signed distance to the nearest boundary. Boolean union, intersection, and subtraction, and morphological erode, dilate, and offset, are scalar-field operations. Mutated internal channels remain manifold, watertight, and immediately fabricatable. The kernel is coupled to an agentic swarm that navigates competing structural, hydrodynamic, and thermal constraints. A Human-in-the-Loop stagnation-escape protocol monitors a plateau-for-K metric and a delta-on-objective trigger. When variance collapses, the loop pauses, a domain expert injects constraint overrides, and the swarm resumes toward a better Pareto front.

The framework is already generating a toroidal drive whose fluid paths follow r(θ) = a e^{bθ} with pitch locked at 17.4° (coefficient tan 17.4°). The voxel engine unions housing lattices, subtracts channels, and applies 0.15 mm Halbach-vane keep-outs while holding sub-0.05 mm datum tolerance. A Roslyn-sandboxed C# layer lets the swarm emit geometric subroutines inside safety class A–D gates before 3MF / STL / G-code export. Existing PicoGK builders (SilencerBuilder, RodinTorus, ConchScrew) are oracles, not the research.

This is high-risk R&D, not incremental CAD. Phase I must prove that implicit SDF plus agentic stagnation-escape can close the loop from phone LiDAR / SfM and a constraint graph to a safety-gated manufacturing file without human B-rep repair. That is not what nTopology plugins, Fusion generative, or slicers do: they still dump to B-rep or skip physics and provenance. If the swarm cannot escape local minima without breaking manifoldness, the product does not exist. That is the NSF experiment.`,
  },
  {
    id: "obj",
    title: "The Technical Objectives and Challenges",
    prompt:
      "Clearly explain the specific research and development required to prove that the foundational technology works.",
    limit: 3500,
    text: `Phase I (six months, $305,000) will prove technical feasibility of ScanIQ’s implicit voxel kernel plus agentic swarm on one production-class family (toroidal drive / powersports housing) through four R&D tasks. This is research, not shop engineering.

T1 — High-throughput ingestion and adaptive voxel resolution. Ingest multi-point dRGB and time-of-flight (phone LiDAR + SfM) into an adaptive SDF field with a provenance graph. Success metric: 0.3 mm field, zero non-manifold artifacts on continuous internal geometry. Challenge: commodity-phone noise vs. shop datum. Mitigation: CPU photogrammetry verification already in the pipeline; adaptive octree, not a uniform grid.

T2 — Multi-physics agentic optimization. The swarm executes morphological sequences (erode, dilate, boolean subtract) targeting fluid acceleration and structural load paths under simulated operating loads. Success metric: a watertight solid matching target hydrodynamic metrics within 50 computation cycles. Challenge: competing objectives (flow, mass, EM keep-out) produce Pareto traps. This is the core unknown.

T3 — Stagnation-escape protocol. Operationalize plateau-for-K and delta-on-objective; pause; surface the parameter state; accept a human override; resume without kernel crash or topology failure. Success metric: detect stagnation and complete an override on a benchmark run. Challenge: the override must be a constraint injection, not a manual CAD edit — otherwise we have not de-risked autonomy.

T4 — Secure sandbox and production export. Finalize the Roslyn-sandboxed C# mutation layer; export 3MF / STL / gated G-code. Success metric: compile and export at sub-0.05 mm datum error; safety class A–D is a hard gate (no file leaves if class fails). Challenge: generated lattices that are manifold in SDF but unprintable on FDM / unmachinable on compact CNC. Mitigation: existing PicoGK builders as manufacturability oracles.

What we do not yet know, and will not know without this Phase I: whether the swarm + SDF kernel can close scan → gated G-code without a human repairing B-rep. Straightforward productization of a slicer, UI polish, and “more compute” are out of scope. The R&D is the stagnation-escape coupling and the proof that implicit geometry survives agentic mutation at shop resolution.`,
  },
  {
    id: "mkt",
    title: "The Market Opportunity",
    prompt:
      "Explain the value of the technological innovation including the potential uses and those who will benefit.",
    limit: 1750,
    text: `Customer: extreme-performance aftermarket and OEM shops that today iterate complex housings by hand — motocross suspension (MX6 Racing, Stapes Performance), subsea propulsion (SubSurface), aerospace structural housings (Platinum Eagle), dual-use helmet / telemetry (Apex1080 / Heimdall). They pay in weeks of CAD repair and scrapped prints. ScanIQ compresses design-to-manufacture from weeks to minutes.

Offer: MadHat SaaS — Field $97 / Forge $297 / Campus $997 per month — plus computational job-tier licensing. Beachhead is the two-bay shop, not a Siemens seat. MX6 and Stapes commitment letters supply telemetry and field test. A Roundup, MT Campus node is the rural manufacturing expansion.

Market: high-performance powersports aftermarket, specialized marine propulsion, and aerospace SHM / housing work, where strength-to-weight and internal channels decide winners. Competitors: nTopology / nTop implicit (enterprise, no phone-scan provenance, no safety-class G-code gate); Autodesk Fusion generative (B-rep downstream); topology plugins that still fail boolean. ScanIQ’s edge is shop-floor origin, phone-LiDAR provenance, and a hard safety gate, priced for a two-bay, not a PLM stack.

If Phase I proves the kernel, the same seat sells into any shop that must mutate internal geometry without breaking the part. That is the commercial claim; the NSF claim is the R&D that makes the seat real.`,
  },
  {
    id: "team",
    title: "The Company and Team",
    prompt:
      "Explain the team’s suitability to successfully execute the project based on the proposed innovation and approach to R&D.",
    limit: 1750,
    text: `ScanIQ LLC is a U.S. Women-Owned Small Business. Jacqueline Anderson, Founder, CEO, and majority owner, directs strategy, scientific direction, and field telemetry. She operates Stapes Performance (authorized SHOWA; MX6 Racing partner) — the shop that originated the requirement “make this part, but make it better.” John Antaramian, Technical Lead, architects the implicit voxel kernel, PicoGK C# builders, and agentic swarm, with 20+ years in extreme certified systems including delivery of an SM300-3 A3-certified manned submersible (SubSurface). A provisional patent is filed on the scan-to-gated-G-code pipeline.

Gaps we will hire against in Phase I: a computational-mechanics contractor for T2 load-path validation, and a part-time fabricator at the Roundup two-bay for T4 print/CNC oracles. We are not staffed as a national lab and will not pretend to be.

Facilities: Stapes / Palm Desert for telemetry; Roundup 304 Main targeted as the Day-1 print/CNC cell; 314-acre Hwy 87 N campus as the Park-scale option. R&D partners: MX6 Racing and Stapes Performance (letters); exploration with Apex1080 (Heimdall) and Platinum Eagle Aerospace. WOSB majority is Jacqueline; John is not the PI.`,
  },
];

export const CAPITAL_STATS = [
  { label: "NSF Phase I if invited", value: "$305k" },
  { label: "MT match after Phase I", value: "$30k" },
  { label: "FAST microgrant 30 Sep", value: "$3k" },
  { label: "B&I stack on the land", value: "$1.08M" },
];
