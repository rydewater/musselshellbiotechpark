import { useMemo, useState } from "react";
import {
  Check,
  Copy,
  Phone,
  ExternalLink,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  BURHOP_EMAIL,
  CLEARWATER_EMAIL,
  DAY,
  HUD_BLOCK,
  INTROS,
  JAMES_NOTES,
  JAMES_PREP,
  KUREK_EMAIL,
  LENDERS,
  MOFI_EMAIL,
  MONEY,
  NEIL_CARRY_EMAIL,
  NOW,
  PEOPLE,
} from "@/data/execute";

type Filter = "all" | "intro" | "money" | "day" | "james";

export function ExecuteTab({
  copy,
  copied,
}: {
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [done, setDone] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem("scaniq-go-done");
      return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
    } catch {
      return {};
    }
  });

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("scaniq-go-done", JSON.stringify(next));
      return next;
    });
  };

  const remaining = useMemo(() => DAY.filter((d) => !done[d.id]).length, [done]);

  return (
    <section className="flex flex-col gap-6">
      <div className="rounded-lg bg-accent px-4 py-4 text-accent-fg sm:px-5">
        <p className="font-mono text-xs tracking-widest uppercase">Do first · {NOW.asOf}</p>
        <h2 className="mt-1 font-display text-2xl font-medium tracking-tight">
          Gary Kurek, then money, then James
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed opacity-90">{NOW.line}</p>
        <ol className="mt-4 flex flex-col gap-2">
          {NOW.actions.map((a, i) => (
            <li key={a.id} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono text-xs opacity-80">{String(i + 1).padStart(2, "0")}</span>
              {a.label}
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs opacity-80">Nothing in this tab sends mail. Drafts are in Gmail for you to send.</p>
      </div>

      <div className="no-print flex flex-wrap gap-1">
        {(
          [
            ["all", "All"],
            ["intro", "Intros"],
            ["money", "Money"],
            ["day", "Today"],
            ["james", "James"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm",
              filter === id ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {(filter === "all" || filter === "intro") && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight">People order</h3>
            <Button variant="outline" onClick={() => copy("kurek-mail", KUREK_EMAIL)}>
              {copied === "kurek-mail" ? <Check className="size-4" /> : <Copy className="size-4" />}
              Copy Kurek intro
            </Button>
          </div>
          {INTROS.map((p) => (
            <article key={p.id} className="rounded-lg bg-surface p-5 shadow-border">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-accent">{String(p.order).padStart(2, "0")}</span>
                <h4 className="font-medium text-fg">{p.name}</h4>
                <span
                  className={cn(
                    "font-mono text-xs uppercase tracking-wide",
                    p.status === "now" ? "text-danger" : "text-warn",
                  )}
                >
                  {p.role}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.why}</p>
              <ul className="mt-3 flex flex-col gap-1">
                {p.reach.map((r) => (
                  <li key={r} className="font-mono text-xs text-fg">
                    {r}
                  </li>
                ))}
              </ul>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-raised p-4 font-sans text-sm leading-relaxed text-muted">
                {p.id === "kurek" ? KUREK_EMAIL : p.script}
              </pre>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => copy(p.id, p.id === "kurek" ? KUREK_EMAIL : p.script)}>
                  {copied === p.id ? <Check className="size-4" /> : <Copy className="size-4" />}
                  Copy script
                </Button>
                {p.id === "kurek" && (
                  <a
                    href={`tel:${PEOPLE.kurek.phone.replaceAll("-", "")}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
                  >
                    <Phone className="size-4" />
                    Call Gary
                  </a>
                )}
                {p.id === "kurek" && (
                  <a
                    href={PEOPLE.kurek.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm px-4 text-sm text-fg shadow-border"
                  >
                    <ExternalLink className="size-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </article>
          ))}
          <p className="text-xs text-subtle">
            Andrew Klein · {PEOPLE.andrew.email} · {PEOPLE.andrew.note}
          </p>
        </div>
      )}

      {(filter === "all" || filter === "money") && (
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3 rounded-lg bg-raised px-4 py-4 shadow-border">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warn" />
            <p className="text-sm leading-relaxed text-muted">{HUD_BLOCK}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {MONEY.map((m) => (
              <article key={m.id} className="rounded-lg bg-surface p-5 shadow-border">
                <h4 className="font-medium text-fg">{m.name}</h4>
                <p className="mt-1 font-mono text-xs text-accent">{m.ceiling}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.mechanism}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg">{m.advantage}</p>
                <p className="mt-2 text-xs text-subtle">{m.catch}</p>
              </article>
            ))}
          </div>
          <ol className="flex flex-col gap-3">
            {LENDERS.map((l) => (
              <li key={l.id} className="rounded-lg bg-surface p-5 shadow-border">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-medium">{l.name}</h4>
                    <p className="mt-1 text-sm text-muted">{l.desk}</p>
                    <p className="mt-2 text-sm text-fg">{l.fit}</p>
                  </div>
                  <a
                    href={`tel:${l.phone.replaceAll("-", "")}`}
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
                  >
                    <Phone className="size-4" />
                    {l.phone}
                  </a>
                </div>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-raised p-4 font-sans text-sm leading-relaxed text-muted">
                  {l.script}
                </pre>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => copy(l.id, l.script)}>
                    {copied === l.id ? <Check className="size-4" /> : <Copy className="size-4" />}
                    Copy talking points
                  </Button>
                  {l.id === "clearwater" && (
                    <Button variant="outline" onClick={() => copy("cw-mail", CLEARWATER_EMAIL)}>
                      {copied === "cw-mail" ? <Check className="size-4" /> : <Copy className="size-4" />}
                      Copy email
                    </Button>
                  )}
                  {l.id === "mofi" && (
                    <Button variant="outline" onClick={() => copy("mofi-mail", MOFI_EMAIL)}>
                      {copied === "mofi-mail" ? <Check className="size-4" /> : <Copy className="size-4" />}
                      Copy email
                    </Button>
                  )}
                  {l.id === "neil-seller" && (
                    <Button variant="outline" onClick={() => copy("neil-mail", NEIL_CARRY_EMAIL)}>
                      {copied === "neil-mail" ? <Check className="size-4" /> : <Copy className="size-4" />}
                      Copy email
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {(filter === "all" || filter === "day") && (
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight">Today’s blocks</h3>
            <p className="font-mono text-xs text-subtle">{remaining} open</p>
          </div>
          {DAY.map((d) => (
            <button
              key={d.id}
              onClick={() => toggle(d.id)}
              className={cn(
                "grid gap-2 rounded-lg p-5 text-left shadow-border sm:grid-cols-5",
                d.id === "kurek" ? "bg-accent text-accent-fg" : "bg-surface",
              )}
            >
              <div className="sm:col-span-1">
                <p
                  className={cn(
                    "font-mono text-xs uppercase tracking-wide",
                    d.id === "kurek" ? "text-accent-fg" : "text-accent",
                  )}
                >
                  {d.time}
                </p>
                <p
                  className={cn(
                    "mt-2 font-mono text-xs uppercase",
                    d.id === "kurek" ? "text-accent-fg" : done[d.id] ? "text-accent" : "text-warn",
                  )}
                >
                  {d.id === "kurek" ? "Now" : done[d.id] ? "Done" : "Open"}
                </p>
              </div>
              <div className="sm:col-span-4">
                <p className={cn("font-medium", d.id === "kurek" ? "text-accent-fg" : "text-fg")}>{d.title}</p>
                <p className={cn("mt-1 text-sm", d.id === "kurek" ? "opacity-90" : "text-muted")}>{d.who}</p>
                <p className={cn("mt-2 text-sm leading-relaxed", d.id === "kurek" ? "text-accent-fg" : "text-fg")}>
                  {d.obj}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {(filter === "all" || filter === "james") && (
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight">James Stephens · Tuesday</h3>
            <p className="mt-1 text-sm text-muted">
              {PEOPLE.james.when} · {PEOPLE.james.email}
            </p>
          </div>
          {JAMES_PREP.map((j) => (
            <article key={j.title} className="rounded-lg bg-surface p-5 shadow-border">
              <h4 className="font-medium">{j.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{j.body}</p>
            </article>
          ))}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => copy("james", JAMES_NOTES)}>
              {copied === "james" ? <Check className="size-4" /> : <Copy className="size-4" />}
              Copy Tuesday notes
            </Button>
            <a
              href={PEOPLE.james.meet}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
            >
              <ArrowRight className="size-4" />
              Meet link
            </a>
          </div>
          <p className="text-xs text-subtle">Burhop hold copy is in Drafts as well — do not send until Kurek replies.</p>
          <Button variant="outline" onClick={() => copy("burhop-mail", BURHOP_EMAIL)}>
            {copied === "burhop-mail" ? <Check className="size-4" /> : <Copy className="size-4" />}
            Copy Burhop hold
          </Button>
        </div>
      )}
    </section>
  );
}
