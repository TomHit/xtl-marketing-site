import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing — XauTrendLab</title>
        <meta
          name="description"
          content="Choose a plan for XTL Signals, MyBots, and Automated Trading. Access is provided via a private code after purchase."
        />
      </Head>

      <SiteLayout
        title="Pricing"
        subtitle="Start with Signals, upgrade to MyBots, and go hands-free with Automation. Access is provided via a private code after purchase."
      >
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold md:text-2xl">Simple plans</h2>
                <p className="mt-2 max-w-3xl text-sm text-white/70">
                  Pricing shown is a placeholder. You can replace amounts later. After purchase, you receive a
                  private Access Code to log in.
                </p>
              </div>

              <Link
                href="/login"
                className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
              >
                Already have a code? Login →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Signals */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="text-sm font-semibold text-white">Signals</div>
                <div className="mt-2 text-3xl font-semibold">₹—</div>
                <div className="mt-1 text-xs text-white/55">per month (placeholder)</div>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  <li>• AI-guided signals & direction</li>
                  <li>• Clean dashboard view</li>
                  <li>• Best for manual execution</li>
                </ul>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="mailto:support@xautrendlab.com?subject=XTL%20Signals%20Plan%20Access%20Request"
                    className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Request Access Code
                  </a>
                  <Link
                    href="/offerings/signals"
                    className="rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              {/* MyBots */}
              <div className="rounded-3xl border border-white/15 bg-white/5 p-7 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">MyBots</div>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                    Popular
                  </span>
                </div>
                <div className="mt-2 text-3xl font-semibold">₹—</div>
                <div className="mt-1 text-xs text-white/55">per month (placeholder)</div>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  <li>• Configure your strategy</li>
                  <li>• Local installer/agent execution</li>
                  <li>• Repeatable rules + control</li>
                </ul>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="mailto:support@xautrendlab.com?subject=XTL%20MyBots%20Plan%20Access%20Request"
                    className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Request Access Code
                  </a>
                  <Link
                    href="/offerings/mybots"
                    className="rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Automation */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="text-sm font-semibold text-white">Automation</div>
                <div className="mt-2 text-3xl font-semibold">₹—</div>
                <div className="mt-1 text-xs text-white/55">per month (placeholder)</div>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  <li>• Hands-free trade execution</li>
                  <li>• SL/TP + monitoring</li>
                  <li>• Built for scaling</li>
                </ul>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="mailto:support@xautrendlab.com?subject=XTL%20Automation%20Plan%20Access%20Request"
                    className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Request Access Code
                  </a>
                  <Link
                    href="/offerings/automation"
                    className="rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <div className="font-semibold text-white/90">Access model (important)</div>
              <p className="mt-2">
                To avoid unnecessary traffic to the app, XTL app access is protected. After payment, we provide a
                private Access Code. Only users with a code can proceed to app login.
              </p>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
