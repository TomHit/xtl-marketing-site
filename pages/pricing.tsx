import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import SiteLayout from "../components/SiteLayout";
import RequestAccessModal from "../components/RequestAccessModal";

type PlanKey = "Signals" | "MyBots" | "Automation";

const PLANS: {
  key: PlanKey;
  t: string;
  desc: string;
  items: string[];
  badge?: string;
  featured?: boolean;
}[] = [
  {
    key: "Signals",
    t: "Signals",
    desc: "For discretionary traders who want structured trade ideas, confirmation-based entries, and defined risk context.",
    items: [
      "Opportunity feed with direction & context",
      "Confirmed BUY / SELL entries",
      "Stop-loss & target visibility",
      "Discord alerts for entry & outcome",
    ],
  },
  {
    key: "MyBots",
    t: "MyBots",
    desc: "For users who want rule-based execution with full control over strategy parameters and risk behavior.",
    items: [
      "Strategy configuration & parameters",
      "Local installer / agent execution",
      "Repeatable, rules-first behavior",
      "Pause / resume anytime",
    ],
    badge: "Most requested",
    featured: true,
  },
  {
    key: "Automation",
    t: "Automation",
    desc: "For experienced users ready for hands-free execution with predefined guardrails and monitoring.",
    items: [
      "End-to-end execution & monitoring",
      "SL / TP & exit management",
      "Designed for scaling strategies",
    ],
  },
];

export default function PricingPage() {
  const [openPlan, setOpenPlan] = useState<null | PlanKey>(null);

  return (
    <>
      <Head>
        <title>Access & Plans — XauTrendLab</title>
        <meta
          name="description"
          content="XauTrendLab access model and plans. Controlled onboarding for Signals, MyBots, and Automation."
        />
      </Head>

      <SiteLayout
        title="Access & Plans"
        subtitle="XauTrendLab uses a controlled access model to ensure stability, transparency, and responsible usage."
      >
        <RequestAccessModal
          open={openPlan !== null}
          planLabel={(openPlan || "Signals") as PlanKey}
          onClose={() => setOpenPlan(null)}
        />

        <section className="mx-auto max-w-6xl px-6 pb-16">

          {/* ── HERO INTRO ── */}
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold tracking-wide text-white/55">ACCESS MODEL</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Not open sign-up. Controlled access.
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Access is provided in stages to maintain system integrity, execution
              safety, and a consistent experience for all users. Choose the tier
              that fits your workflow and request access below.
            </p>
          </div>

          {/* ── PLANS ── */}
          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.key}
                className={`rounded-3xl border p-7 flex flex-col ${
                  plan.featured
                    ? "border-white/20 bg-white/[0.06] ring-1 ring-white/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-white">{plan.t} access</div>
                  {plan.badge && (
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-white/70 leading-relaxed">{plan.desc}</p>

                <ul className="mt-5 space-y-2 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="mt-0.5 text-white/40">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-2">
                  <button
                    onClick={() => setOpenPlan(plan.key)}
                    className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Request access
                  </button>
                  <Link
                    href="/product"
                    className="rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── WHY ACCESS CODES ── */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs font-semibold tracking-wide text-white/55 mb-2">WHY ACCESS CODES?</div>
                <h3 className="text-base font-semibold text-white">
                  Private access keeps the system stable and safe
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  XauTrendLab uses a private access model to prevent misuse, control
                  system load, and ensure users understand the risks of automated and
                  semi-automated trading. After approval, you receive a private access
                  code to log in to the app.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Prevents system overload and execution degradation",
                  "Ensures users understand automated trading risks",
                  "Maintains consistent experience across all users",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/70"
                  >
                    <span className="mr-2 text-white/40">✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── EXISTING USERS ── */}
          <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Already have an access code?</div>
              <div className="mt-0.5 text-xs text-white/50">Log in directly to the app.</div>
            </div>
            <Link
              href="/login?next=preview"
              className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5 whitespace-nowrap"
            >
              Enter access code →
            </Link>
          </div>

          {/* ── DISCLAIMER ── */}
          <p className="mt-8 text-xs text-white/40 text-center">
            Nothing on this page is a performance claim. Trading involves risk.
            Use defined risk and appropriate position sizing at all times.
          </p>

        </section>
      </SiteLayout>
    </>
  );
}
