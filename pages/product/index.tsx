import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";

const APP_ORIGIN = "https://app.xautrendlab.com";

type Item = { t: string; d: string };

// ─── Overview ────────────────────────────────────────────────────────────────

const PILLARS: Item[] = [
  {
    t: "Structured signal lifecycle",
    d: "Opportunities follow a consistent lifecycle: Setup → Confirmation → Active → Outcome. No ambiguous states.",
  },
  {
    t: "Risk defined at the point of action",
    d: "Stop-loss and target levels are attached when an entry is confirmed, then frozen for deterministic tracking.",
  },
  {
    t: "Deterministic outcome evaluation",
    d: "Outcomes resolve cleanly as HIT, SL_HIT, or EXPIRED based on price and time rules—no moving goalposts.",
  },
  {
    t: "Event-driven alerts",
    d: "Discord alerts trigger only on meaningful events (entry/exit), minimizing noise while staying timely.",
  },
];

// ─── Signal lifecycle ─────────────────────────────────────────────────────────

const FLOW = [
  {
    k: "01",
    t: "Setup",
    d: "A setup is identified and published as an opportunity. Not yet actionable—context only.",
  },
  {
    k: "02",
    t: "Confirmation",
    d: "The system waits for confirmation conditions before generating an actionable BUY/SELL entry.",
  },
  {
    k: "03",
    t: "Active",
    d: "Upon entry, stop-loss and target are frozen to ensure consistent tracking and evaluation.",
  },
  {
    k: "04",
    t: "Outcome",
    d: "The opportunity resolves deterministically as HIT, SL_HIT, or EXPIRED.",
  },
];

// ─── Architecture ─────────────────────────────────────────────────────────────

const ARCH: Item[] = [
  {
    t: "Client–agent model",
    d: "Strategy configuration stays on your machine. The local agent handles broker API calls—no cloud intermediary in the execution path.",
  },
  {
    t: "Broker agnostic",
    d: "Connects to MT4/MT5 brokers directly. No proprietary exchange required.",
  },
  {
    t: "Strategy isolation",
    d: "Each strategy instance runs in its own context. One misconfigured bot cannot affect others running in parallel.",
  },
  {
    t: "Audit log",
    d: "Full execution history with timestamps, signal state, and decision context—exportable for review.",
  },
];

// ─── Capabilities ─────────────────────────────────────────────────────────────

const CAPABILITIES: Item[] = [
  {
    t: "Opportunity feed",
    d: "A live stream of setups with direction, confidence context, and supporting rationale.",
  },
  {
    t: "Entry confirmation",
    d: "Actionable BUY/SELL signals are produced only after confirmation—designed to reduce chase-based execution.",
  },
  {
    t: "SL/TP visibility",
    d: "Risk and target levels are visible and consistent across the UI and alerts once entry is confirmed.",
  },
  {
    t: "Audit-friendly history",
    d: "Closed opportunities are recorded as HIT / SL_HIT / EXPIRED for review and process improvement.",
  },
];

// ─── Security ─────────────────────────────────────────────────────────────────

const SECURITY: Item[] = [
  {
    t: "Local execution",
    d: "Bots and automation run on your machine or VPS via the installer/agent. You own and control the runtime—nothing executes in the cloud.",
  },
  {
    t: "Guardrails",
    d: "Execution respects your risk limits: SL/TP settings, trailing behavior, and strategy-level constraints enforced at runtime.",
  },
  {
    t: "Transparency",
    d: "Every signal decision is logged with full context so you always know what the platform did and why.",
  },
  {
    t: "No credential exposure",
    d: "Your broker credentials and strategy logic never leave your machine. The platform has zero order access on its end.",
  },
];

// ─── Shared components ────────────────────────────────────────────────────────

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold tracking-wide text-white/55">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-white/70">{desc}</p> : null}
    </div>
  );
}

function Card({ t, d }: Item) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-sm font-semibold text-white">{t}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{d}</div>
    </div>
  );
}

function FlowCard({ k, t, d }: { k: string; t: string; d: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold tracking-wide text-white/55">{k}</div>
        <div className="text-xs text-white/40">Lifecycle</div>
      </div>
      <div className="mt-2 text-base font-semibold text-white">{t}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{d}</div>
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <div className="text-[11px] font-semibold tracking-wide text-white/50">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductPage() {
  return (
    <SiteLayout title="XauTrendLab — Product">

      {/* ── HERO / OVERVIEW ── */}
      <section id="overview" className="mx-auto max-w-6xl px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-white/55">
            PRODUCT
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Signals, risk levels, and outcomes—presented with institutional clarity
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            XauTrendLab is built for disciplined decision-making: confirmed
            entries, frozen stop-loss/target levels, deterministic outcome
            tracking, and event-driven alerts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${APP_ORIGIN}/login`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
            >
              Open app
            </a>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
            >
              Pricing & access
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <StatChip label="Lifecycle" value="Setup → Entry → Outcome" />
            <StatChip label="Risk levels" value="Frozen at entry" />
            <StatChip label="Alerts" value="Discord (event-driven)" />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PILLARS.map((x) => (
            <Card key={x.t} t={x.t} d={x.d} />
          ))}
        </div>
      </section>

      {/* ── SIGNAL LIFECYCLE ── */}
      <section id="lifecycle" className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="PROCESS"
            title="A lifecycle that separates setup from action"
            desc="We distinguish between an opportunity (setup) and an actionable entry. Once an entry is confirmed, levels are frozen and outcomes are evaluated deterministically."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {FLOW.map((x) => (
              <FlowCard key={x.k} k={x.k} t={x.t} d={x.d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM ARCHITECTURE ── */}
      <section id="architecture" className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="ARCHITECTURE"
            title="Built for control, not convenience"
            desc="XTL runs where you run it. The platform is designed so that execution logic, credentials, and strategy state never leave your environment."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ARCH.map((x) => (
              <Card key={x.t} t={x.t} d={x.d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="CAPABILITIES"
            title="Core functionality for real trading workflows"
            desc="Designed to be practical: clear context, actionable events, and a history you can review."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map((x) => (
              <Card key={x.t} t={x.t} d={x.d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY & EXECUTION ── */}
      <section id="security" className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <SectionTitle
              eyebrow="SECURITY & EXECUTION"
              title="Control, transparency, and safe execution behavior"
              desc="XTL emphasizes keeping execution under your control and making behavior predictable. Your strategy settings define what the system can and cannot do."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {SECURITY.map((x) => (
                <Card key={x.t} t={x.t} d={x.d} />
              ))}
            </div>

            {/* Transparency checklist */}
            <div className="mt-10">
              <div className="text-xs font-semibold tracking-wide text-white/55 mb-4">
                TRANSPARENCY CHECKLIST
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Actionable BUY/SELL only after confirmation",
                  "Stop-loss and target frozen at entry",
                  "Outcome states: HIT / SL_HIT / EXPIRED",
                  "Discord alerts on entry and exit events",
                  "Consistent presentation across UI and alerts",
                  "Clean history for review and refinement",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/75"
                  >
                    <span className="mr-2 text-white/70">✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`${APP_ORIGIN}/login`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
              >
                Open app
              </a>
              <Link
                href="/pricing"
                className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
              >
                Pricing & access
              </Link>
              <Link
                href="/faq"
                className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
              >
                FAQs →
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Note: Nothing on this page is a performance claim. Trading involves
              risk. Use defined risk and appropriate position sizing.
            </p>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
