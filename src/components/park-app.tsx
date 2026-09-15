import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Phone,
  Printer,
  Zap,
  GraduationCap,
  Landmark,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  ASKS,
  CAMPUS,
  CONTACTS,
  COUNTY_LETTER,
  FERGUS_LETTER,
  IMPACT,
  POWER,
  PROPERTIES,
  ROLE_LABEL,
  SCHOOLS,
  SCHOOLS_LETTER,
  SLIDES,
  STATS,
  type Property,
  type Role,
} from "@/data/park";

type Tab = "park" | "campus" | "power" | "schools" | "sites" | "impact" | "ask";

const TABS: { id: Tab; label: string }[] = [
  { id: "park", label: "Park" },
  { id: "campus", label: "Campus" },
  { id: "power", label: "Power" },
  { id: "schools", label: "Schools" },
  { id: "sites", label: "Sites" },
  { id: "impact", label: "Impact" },
  { id: "ask", label: "Ask" },
];

const ROLE_FILTERS: { id: Role | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "lab", label: "Lab" },
  { id: "housing", label: "Housing" },
  { id: "vet", label: "Vet" },
  { id: "shop", label: "Shop" },
  { id: "town", label: "Town" },
  { id: "pasture", label: "Pasture" },
];

export function ParkApp() {
  const [tab, setTab] = useState<Tab>("park");
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
        if (tab !== "park") return;
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
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <header data-nav className="sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              Musselshell Biotech Park
            </p>
            <p className="truncate text-sm text-muted">Roundup, Montana · county brief</p>
          </div>
          <Button variant="outline" className="no-print shrink-0" onClick={() => window.print()}>
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
                "min-h-11 whitespace-nowrap rounded-sm px-3 text-sm font-medium transition-colors duration-150",
                tab === t.id ? "bg-accent text-accent-fg" : "text-muted hover:bg-raised hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:py-8">
        {tab === "park" && <Deck slide={slide} setSlide={setSlide} />}
        {tab === "campus" && <Campus />}
        {tab === "power" && <Power />}
        {tab === "schools" && <Schools />}
        {tab === "sites" && <Sites />}
        {tab === "impact" && <Impact />}
        {tab === "ask" && <Ask copy={copy} copied={copied} />}
      </main>

      <footer className="no-print border-t border-border px-4 py-4 text-center text-xs text-subtle">
        Musselshell Biotech Park · Roundup, Montana · For the county, the co-op, the schools, and the builders.
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
            <p className="font-display text-3xl font-medium tracking-tight text-fg tabular-nums">{st.value}</p>
            <p className="mt-1 text-xs text-muted">{st.label}</p>
          </div>
        ))}
      </div>

      <article className="overflow-hidden rounded-xl bg-surface shadow-border">
        {s.image ? (
          <div className="relative aspect-video overflow-hidden bg-raised">
            <img src={s.image} alt={s.caption ?? s.title} className="size-full object-cover" />
            {s.caption ? (
              <div className="absolute inset-x-0 bottom-0 bg-bg/80 px-4 py-3 sm:px-6">
                <p className="text-xs text-fg">{s.caption}</p>
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="flex flex-col gap-4 p-5 sm:p-8">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">{s.kicker}</p>
          <h1 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{s.title}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted">{s.body}</p>
        </div>
      </article>

      <div className="no-print flex items-center justify-between gap-3">
        <Button variant="outline" onClick={() => setSlide((n) => Math.max(0, n - 1))} disabled={slide === 0}>
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
        <Button onClick={() => setSlide((n) => Math.min(SLIDES.length - 1, n + 1))} disabled={slide === SLIDES.length - 1}>
          Next
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <p className="no-print text-center text-xs text-subtle">Arrow keys move slides</p>
    </section>
  );
}

function Campus() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">What stands on the ground</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Five parts. The laboratory does the science. The dormitory holds the students. The veterinary house
          holds the veterinarian. The caretaker holds the land. The town shop holds Main Street.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <img
          src="/images/campus-concept.jpg"
          alt="Campus concept: laboratory, dormitory, veterinary house, caretaker cottage"
          className="aspect-video w-full rounded-lg object-cover shadow-border"
        />
        <img
          src="/images/lab-bench.jpg"
          alt="Lattice structure in a laboratory dish"
          className="aspect-video w-full rounded-lg object-cover shadow-border"
        />
      </div>
      <ol className="flex flex-col gap-3">
        {CAMPUS.map((c, i) => (
          <li key={c.id} className="rounded-lg bg-surface p-5 shadow-border print-break">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-medium text-fg">{c.title}</h3>
              <span className="text-xs text-subtle">{c.place}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Power() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">Fergus Electric and the USDA co-op path</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{POWER.lead}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {POWER.facts.map((f) => (
          <div key={f.k} className="rounded-lg bg-surface px-4 py-4 shadow-border">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">{f.k}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{f.v}</p>
          </div>
        ))}
      </div>
      <ol className="flex flex-col gap-3 rounded-lg bg-surface p-5 shadow-border">
        {POWER.usda.map((line, i) => (
          <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="font-mono text-accent">{i + 1}</span>
            {line}
          </li>
        ))}
      </ol>
      <div className="grid gap-3 sm:grid-cols-3">
        {POWER.people.map((p) => (
          <div key={p.name} className="rounded-lg bg-raised p-5">
            <p className="font-medium text-fg">{p.name}</p>
            <p className="mt-1 text-sm text-muted">{p.role}</p>
            <p className="mt-2 text-xs leading-relaxed text-subtle">{p.where}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Schools() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">Schools, students, and the people who build</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          The park is a rotation site, not a new university. Beds, benches, a veterinarian, and a job of real
          scale for the trades already taught fifty minutes down the road.
        </p>
      </div>
      <img
        src="/images/housing.jpg"
        alt="Student dormitory with veterinary house and caretaker cottage"
        className="aspect-video w-full rounded-lg object-cover shadow-border"
      />
      <ol className="flex flex-col gap-3">
        {SCHOOLS.map((s) => (
          <li key={s.name} className="rounded-lg bg-surface p-5 shadow-border">
            <h3 className="font-medium text-fg">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.fit}</p>
          </li>
        ))}
      </ol>
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
        <h2 className="font-display text-2xl font-medium tracking-tight">Ten sites, in this order</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Close on the 314-acre tract and 304 Main if they are clean. Assemble Buckskin if the campus needs
          quiet pasture. Confirm floodplain on every Main Street brick.
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
          <PropertyCard
            key={p.id}
            property={p}
            open={open === p.id}
            onToggle={() => setOpen(open === p.id ? null : p.id)}
          />
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
      <button onClick={onToggle} className="flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5">
        <span className="font-display text-2xl text-accent tabular-nums">{String(p.rank).padStart(2, "0")}</span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-medium text-fg">{p.name}</span>
            <span className="text-xs tracking-wide text-subtle uppercase">{ROLE_LABEL[p.role]}</span>
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

function Impact() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">What a project of this scale does for the county</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Roundup is about 2,100 people. The county is about 5,700. A laboratory, beds, a veterinarian, and a
          caretaker is not a smokestack. It is a reason for Main Street to stay open, and a payroll that is not
          a mine.
        </p>
      </div>
      <img
        src="/images/roundup-prairie.jpg"
        alt="Prairie west of Roundup"
        className="aspect-video w-full rounded-lg object-cover shadow-border"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {IMPACT.map((item) => (
          <article key={item.title} className="rounded-lg bg-surface p-5 shadow-border">
            <h3 className="font-medium text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Ask({
  copy,
  copied,
}: {
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">What we are asking</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Letters are ready to copy. Nothing here is a tax increase and nothing here asks the county to buy a
          laboratory.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
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
          icon={<Zap className="size-4" />}
          title={CONTACTS.fergus.name}
          lines={[CONTACTS.fergus.hq, CONTACTS.fergus.roundup, CONTACTS.fergus.hours, CONTACTS.fergus.mail]}
          href={`tel:4065383465`}
        />
        <ContactCard
          icon={<GraduationCap className="size-4" />}
          title={CONTACTS.extension.name}
          lines={[CONTACTS.extension.address, CONTACTS.extension.phone, CONTACTS.extension.agent]}
          href={`tel:4063232704`}
        />
        <ContactCard
          icon={<Home className="size-4" />}
          title={CONTACTS.land.name}
          lines={[CONTACTS.land.firm, CONTACTS.land.phone, CONTACTS.land.email]}
          href={`tel:4062726568`}
        />
      </div>

      <ol className="flex flex-col gap-3">
        {ASKS.map((a) => (
          <li key={a.who} className="rounded-lg bg-surface p-5 shadow-border">
            <h3 className="font-medium text-fg">{a.who}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{a.what}</p>
          </li>
        ))}
      </ol>

      <LetterBlock
        title="Letter to the Commission"
        text={COUNTY_LETTER}
        k="county"
        copy={copy}
        copied={copied}
      />
      <LetterBlock
        title="Letter to Fergus Electric"
        text={FERGUS_LETTER}
        k="fergus"
        copy={copy}
        copied={copied}
      />
      <LetterBlock
        title="Letter to the schools"
        text={SCHOOLS_LETTER}
        k="schools"
        copy={copy}
        copied={copied}
      />
    </section>
  );
}

function LetterBlock({
  title,
  text,
  k,
  copy,
  copied,
}: {
  title: string;
  text: string;
  k: string;
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  return (
    <div className="rounded-lg bg-raised p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-medium">{title}</h3>
        <Button variant="outline" onClick={() => copy(k, text)}>
          {copied === k ? <Check className="size-4" /> : <Copy className="size-4" />}
          Copy
        </Button>
      </div>
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">
        {text}
      </pre>
    </div>
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
