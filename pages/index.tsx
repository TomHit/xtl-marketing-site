import SiteLayout from "../components/SiteLayout";

export default function Home() {
  return (
    <SiteLayout title="XauTrendLab — AI-powered intraday trend intelligence">
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gold2" />
            AI trend intelligence for intraday traders
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            AI-powered intraday <span className="text-gold2">Trend Intelligence</span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
            Clean opportunities, structured entry logic, targets/SL, and trade management — built for speed.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://app.xautrendlab.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-95"
            >
              Open Web App
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              View Features
            </a>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
