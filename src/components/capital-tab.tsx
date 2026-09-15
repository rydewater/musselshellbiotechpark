import { useMemo, useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  AlertTriangle,
  Banknote,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  CAPITAL_STATS,
  INVESTORS,
  LANE_LABEL,
  NSF_FIELDS,
  NSF_META,
  PROGRAMS,
  STATUS_LABEL,
  type Program,
  type ProgramStatus,
} from "@/data/capital";

type Filter = "all" | ProgramStatus | "clients";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "apply", label: "Do now" },
  { id: "queue", label: "Queue" },
  { id: "clients", label: "Clients" },
  { id: "closed", label: "Closed" },
];

export function CapitalTab({
  copy,
  copied,
}: {
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  const [filter, setFilter] = useState<Filter>("apply");
  const [open, setOpen] = useState<string | null>("nsf-pitch");
  const [nsf, setNsf] = useState(0);

  const programs = useMemo(() => {
    if (filter === "all") return PROGRAMS;
    if (filter === "clients") return [];
    return PROGRAMS.filter((p) => p.status === filter);
  }, [filter]);

  const field = NSF_FIELDS[nsf];
  const count = field.text.length;
  const over = count > field.limit;

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">Capital stack</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Searched. Ranked. Copy-ready. Nothing is submitted until you send a draft or paste
          the NSF fields into myWork. Emails stay in Drafts.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {CAPITAL_STATS.map((s) => (
          <div key={s.label} className="rounded-lg bg-surface px-4 py-4 shadow-border">
            <p className="font-display text-3xl font-medium tracking-tight tabular-nums text-fg">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-raised px-4 py-4 shadow-border">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warn" />
          <div>
            <p className="font-medium text-fg">NSF cannot be filed from this brief</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Portal is Jacqueline + John's Research.gov / myWork login. Two pitches per
              year. Paste the four fields below. Full proposal is 4 Nov 2026 — only if invited.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-surface shadow-border">
        <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase">NSF Project Pitch</p>
            <h3 className="mt-1 font-display text-xl font-medium leading-tight">{NSF_META.title}</h3>
            <p className="mt-2 text-xs text-muted">
              {NSF_META.solicitation} · {NSF_META.topic} · Phase I {NSF_META.phaseI}
            </p>
          </div>
          <a
            href={NSF_META.portal}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
          >
            Open myWork
            <ExternalLink className="size-4" />
          </a>
        </div>
        <div className="no-print flex gap-1 overflow-x-auto px-3 pt-3">
          {NSF_FIELDS.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setNsf(i)}
              className={cn(
                "min-h-11 rounded-sm px-4 text-sm whitespace-nowrap",
                nsf === i ? "bg-accent text-accent-fg" : "text-muted hover:bg-raised hover:text-fg",
              )}
            >
              {i + 1}. {f.title.replace("The ", "")}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-5">
          <p className="text-xs leading-relaxed text-subtle">{field.prompt}</p>
          <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-raised p-4 font-sans text-sm leading-relaxed text-fg">
            {field.text}
          </pre>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className={cn("font-mono text-xs", over ? "text-danger" : "text-subtle")}>
              {count.toLocaleString()} / {field.limit.toLocaleString()} characters
            </p>
            <Button variant="outline" onClick={() => copy(`nsf-${field.id}`, field.text)}>
              {copied === `nsf-${field.id}` ? <Check className="size-4" /> : <Copy className="size-4" />}
              Copy field
            </Button>
          </div>
        </div>
      </div>

      <div className="no-print flex flex-wrap gap-1">
        {FILTERS.map((f) => (
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

      {filter !== "clients" && (
        <ol className="flex flex-col gap-3">
          {programs.map((p) => (
            <ProgramCard
              key={p.id}
              program={p}
              open={open === p.id}
              onToggle={() => setOpen(open === p.id ? null : p.id)}
              copy={copy}
              copied={copied}
            />
          ))}
        </ol>
      )}

      {(filter === "clients" || filter === "all") && (
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-xl font-medium">Clients to convert</h3>
          {INVESTORS.map((inv) => (
            <article key={inv.id} className="rounded-lg bg-surface p-5 shadow-border">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-medium text-fg">{inv.org}</h4>
                <p className="font-mono text-xs text-accent">{inv.amount}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {inv.name} · {inv.role}
              </p>
              <p className="mt-2 text-xs text-subtle">{inv.status}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg">{inv.ask}</p>
              {inv.id !== "stapes" && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => copy(`inv-${inv.id}`, inv.script)}>
                    {copied === `inv-${inv.id}` ? <Check className="size-4" /> : <Copy className="size-4" />}
                    Copy ask
                  </Button>
                  {inv.email && (
                    <a
                      href={`mailto:${inv.email}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm px-4 text-sm text-fg shadow-border"
                    >
                      {inv.email}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ProgramCard({
  program: p,
  open,
  onToggle,
  copy,
  copied,
}: {
  program: Program;
  open: boolean;
  onToggle: () => void;
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  return (
    <li className="rounded-lg bg-surface shadow-border print-break">
      <button onClick={onToggle} className="flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5">
        <span className="mt-1 text-accent">
          {p.status === "apply" ? <Banknote className="size-4" /> : <ClipboardList className="size-4" />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-medium text-fg">{p.name}</span>
            <span className="text-xs uppercase tracking-wide text-subtle">{LANE_LABEL[p.lane]}</span>
          </span>
          <span className="mt-1 block text-sm text-muted">{p.funder}</span>
          <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-fg">
            <span>{p.amount}</span>
            <span>{p.deadline}</span>
            <span className={statusClass(p.status)}>{STATUS_LABEL[p.status]}</span>
          </span>
        </span>
      </button>
      {open && (
        <div className="flex flex-col gap-3 border-t border-border px-4 py-4 sm:px-5">
          <p className="text-sm leading-relaxed text-fg">{p.why}</p>
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-fg">Apply: </span>
            {p.apply}
          </p>
          {p.blocker && <p className="text-xs text-warn">{p.blocker}</p>}
          <p className="text-xs text-subtle">{p.contact}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button variant="outline" onClick={() => copy(`pkg-${p.id}`, p.package)}>
              {copied === `pkg-${p.id}` ? <Check className="size-4" /> : <Copy className="size-4" />}
              Copy package
            </Button>
            {p.applyUrl && (
              <a
                href={p.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
              >
                <ExternalLink className="size-4" />
                Portal
              </a>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

function statusClass(s: ProgramStatus) {
  if (s === "apply") return "text-accent";
  if (s === "queue") return "text-warn";
  if (s === "closed" || s === "blocked") return "text-danger";
  return "text-subtle";
}
