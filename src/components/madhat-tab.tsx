import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  invoiceMailto,
  MADHAT_PITCH,
  MADHAT_TIERS,
  STORAGE_KEY,
  type MadhatSignup,
  type MadhatTierId,
} from "@/data/madhat";

const fieldClass =
  "min-h-11 w-full rounded-sm bg-raised px-3 text-sm text-fg shadow-border outline-none placeholder:text-subtle focus:shadow-border-hover";

export function MadhatTab({
  copy,
  copied,
}: {
  copy: (k: string, t: string) => void;
  copied: string | null;
}) {
  const [tier, setTier] = useState<MadhatTierId>("forge");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [signups, setSignups] = useState<MadhatSignup[]>([]);
  const [just, setJust] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSignups(JSON.parse(raw) as MadhatSignup[]);
    } catch {
      /* ignore */
    }
  }, []);

  const selected = useMemo(() => MADHAT_TIERS.find((t) => t.id === tier)!, [tier]);

  function persist(next: MadhatSignup[]) {
    setSignups(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* private mode */
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const n = name.trim();
    const em = email.trim();
    if (!n || !em || !em.includes("@")) {
      setError("Name and a real email are required.");
      return;
    }
    const row: MadhatSignup = {
      id: `${Date.now()}`,
      at: new Date().toISOString(),
      name: n,
      email: em,
      company: company.trim(),
      tier,
      note: note.trim(),
    };
    persist([row, ...signups]);
    setJust(row.id);
    setName("");
    setEmail("");
    setCompany("");
    setNote("");
  }

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight">MadHat seats</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{MADHAT_PITCH}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {MADHAT_TIERS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTier(t.id)}
            className={cn(
              "rounded-lg p-5 text-left shadow-border transition-colors duration-150",
              tier === t.id ? "bg-accent text-accent-fg" : "bg-surface text-fg hover:shadow-border-hover",
            )}
          >
            <p className={cn("text-xs uppercase tracking-wide", tier === t.id ? "text-accent-fg/80" : "text-subtle")}>
              {t.tag}
            </p>
            <p className="mt-1 font-display text-2xl font-medium">{t.name}</p>
            <p className="mt-1 font-mono text-sm">
              {t.price}
              <span className={tier === t.id ? "text-accent-fg/80" : "text-muted"}>{t.cadence}</span>
            </p>
            <p className={cn("mt-3 text-sm leading-relaxed", tier === t.id ? "text-accent-fg/90" : "text-muted")}>
              {t.who}
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {t.includes.map((line) => (
                <li key={line} className="text-xs leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="rounded-xl bg-surface p-5 shadow-border">
        <h3 className="font-medium">Sign a seat — {selected.name}</h3>
        <p className="mt-1 text-sm text-muted">
          Captured on this device, then invoiced from ja@scaniq.online. Whop/Stripe are not ScanIQ's
          yet — do not charge Festival Outfitters.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-xs text-subtle">
            Name
            <input
              className={fieldClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs text-subtle">
            Email
            <input
              className={fieldClass}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs text-subtle sm:col-span-2">
            Company
            <input
              className={fieldClass}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="organization"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs text-subtle sm:col-span-2">
            What they want made
            <input
              className={fieldClass}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Housing, silencer, toroidal drive…"
            />
          </label>
        </div>
        {error && <p className="mt-3 text-sm text-danger">{error}</p>}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button type="submit" data-madhat-submit>
            {selected.cta}
          </Button>
          <Button type="button" variant="outline" onClick={() => copy("madhat-pitch", MADHAT_PITCH)}>
            {copied === "madhat-pitch" ? <Check className="size-4" /> : <Copy className="size-4" />}
            Copy pitch
          </Button>
        </div>
      </form>

      {signups.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-xl font-medium">Seats on this device</h3>
          <ul className="flex flex-col gap-2">
            {signups.map((s) => {
              const t = MADHAT_TIERS.find((x) => x.id === s.tier)!;
              return (
                <li key={s.id} className={cn("rounded-lg bg-raised px-4 py-3", just === s.id && "shadow-border")}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-medium">
                      {s.name}
                      {s.company ? ` · ${s.company}` : ""}
                    </p>
                    <p className="font-mono text-xs text-accent">
                      {t.name} {t.price}
                      {t.cadence}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-muted">{s.email}</p>
                  {s.note && <p className="mt-1 text-xs text-subtle">{s.note}</p>}
                  <a
                    href={invoiceMailto(s, t)}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm text-fg shadow-border"
                  >
                    <Mail className="size-4" />
                    Draft invoice
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
