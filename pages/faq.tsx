import SiteLayout from "../components/SiteLayout";

const FAQ = [
  { q: "What is XauTrendLab?", a: "AI-powered intraday trend intelligence with structured opportunities and trade management." },
  { q: "Do you guarantee profits?", a: "No. Trading is risky. This is a decision-support tool." },
  { q: "How do I access the app?", a: "Open the web app and login. Onboarding guides device setup if needed." },
];

export default function FaqPage() {
  return (
    <SiteLayout title="XauTrendLab — FAQ">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs text-gold2/90">FAQ</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-base font-semibold text-white">{item.q}</div>
                <div className="mt-2 text-sm text-white/70">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
