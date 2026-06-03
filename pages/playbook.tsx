import Link from "next/link";
import SiteLayout from "../components/SiteLayout";

const APP_ORIGIN = "https://app.xautrendlab.com";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRINCIPLES = [
  {
    t: "Wait for confirmation",
    d: "A setup appearing in the feed is not a signal to act. The platform separates observation from action—only a confirmed entry is actionable.",
  },
  {
    t: "Respect frozen levels",
    d: "Once an entry is confirmed, stop-loss and target are set. Do not adjust them mid-trade. The system is built around this discipline.",
  },
  {
    t: "Let outcomes resolve",
    d: "Every opportunity ends as HIT, SL_HIT, or EXPIRED. There is no manual override. Trust the process and review the history.",
  },
];

const LIFECYCLE = [
  {
    k: "01",
    label: "SETUP",
    t: "An opportunity appears",
    d: "The platform identifies a potential setup and publishes it to the feed. This is context—not a call to action. Read the rationale, note the direction, and wait.",
    note: "No entry yet. Observe only.",
  },
  {
    k: "02",
    label: "CONFIRMATION",
    t: "Entry conditions are met",
    d: "When confirmation conditions are satisfied, the platform generates an actionable BUY or SELL signal. SL and TP levels are attached at this point and frozen.",
    note: "This is when you act.",
  },
  {
    k: "03",
    label: "ACTIVE",
    t: "Trade is live",
    d: "The opportunity is now active with frozen stop-loss and target levels. Your job is to hold position according to your pre-defined risk. Do not move the SL.",
    note: "Levels are locked. Stay disciplined.",
  },
  {
    k: "04",
    label: "OUTCOME",
    t: "Resolution",
    d: "The opportunity closes as HIT (target reached), SL_HIT (stop triggered), or EXPIRED (neither level reached within the time window). All outcomes are logged.",
    note: "Review, don't react.",
  },
];

const FEED_TIPS = [
  {
    t: "Direction tells you bias",
    d: "Each opportunity shows LONG or SHORT. This is the platform's directional read based on current conditions—not a guaranteed move.",
  },
  {
    t: "Rationale gives context",
    d: "Every setup includes the reasoning behind it. Read this before the entry confirms—it helps you understand what the system is seeing.",
  },
  {
    t: "Status tells you where it is",
    d: "Setup, Confirmation, Active, or Outcome. Glance at status first so you know whether action is required or not.",
  },
  {
    t: "History is your feedback loop",
    d: "Closed opportunities (HIT / SL_HIT / EXPIRED) are preserved. Review them regularly to understand platform behavior and refine your process.",
  },
];

const ALERTS = [
  {
    event: "Entry confirmed",
    what: "BUY or SELL signal with SL and TP levels",
  },
  {
    event: "Target hit",
    what: "Outcome recorded as HIT",
  },
  {
    event: "Stop hit",
    what: "Outcome recorded as SL_HIT",
  },
  {
    event: "Opportunity expired",
    what: "Outcome recorded as EXPIRED",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

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
      <div className="text-xs font-semibold tracking-wide text-white/55">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 text-white/70">{desc}</p> : null}
    </div>
  );
}

function Card({ t, d }: { t: string; d: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-sm font-semibold text-white">{t}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{d}</div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlaybookPage() {
  return (
    <SiteLayout title="XauTrendLab — Playbook">

      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-white/55">PLAYBOOK</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            How to use XauTrendLab with discipline
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            XTL is built around a structured process. This page explains how the
            signal lifecycle works, how to read the opportunity feed, and the
            principles that make the system effective.
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
              href="/product"
              className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
            >
              Product overview
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="PRINCIPLES"
            title="Three rules that underpin the process"
            desc="Before diving into the mechanics, these are the principles the platform is built around—and that you should trade around."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PRINCIPLES.map((x) => (
              <Card key={x.t} t={x.t} d={x.d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNAL LIFECYCLE ── */}
      <section className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="SIGNAL LIFECYCLE"
            title="From setup to outcome, step by step"
            desc="Every opportunity moves through four stages. Understanding each stage tells you exactly what to do—and what not to do."
          />

          <div className="mt-8 space-y-4">
            {LIFECYCLE.map((x) => (
              <div
                key={x.k}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                  {/* Step number + label */}
                  <div className="flex-shrink-0 md:w-32">
                    <div className="text-xs font-semibold tracking-wide text-white/40">{x.k}</div>
                    <div className="mt-1 text-xs font-semibold tracking-widest text-white/55">{x.label}</div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-base font-semibold text-white">{x.t}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">{x.d}</div>
                  </div>
                  {/* Note pill */}
                  <div className="flex-shrink-0">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/50">
                      {x.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READING THE FEED ── */}
      <section className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="OPPORTUNITY FEED"
            title="How to read what the platform is showing you"
            desc="The feed is a live stream of setups and active opportunities. Here's what each element means and how to use it."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FEED_TIPS.map((x) => (
              <Card key={x.t} t={x.t} d={x.d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALERTS ── */}
      <section className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="DISCORD ALERTS"
            title="Alerts fire on meaningful events only"
            desc="You won't get noise. Alerts are sent at the moments that require your attention."
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
            {ALERTS.map((x, i) => (
              <div
                key={x.event}
                className={`flex items-center justify-between px-6 py-4 text-sm ${
                  i !== ALERTS.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="font-medium text-white">{x.event}</div>
                <div className="text-white/55">{x.what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-white/55">READY</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Put the playbook into practice
              </h2>
              <p className="mt-3 text-white/70">
                The opportunity feed is live. Open the app, observe the setups,
                and wait for confirmation before acting.
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
                <Link
                  href="/faq"
                  className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  FAQs →
                </Link>
              </div>
              <p className="mt-4 text-xs text-white/50">
                Trading involves risk. Nothing on this page is a performance claim.
                Use defined risk and appropriate position sizing.
              </p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
