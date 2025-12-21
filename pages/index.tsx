import Head from "next/head";

const APP_ORIGIN = "https://app.xautrendlab.com"; // change if needed

export default function Home() {
  return (
    <>
      <Head>
        <title>XTL – Trading Intelligence Platform</title>
        <meta
          name="description"
          content="XTL is an AI-powered trading intelligence platform. Trade with signals, automate strategies using MyBots, or run fully hands-free execution."
        />
      </Head>

      <main className="min-h-screen bg-[#0b0b0e] text-white">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            AI-Powered Trading Intelligence
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            From actionable signals to fully automated execution.  
            XTL lets you decide how much control you want.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={APP_ORIGIN}
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-medium text-black hover:bg-white/90"
            >
              Open Web App
            </a>
            <a
              href="#how"
              className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-medium text-white/90 hover:bg-white/5"
            >
              How XTL Works
            </a>
          </div>
        </section>

        {/* CONTROL SPECTRUM */}
        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold">
              One Platform. Multiple Control Modes.
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Start manual, automate gradually, or go fully hands-free.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <Card
                title="AI Signals"
                desc="Action-ready intraday signals with entry logic, targets, stop-loss and confidence."
              />
              <Card
                title="MyBots"
                desc="Convert strategies into automated execution with configurable risk rules."
              />
              <Card
                title="Full Automation"
                desc="Enable hands-free trading with continuous SL/TP and exit tracking."
              />
            </div>
          </div>
        </section>

        {/* SIGNALS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold">
              Signals Built for Execution
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              XTL signals are designed to be traded — manually or automatically.
            </p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Directional bias (BUY / SELL)</li>
              <li>• Entry confirmation logic</li>
              <li>• Stop-loss and target zones</li>
              <li>• Confidence score and rationale</li>
              <li>• Live post-entry monitoring</li>
            </ul>

            <p className="mt-6 text-white/60">
              Signals can be used standalone or fed directly into MyBots.
            </p>
          </div>
        </section>

        {/* MYBOTS */}
        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold">
              MyBots – Strategy-Based Automation
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Configure once. Execute consistently. Stay in control.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-medium">You configure</h3>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li>• Strategy selection</li>
                  <li>• Symbols and markets</li>
                  <li>• Risk per trade</li>
                  <li>• SL / TP / trailing rules</li>
                  <li>• Trading windows and safety limits</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium">Execution modes</h3>
                <ul className="mt-4 space-y-4 text-white/80">
                  <li>
                    <strong>Installer-based execution</strong><br />
                    Run the agent on your local machine or VPS to place and manage orders.
                  </li>
                  <li>
                    <strong>Fully automated mode</strong><br />
                    Hands-free execution with automatic SL/TP and exit tracking.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={APP_ORIGIN}
                className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
              >
                Open MyBots
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold">
              From Intelligence to Execution
            </h2>

            <ol className="mt-8 space-y-3 text-white/80">
              <li>1. AI analyzes market structure and momentum</li>
              <li>2. Signals are generated with entry and risk logic</li>
              <li>3. Strategies convert signals into rules</li>
              <li>4. MyBots execute trades automatically</li>
              <li>5. SL, TP, and exits are tracked continuously</li>
            </ol>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/10 py-20 text-center">
          <h2 className="text-3xl font-semibold">
            Start with Signals. Scale to Automation.
          </h2>
          <div className="mt-6">
            <a
              href={APP_ORIGIN}
              className="rounded-xl bg-white px-8 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Open Web App
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- helpers ---------- */

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
