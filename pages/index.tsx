// pages/index.tsx
import Head from "next/head";

const APP_ORIGIN = "https://app.xautrendlab.com";

export default function Home() {
  return (
    <>
      <Head>
        <title>XauTrendLab — AI intraday trend intelligence</title>
        <meta
          name="description"
          content="AI-powered intraday trend intelligence with structured signals, entry logic, SL/TP, and MyBots automation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#0B0E14] text-[#E6E8EB]">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0E14]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10" />
              <div className="text-lg font-semibold tracking-tight">XauTrendLab</div>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#features">
                Features
              </a>
              <a className="hover:text-white" href="#signals">
                Signals
              </a>
              <a className="hover:text-white" href="#mybots">
                MyBots
              </a>
              <a className="hover:text-white" href="#how">
                How it works
              </a>
              <a className="hover:text-white" href="#faq">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`${APP_ORIGIN}/login`}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/90 hover:border-white/20 hover:bg-white/5"
              >
                Login
              </a>
              <a
                href={APP_ORIGIN}
                className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                Open App
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="mx-auto max-w-6xl px-6">
          <section className="relative py-16 md:py-20">
            <div className="absolute inset-0 -z-10">
              <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4DA3FF]/15 blur-3xl" />
              <div className="pointer-events-none absolute right-[-160px] top-[160px] h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-3xl" />
            </div>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
                AI trend intelligence for intraday traders
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                AI-powered intraday
                <span className="text-white"> Trend Intelligence</span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Clean signals, structured entry logic, targets/SL, and trade management — built for speed.
                Use it manually or automate via <span className="text-white/90">MyBots</span>.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={APP_ORIGIN}
                  className="rounded-xl bg-white px-5 py-3 text-center text-sm font-medium text-black hover:bg-white/90"
                >
                  Open Web App
                </a>
                <a
                  href="#features"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white/90 hover:border-white/20 hover:bg-white/10"
                >
                  View Features
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-white/60 md:max-w-xl">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/90">Multi-timeframe</div>
                  <div className="mt-1">M15 / H1 signals</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/90">Structured logic</div>
                  <div className="mt-1">Entry + SL/TP rails</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/90">Automation-ready</div>
                  <div className="mt-1">MyBots execution</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="py-14">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Why XauTrendLab</h2>
                <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                  Not a noisy indicator stack. XTL combines AI forecasts with rule-based structure so you can act with
                  confidence.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Card
                title="Actionable Signals"
                desc="Clear BUY/SELL bias with supporting reasons and confidence — designed for fast decisions."
              />
              <Card
                title="Entry + Trade Management"
                desc="Structured rules: entry triggers, targets, SL, trailing options — no guesswork."
              />
              <Card
                title="Built for Automation"
                desc="Turn signals into execution using MyBots. Start manual, scale to automated."
              />
            </div>
          </section>

          {/* Signals */}
          <section id="signals" className="py-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Signals that traders can trust</h2>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  XTL provides AI-powered intraday signals with structure:
                  <span className="text-white/90"> bias</span>, <span className="text-white/90">reasoning</span>, and
                  <span className="text-white/90"> risk rails</span>.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/75">
                  <li className="flex gap-3">
                    <Dot />
                    <span>
                      Direction + confidence (not just “green/red”). Supports an abstain/no-trade mindset.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Dot />
                    <span>Targets and stop suggestions aligned to volatility and market structure.</span>
                  </li>
                  <li className="flex gap-3">
                    <Dot />
                    <span>Designed for intraday timing (M15/H1), with clean updates and stable levels.</span>
                  </li>
                </ul>

                <div className="mt-7 flex gap-3">
                  <a
                    href={APP_ORIGIN}
                    className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                  >
                    View live signals
                  </a>
                  <a
                    href="#faq"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/20 hover:bg-white/10"
                  >
                    Read FAQ
                  </a>
                </div>
              </div>

              {/* mock signal card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/70">Example signal</div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-400/20">
                    BUY • High
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-[#0B0E14]/60 p-4">
                  <div className="text-xs text-white/60">Symbol</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">XAUUSD</div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <MiniStat label="Entry" value="4326.7" />
                    <MiniStat label="Target" value="4342.0" />
                    <MiniStat label="SL" value="4316.0" />
                  </div>

                  <div className="mt-4">
                    <div className="text-xs text-white/60">Reasons</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Pill>bullish structure</Pill>
                      <Pill>trend aligned</Pill>
                      <Pill>volatility OK</Pill>
                      <Pill>clean pullback</Pill>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-white/50">
                  Tip: XTL focuses on clarity — a trader should understand “why now” in seconds.
                </div>
              </div>
            </div>
          </section>

          {/* MyBots */}
          <section id="mybots" className="py-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/70">MyBots</div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                  Automate execution when you’re ready
                </h3>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  Start manual. When your rules are proven, use MyBots to execute signals with consistent discipline.
                </p>

                <div className="mt-6 grid gap-3">
                  <BotRow title="Risk rails" desc="Max loss, session time windows, spread checks." />
                  <BotRow title="Trade management" desc="Trail SL, partial exits, opposite-signal exits." />
                  <BotRow title="Controls" desc="Enable/disable per symbol, per session, per strategy." />
                </div>

                <div className="mt-7 flex gap-3">
                  <a
                    href={APP_ORIGIN}
                    className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                  >
                    Open MyBots
                  </a>
                  <a
                    href="#how"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/20 hover:bg-white/10"
                  >
                    How it works
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Manual ? Semi-auto ? Fully automated</h2>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  XTL is built for a realistic path. You can validate signals manually, then progressively automate.
                </p>

                <div className="mt-6 grid gap-4">
                  <Step n="1" title="Use signals" desc="Trade manually with clear entry/SL/TP guidance." />
                  <Step n="2" title="Lock rules" desc="Choose trade windows, risk limits, and exit behavior." />
                  <Step n="3" title="Run MyBots" desc="Execute consistently with your chosen constraints." />
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="how" className="py-14">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-7 md:p-10">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Get started in 3 steps</h2>
                  <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                    Open the web app, pick symbols/timeframe, and use signals — then scale into automation with MyBots.
                  </p>
                </div>
                <a
                  href={APP_ORIGIN}
                  className="rounded-xl bg-white px-5 py-3 text-center text-sm font-medium text-black hover:bg-white/90"
                >
                  Open XTL
                </a>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <StepCard title="Open the app" desc="Login and select your markets & timeframe." />
                <StepCard title="Follow structured signals" desc="Use bias, reasons, entry + SL/TP rails." />
                <StepCard title="Automate with MyBots" desc="Enable execution once your rules are validated." />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-14">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="Is XTL fully automated?"
                a="XTL supports manual and automated workflows. You can trade signals manually, or use MyBots for automated execution when you’re ready."
              />
              <Faq
                q="Are signals “repainting”?"
                a="The goal is stable, actionable structure. Signals are designed to be clear and consistent for real-time use, not hindsight charts."
              />
              <Faq
                q="Which markets are supported?"
                a="Start with core symbols (like XAUUSD) and expand. The platform is designed to scale across major FX/commodities."
              />
              <Faq
                q="Can I control risk settings?"
                a="Yes. MyBots is built around risk rails: max loss, time windows, spread checks, and trade management options."
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 text-xs text-white/50">
            <div className="border-t border-white/10 pt-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>© {new Date().getFullYear()} XauTrendLab</div>
                <div className="flex gap-4">
                  <a className="hover:text-white/80" href="#features">
                    Features
                  </a>
                  <a className="hover:text-white/80" href="#signals">
                    Signals
                  </a>
                  <a className="hover:text-white/80" href="#mybots">
                    MyBots
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-base font-semibold tracking-tight">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#4DA3FF]" />;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold tracking-tight text-white/90">{value}</div>
    </div>
  );
}

function BotRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0B0E14]/50 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold">
          {n}
        </div>
        <div className="text-base font-semibold tracking-tight">{title}</div>
      </div>
      <div className="mt-3 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function StepCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-base font-semibold tracking-tight">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white/90">{q}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{a}</div>
    </div>
  );
}
