export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E6E8EB]">
      <header className="border-b border-white/5 bg-[#0B0E14]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">XauTrendLab</div>
          <div className="flex items-center gap-3">
            <a
              href="https://app.xautrendlab.com"
              className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/90 hover:border-white/20 hover:bg-white/5"
            >
              Login
            </a>
            <a
              href="https://app.xautrendlab.com"
              className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Open Web App
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
            AI trend intelligence for intraday traders
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            AI-Powered Intraday <span className="text-white">Trend Intelligence</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/70">
            Confidence-scored trend signals with execution-ready levels — built for disciplined trading, not noise.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://app.xautrendlab.com"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Open Web App
            </a>
            <a
              href="/product"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 hover:border-white/20 hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} XauTrendLab</div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="/pricing">Pricing</a>
            <a className="hover:text-white" href="/privacy">Privacy</a>
            <a className="hover:text-white" href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
