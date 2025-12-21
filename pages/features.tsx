import SiteLayout from "../components/SiteLayout";

const FEATURES = [
  { t: "Opportunities feed", d: "Clear UP/DOWN bias with confidence and reason strings." },
  { t: "Entry & trade management", d: "Targets, SL, trailing rules, and clean audit trail." },
  { t: "Fast UI", d: "Minimal latency updates with stable snapshots." },
];

export default function FeaturesPage() {
  return (
    <SiteLayout title="XauTrendLab — Features">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs text-gold2/90">FEATURES</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need to trade with structure
          </h1>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.t} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-base font-semibold text-white">{f.t}</div>
                <div className="mt-2 text-sm text-white/70">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
