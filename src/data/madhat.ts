export type MadhatTierId = "field" | "forge" | "campus" | "park";

export type MadhatTier = {
  id: MadhatTierId;
  name: string;
  price: string;
  cadence: string;
  tag: string;
  who: string;
  includes: string[];
  cta: string;
};

export const MADHAT_TIERS: MadhatTier[] = [
  {
    id: "field",
    name: "Field",
    price: "$97",
    cadence: "/ mo",
    tag: "Solo fabricator",
    who: "One rider, one boat, one housing. Phone scan in, one gated job a month out.",
    includes: [
      "Phone LiDAR / photo ingest",
      "1 gated job / month (FDM or toolpath)",
      "Safety class A–B only",
      "Email support, 48-hour queue",
    ],
    cta: "Start Field",
  },
  {
    id: "forge",
    name: "Forge",
    price: "$297",
    cadence: "/ mo",
    tag: "Two-bay shop",
    who: "Stapes, MX6, any shop that already breaks CAD on internal channels.",
    includes: [
      "10 jobs / month",
      "Safety class A–D hard gate",
      "PicoGK builders (Silencer, RodinTorus, ConchScrew)",
      "G-code + 3MF export",
      "Slack with John on stagnation-escape",
    ],
    cta: "Start Forge",
  },
  {
    id: "campus",
    name: "Campus",
    price: "$997",
    cadence: "/ mo",
    tag: "OEM / visiting program",
    who: "Platinum Eagle, Apex1080, Fabric8Labs, any named program that needs a seat and a provenance graph.",
    includes: [
      "Unlimited jobs, 3 seats",
      "Provenance graph + job telemetry",
      "Priority queue on the Roundup cell",
      "Quarterly constraint-review with Jackie + John",
      "Letter for their own SBIR / OEM file",
    ],
    cta: "Start Campus",
  },
  {
    id: "park",
    name: "Park",
    price: "Custom",
    cadence: "",
    tag: "Named bay on the 314",
    who: "Founding OEM unit on the Musselshell campus. Machine time, power, and a door with your name.",
    includes: [
      "Named bay / pad on Hwy 87 N campus",
      "Dedicated compute + print/CNC window",
      "TEDD / large-load path with Fergus",
      "Multi-year machine-time credit",
    ],
    cta: "Hold a Park unit",
  },
];

export const MADHAT_PITCH = `MadHat is ScanIQ’s PicoGK constraint solver. Not a slicer. Not a CAD plugin. You give it a phone scan and a constraint graph (keep-outs, load, fluid, safety class). It returns manifold geometry and gated G-code, or it refuses. Field is a rider. Forge is a shop. Campus is an OEM program. Park is a bay on the Musselshell campus.`;

export type MadhatSignup = {
  id: string;
  at: string;
  name: string;
  email: string;
  company: string;
  tier: MadhatTierId;
  note: string;
};

export const STORAGE_KEY = "scaniq-madhat-signups";

export function invoiceMailto(s: MadhatSignup, tier: MadhatTier): string {
  const subject = encodeURIComponent(`MadHat ${tier.name} signup — ${s.company || s.name}`);
  const body = encodeURIComponent(
    [
      `MadHat ${tier.name} (${tier.price}${tier.cadence})`,
      "",
      `Name: ${s.name}`,
      `Email: ${s.email}`,
      `Company: ${s.company || "—"}`,
      `Note: ${s.note || "—"}`,
      `Captured: ${s.at}`,
      "",
      "Invoice from ScanIQ LLC (WOSB) to this address. Jackie signs. Do not run this through Festival Outfitters / any non-ScanIQ Stripe.",
      "",
      "ja@scaniq.online · scanIQ.online",
    ].join("\n"),
  );
  return `mailto:ja@scaniq.online?cc=${encodeURIComponent(s.email)}&subject=${subject}&body=${body}`;
}
