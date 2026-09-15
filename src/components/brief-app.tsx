import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Copy,
  Check,
  ExternalLink,
  Factory,
  MapPin,
  Phone,
  Printer,
  Zap,
  Building2,
  LandPlot,
  Landmark,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { CapitalTab } from "@/components/capital-tab";
import { MadhatTab } from "@/components/madhat-tab";
import { ExecuteTab } from "@/components/execute-tab";
import {
  CONTACTS,
  CLOCK,
  ITINERARY,
  NEIL_SCRIPT,
  PROPERTIES,
  ROLE_LABEL,
  SLIDES,
  STATS,
  SWEENEY_ASKS,
  SWEENEY_PITCH,
  type Property,
  type Role,
} from "@/data/brief";

type Tab = "go" | "deck" | "sites" | "hours" | "sweeney" | "neil" | "capital" | "madhat";

const TABS: { id: Tab; label: string }[] = [
  { id: "go", label: "Go" },
  { id: "deck", label: "Deck" },
  { id: "sites", label: "Sites" },
  { id: "hours", label: "Hours" },
  { id: "sweeney", label: "Sweeney" },
  { id: "neil", label: "Neil" },
  { id: "capital", label: "Capital" },
  { id: "madhat", label: "MadHat" },
];

const ROLE_FILTERS: { id: Role | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "shop", label: "Shop" },
  { id: "pad", label: "Pad" },
  { id: "hq", label: "HQ" },
  { id: "office", label: "Office" },
  { id: "expansion", label: "Expansion" },
];

export function BriefApp() {
  const [tab, setTab] = useState<Tab>("go");
  const [slide, setSlide] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        if (tab !== "deck") return;
        e.preventDefault();
        setSlide((s) =>
          e.key === "ArrowRight" ? Math.min(SLIDES.length - 1, s + 1) : Math.max(0, s - 1),
        );
      }
      const n = Number(e.key);
      if (n >= 1 && n <= TABS.length) setTab(TABS[n - 1].id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tab]);

  return (
    <div className="min-h-dvh bg-bg text-fg flex flex-col">
      <header
        data-nav
        className="sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              ScanIQ · Musselshell Park
            </p>
            <p className="truncate text-sm text-muted">
              Roundup, MT · Thu 10 Sep · Kurek first
            </p>
          </div>
          <Button
            variant="outline"
            className="no-print shrink-0"
            onClick={() => window.print()}
          >
            <Printer className="size-4" />
            <span className="hidden sm:inline">Save PDF</span>
          </Button>
        </div>
        <nav className="no-print mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              data-tab={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "min-h-11 rounded-sm px-3 text-sm font-medium whitespace-nowrap transition-colors duration-150",
                tab === t.id ? "bg-accent text-accent-fg" : "text-muted hover:bg-raised hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:py-8">
        {tab === "go" && <ExecuteTab copy={copy} copied={copied} />}
        {tab === "deck" && <Deck slide={slide} setSlide={setSlide} />}
        {tab === "sites" && <Sites />}
        {tab === "hours" && <Hours />}
        {tab === "sweeney" && <Sweeney copy={copy} copied={copied} />}
        {tab === "neil" && <Neil copy={copy} copied={copied} />}
        {tab === "capital" && <CapitalTab copy={copy} copied={copied} />}
        {tab === "madhat" && <MadhatTab copy={copy} copied={copied} />}
      </main>

      <footer className="no-print border-t border-border px-4 py-4 text-center text-xs text-subtle">
        ScanIQ LLC · WOSB · scanIQ.online · Do not distribute beyond county, co-op, and listing brokers on this trip.
      </footer>
    </div>
  );
}

function Deck({
  slide,
  setSlide,
}: {
  slide: number;
  setSlide: (n: number | ((s: number) => number)) => void;
}) {
  const s = SLIDES[slide];
  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-3 sm:grid-cols-4">
        {STATS.map((st) => (
          <div key={st.label} className="rounded-lg bg-surface px-4 py-4 shadow-border">
            <p className="font-display text-3xl font-medium tracking-tight tabular-nums text-fg">
              {st.value}
            </p>
            <p className="mt-1 text-xs text-muted">{st.label}</p>
          </div>
        ))}
      </div>

      <article className="overflow-hidden rounded-xl bg-surface shadow-border">
        {s.image ? (
          <div className="relative aspect-video overflow-hidden bg-raised">
            <img
              src={s.image}
              alt={s.caption ?? s.title}
              className="size-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
            />
            {s.caption ? (
              <div className="absolute inset-x-0 bottom-0 bg-bg/80 px-4 py-3 sm:px-6">
                <p className="text-xs text-fg">{s.caption}</p>
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="flex flex-col gap-4 p-5 sm:p-8">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">{s.kicker}</p>
          <h1 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {s.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted">{s.body}</p>
        </div>
      </article>

      <div className="no-print flex items-center justify-between gap-3">
        <Button
          variant="outline"
          onClick={() => setSlide((n) => Math.max(0, n - 1))}
          disabled={slide === 0}
        >
          <ArrowLeft className="size-4" />
          Back
        </Button>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-150",
                i === slide ? "w-6 bg-accent" : "w-2 bg-subtle hover:bg-muted",
              )}
            />
          ))}
        </div>
        <Button
          onClick={() => setSlide((n) => Math.min(SLIDES.length - 1, n + 1))}
          disabled={slide === SLIDES.length - 1}
        >
          Next
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <p className="no-print text-center text-xs text-subtle">Arrow keys move slides</p>
    </section>
  );
}

function Sites() {
  const [filter, setFilter] = useState<Role | "all">("all");
  const [open, setOpen] = useState<string | null>(PROPERTIES[0].id);
  const list = useMemo(
    () => (filter === "all" ? PROPERTIES : PROPERTIES.filter((p) => p.role === filter)),
    [filter],
  );

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">Ten sites for Neil Beyer</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Show in this order. Close on 1 and 3 if they are clean. Assemble Buckskin if the campus needs a
          quiet buffer. Confirm floodplain on every Main Street brick.
        </p>
      </div>
      <div className="no-print flex flex-wrap gap-1">
        {ROLE_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm",
              filter === f.id ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ol className="flex flex-col gap-3">
        {list.map((p) => (
          <PropertyCard key={p.id} property={p} open={open === p.id} onToggle={() => setOpen(open === p.id ? null : p.id)} />
        ))}
      </ol>
    </section>
  );
}

function PropertyCard({
  property: p,
  open,
  onToggle,
}: {
  property: Property;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="rounded-lg bg-surface shadow-border print-break">
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5"
      >
        <span className="font-display text-2xl tabular-nums text-accent">{String(p.rank).padStart(2, "0")}</span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-medium text-fg">{p.name}</span>
            <span className="text-xs uppercase tracking-wide text-subtle">{ROLE_LABEL[p.role]}</span>
          </span>
          <span className="mt-1 block text-sm text-muted">{p.address}</span>
          <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-fg">
            <span>{p.price}</span>
            <span>{p.acres}</span>
            {p.building ? <span>{p.building}</span> : null}
          </span>
        </span>
      </button>
      {open && (
        <div className="flex flex-col gap-3 border-t border-border px-4 py-4 sm:px-5">
          <p className="text-sm leading-relaxed text-fg">{p.why}</p>
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-fg">Show: </span>
            {p.show}
          </p>
          {p.agent && <p className="text-xs text-muted">{p.agent}</p>}
          {p.notes && <p className="text-xs text-subtle">{p.notes}</p>}
          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={p.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
            >
              <MapPin className="size-4" />
              Maps
            </a>
            {p.listing && (
              <a
                href={p.listing}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm px-4 text-sm text-fg shadow-border"
              >
                <ExternalLink className="size-4" />
                Listing
              </a>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

function Hours() {
  return (
    <section className="flex flex-col gap-5">
      <div className="rounded-lg bg-raised px-4 py-4 shadow-border">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warn" />
          <div>
            <p className="font-medium text-fg">{CLOCK.nowLabel}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {CLOCK.window}. {CLOCK.laborDay}. {CLOCK.leave}. Scripts and call order live on Go.
              Fergus Electric lobby is still Mon–Thu 7:00–5:30.
            </p>
          </div>
        </div>
      </div>
      <ol className="flex flex-col gap-4">
        {ITINERARY.map((d) => (
          <li key={d.id} className="grid gap-3 rounded-lg bg-surface p-5 shadow-border sm:grid-cols-5">
            <div className="sm:col-span-1">
              <p className="font-mono text-xs uppercase tracking-wide text-accent">{d.date}</p>
              <p className="mt-1 font-display text-lg font-medium">{d.day}</p>
              <StatusChip status={d.status} />
            </div>
            <div className="sm:col-span-4">
              <h3 className="font-medium text-fg">{d.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {d.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function StatusChip({ status }: { status: (typeof ITINERARY)[number]["status"] }) {
  const label =
    status === "critical"
      ? "Do now"
      : status === "open"
        ? "Go"
        : status === "closed"
          ? "Holiday"
          : "Leave";
  const cls =
    status === "critical"
      ? "text-danger"
      : status === "closed"
        ? "text-warn"
        : status === "leave"
          ? "text-subtle"
          : "text-accent";
  return <p className={cn("mt-2 font-mono text-xs uppercase tracking-wide", cls)}>{label}</p>;
}

function Sweeney({
  copy,
  copied,
}: {
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  const voicemail = `Carson Sweeney / Bret Nellermoe — John Antaramian with ScanIQ. Locating a computational manufacturing shop on Fergus wires — looking at 304 Main and 314 acres on Hwy 87 N. Need 20 minutes on three-phase and a staged large-load. Packet at 17128 Hwy 12 E. 442-458-1130.`;

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">Get in front of Sweeney</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Carson Sweeney is General Manager of Fergus Electric Cooperative — the co-op that lights
          Musselshell County. The Roundup office is staffed locally by Bret Nellermoe. Board president
          Terry Frost is District 5, South Roundup / Musselshell.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ContactCard
          icon={<Zap className="size-4" />}
          title={CONTACTS.sweeney.name}
          lines={[CONTACTS.sweeney.title, CONTACTS.sweeney.office, CONTACTS.sweeney.phone, CONTACTS.sweeney.hours]}
          href={`tel:${CONTACTS.sweeney.phone.replaceAll("-", "")}`}
        />
        <ContactCard
          icon={<Factory className="size-4" />}
          title={CONTACTS.roundupCoop.name}
          lines={[
            CONTACTS.roundupCoop.address,
            CONTACTS.roundupCoop.phone,
            CONTACTS.roundupCoop.local,
            CONTACTS.roundupCoop.board,
          ]}
          href={`tel:${CONTACTS.roundupCoop.phone.replaceAll("-", "")}`}
        />
        <ContactCard
          icon={<Landmark className="size-4" />}
          title={CONTACTS.county.name}
          lines={[
            CONTACTS.county.address,
            CONTACTS.county.phone,
            ...CONTACTS.county.people.map((p) => `${p.name} · ${p.role} · ${p.cell}`),
          ]}
          href={`tel:4063231104`}
        />
        <ContactCard
          icon={<CalendarClock className="size-4" />}
          title="The intercept"
          lines={[
            "Lobby is Mon–Thu only. Do not wait on a receptionist.",
            "Voicemail Sweeney 406-538-3465 and Nellermoe 406-323-1602.",
            "Packet at 17128 Hwy 12 E.",
            "County at 506 Main if you are still in Roundup.",
          ]}
        />
      </div>

      <div className="rounded-lg bg-surface p-5 shadow-border">
        <h3 className="font-medium">Twenty-minute pitch</h3>
        <ol className="mt-3 flex flex-col gap-3">
          {SWEENEY_PITCH.map((line, i) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="font-mono text-accent">{i + 1}</span>
              {line}
            </li>
          ))}
        </ol>
        <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
          {SWEENEY_ASKS.map((a) => (
            <li key={a.who} className="text-sm">
              <span className="font-medium text-fg">{a.who}. </span>
              <span className="text-muted">{a.what}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg bg-raised p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium">Voicemail — 15 seconds</h3>
          <Button variant="outline" onClick={() => copy("vm", voicemail)}>
            {copied === "vm" ? <Check className="size-4" /> : <Copy className="size-4" />}
            Copy
          </Button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{voicemail}</p>
      </div>
    </section>
  );
}

function Neil({
  copy,
  copied,
}: {
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-medium tracking-tight">Brief for Neil Beyer</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            {CONTACTS.neil.firm}. Sold in Roundup this year. Call, then paste the script.
          </p>
        </div>
        <a
          href={`tel:${CONTACTS.neil.phone.replaceAll("-", "")}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          <Phone className="size-4" />
          {CONTACTS.neil.phone}
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <MiniStat icon={<Phone className="size-4" />} label="Mobile" value={CONTACTS.neil.phone} />
        <MiniStat icon={<Building2 className="size-4" />} label="Email" value={CONTACTS.neil.email} />
        <MiniStat icon={<LandPlot className="size-4" />} label="Close targets" value="314 ac + 304 Main" />
      </div>

      <div className="rounded-lg bg-surface p-5 shadow-border">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium">Text / email him this</h3>
          <Button variant="outline" onClick={() => copy("neil", NEIL_SCRIPT)}>
            {copied === "neil" ? <Check className="size-4" /> : <Copy className="size-4" />}
            Copy
          </Button>
        </div>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">
          {NEIL_SCRIPT}
        </pre>
      </div>

      <ol className="grid gap-2 sm:grid-cols-2">
        {PROPERTIES.map((p) => (
          <li key={p.id} className="flex gap-3 rounded-md bg-raised px-4 py-3">
            <span className="font-mono text-xs text-accent">{String(p.rank).padStart(2, "0")}</span>
            <span className="min-w-0">
              <span className="block text-sm font-medium">{p.name}</span>
              <span className="block text-xs text-muted">
                {p.price} · {p.acres}
                {p.building ? ` · ${p.building}` : ""}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <>
      <div className="flex items-center gap-2 text-accent">
        {icon}
        <h3 className="font-medium text-fg">{title}</h3>
      </div>
      <ul className="mt-3 flex flex-col gap-1.5">
        {lines.map((l) => (
          <li key={l} className="text-sm leading-relaxed text-muted">
            {l}
          </li>
        ))}
      </ul>
    </>
  );
  const cls = "rounded-lg bg-surface p-5 shadow-border text-left";
  if (href) {
    return (
      <a href={href} className={cn(cls, "block hover:shadow-border-hover")}>
        {inner}
      </a>
    );
  }
  return <div className={cls}>{inner}</div>;
}

function MiniStat({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-surface px-4 py-4 shadow-border">
      <div className="flex items-center gap-2 text-accent">
        {icon}
        <p className="text-xs uppercase tracking-wide text-subtle">{label}</p>
      </div>
      <p className="mt-2 text-sm font-medium">{value}</p>
    </div>
  );
}
