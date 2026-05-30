import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteLayout from "../components/SiteLayout";

const APP_ORIGIN = "https://app.xautrendlab.com";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{
        width: "32px", height: "32px",
        background: "#D4A843",
        borderRadius: "6px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 800, fontSize: "14px", color: "#000",
        letterSpacing: "-0.02em",
      }}>X</div>
      <span style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700, fontSize: "16px",
        color: "#fff", letterSpacing: "0.08em",
      }}>TRENDLAB</span>
    </div>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
const TICKERS = [
  { sym: "XAUUSD", price: "2,347.80", change: "+0.84%", up: true },
  { sym: "EURUSD", price: "1.08432",  change: "+0.21%", up: true },
  { sym: "GBPUSD", price: "1.26548",  change: "-0.12%", up: false },
  { sym: "USDJPY", price: "149.823",  change: "-0.33%", up: false },
  { sym: "USDCAD", price: "1.35672",  change: "+0.08%", up: true },
  { sym: "USDCHF", price: "0.89234",  change: "-0.15%", up: false },
];

function TickerBar() {
  const items = [...TICKERS, ...TICKERS];
  return (
    <div className="overflow-hidden border-b border-white/[0.06] bg-white/[0.02] py-2">
      <div className="flex animate-ticker gap-12 w-max">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap font-mono text-xs">
            <span className={`h-1.5 w-1.5 rounded-full ${t.up ? "bg-emerald-400" : "bg-red-400"}`} />
            <span className="text-white/50 font-medium">{t.sym}</span>
            <span className="text-white/80">{t.price}</span>
            <span className={t.up ? "text-emerald-400" : "text-red-400"}>{t.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Hero Chart ───────────────────────────────────────────────────────────────
function HeroChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const data = [
      2291,2285,2279,2284,2290,2296,2288,2282,2278,2281,
      2285,2292,2298,2302,2308,2312,2309,2315,2318,2322,
      2319,2315,2318,2321,2325,2330,2328,2332,2336,2340
    ];

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width  = W * window.devicePixelRatio;
    canvas.height = H * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const min = Math.min(...data) - 10;
    const max = Math.max(...data) + 10;
    const xStep = W / (data.length - 1);

    const toY = (v: number) => H - ((v - min) / (max - min)) * H * 0.85 - H * 0.05;
    const toX = (i: number) => i * xStep;

    // Zone band
    const zoneTop = toY(2322);
    const zoneBot = toY(2318);
    ctx.fillStyle = "rgba(212,168,67,0.08)";
    ctx.fillRect(0, zoneTop, W, zoneBot - zoneTop);

    // Zone lines
    ctx.strokeStyle = "rgba(212,168,67,0.3)";
    ctx.lineWidth   = 0.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(0, zoneTop); ctx.lineTo(W, zoneTop); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, zoneBot); ctx.lineTo(W, zoneBot); ctx.stroke();
    ctx.setLineDash([]);

    // Fill
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "rgba(212,168,67,0.18)");
    grad.addColorStop(1, "rgba(212,168,67,0)");
    ctx.beginPath();
    ctx.moveTo(toX(0), toY(data[0]));
    for (let i = 1; i < data.length; i++) {
      const cp1x = toX(i - 0.5); const cp1y = toY(data[i - 1]);
      const cp2x = toX(i - 0.5); const cp2y = toY(data[i]);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, toX(i), toY(data[i]));
    }
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(toX(0), toY(data[0]));
    for (let i = 1; i < data.length; i++) {
      const cp1x = toX(i - 0.5); const cp1y = toY(data[i - 1]);
      const cp2x = toX(i - 0.5); const cp2y = toY(data[i]);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, toX(i), toY(data[i]));
    }
    ctx.strokeStyle = "#D4A843";
    ctx.lineWidth   = 1.5;
    ctx.stroke();

    // Last point dot
    ctx.beginPath();
    ctx.arc(toX(data.length - 1), toY(data[data.length - 1]), 3, 0, Math.PI * 2);
    ctx.fillStyle = "#D4A843";
    ctx.fill();

  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

// ─── Step ─────────────────────────────────────────────────────────────────────
function Step({ num, title, desc, tag }: { num: string; title: string; desc: string; tag: string }) {
  return (
    <div className="bg-white/[0.03] p-8 border-r border-white/[0.06] last:border-r-0">
      <div className="font-display text-6xl font-black text-white/[0.06] leading-none mb-5">{num}</div>
      <div className="font-display text-xl font-bold text-white mb-3">{title}</div>
      <p className="text-sm text-white/50 leading-relaxed mb-4">{desc}</p>
      <span className="inline-block bg-[#D4A843]/10 border border-[#D4A843]/30 px-2.5 py-1 rounded font-mono text-[10px] text-[#D4A843] tracking-widest">
        {tag}
      </span>
    </div>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, children }: {
  icon: string; title: string; desc: string; children?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 hover:border-white/[0.12] transition-colors">
      <div className="text-2xl mb-5">{icon}</div>
      <div className="font-display text-lg font-bold text-white mb-2.5">{title}</div>
      <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
      {children}
    </div>
  );
}

// ─── Stat Box ─────────────────────────────────────────────────────────────────
function StatBox({ num, gold, suffix, label }: { num: string; gold?: boolean; suffix?: string; label: string }) {
  return (
    <div className="bg-white/[0.03] p-8 text-center">
      <div className="font-display text-5xl font-black text-white leading-none mb-2">
        {gold ? <span className="text-[#D4A843]">{num}</span> : num}
        {suffix && <span className="text-[#D4A843]">{suffix}</span>}
      </div>
      <div className="text-xs text-white/30 tracking-widest uppercase">{label}</div>
    </div>
  );
}

// ─── Price Card ───────────────────────────────────────────────────────────────
function PriceCard({ tier, price, desc, features, featured, cta, ctaHref }: {
  tier: string; price: string; desc: string;
  features: string[]; featured?: boolean;
  cta: string; ctaHref: string;
}) {
  return (
    <div className={`relative rounded-2xl border p-8 ${
      featured
        ? "border-[#D4A843]/40 bg-gradient-to-b from-[#D4A843]/[0.06] to-transparent"
        : "border-white/[0.07] bg-white/[0.03]"
    }`}>
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4A843] text-black text-[11px] font-bold px-4 py-1 rounded-full font-display whitespace-nowrap">
          Most Popular
        </div>
      )}
      <div className="text-xs text-white/30 tracking-widest uppercase font-medium mb-3">{tier}</div>
      <div className="font-display text-5xl font-black text-white leading-none mb-1">
        <sup className="text-xl text-white/50 align-top mt-2">$</sup>{price}
        <span className="text-sm text-white/30 font-normal ml-1">/ mo</span>
      </div>
      <p className="text-sm text-white/50 mt-4 mb-6 leading-relaxed">{desc}</p>
      <div className="h-px bg-white/[0.06] mb-6" />
      <div className="flex flex-col gap-3 mb-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] flex-shrink-0" />
            {f}
          </div>
        ))}
      </div>
      <Link
        href={ctaHref}
        className={`block text-center py-3 rounded-xl text-sm font-bold font-display transition-all ${
          featured
            ? "bg-[#D4A843] text-black hover:bg-[#E8C050]"
            : "border border-white/[0.12] text-white/60 hover:border-white/25 hover:text-white"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
function Testimonial({ quote, name, role, initials }: {
  quote: string; name: string; role: string; initials: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7">
      <p className="text-sm text-white/50 leading-relaxed italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/20 flex items-center justify-center font-display text-xs font-bold text-[#D4A843]">
          {initials}
        </div>
        <div>
          <div className="text-sm font-bold text-white font-display">{name}</div>
          <div className="text-xs text-white/30 mt-0.5">{role}</div>
        </div>
        <div className="ml-auto text-[#D4A843] text-xs">★★★★★</div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Head>
        <title>XauTrendLab — The Trading Intelligence That Waits</title>
        <meta name="description" content="XauTrendLab monitors Gold and 5 major forex pairs using AI-powered multi-layer validation. Confirmation-based entries. Built for prop firm evaluations." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
          .font-display { font-family: 'Outfit', sans-serif; }
          @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
          .animate-ticker { animation: ticker 28s linear infinite; }
          @keyframes fadein { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
          .animate-fadein { animation: fadein 0.7s ease both; }
          .animate-fadein-2 { animation: fadein 0.7s 0.15s ease both; }
          .animate-fadein-3 { animation: fadein 0.7s 0.3s ease both; }
          @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
          .pulse-dot { animation: pulse-dot 2s infinite; }
        `}</style>
      </Head>

      <SiteLayout>

        {/* TICKER */}
        <TickerBar />

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="animate-fadein inline-flex items-center gap-2 bg-[#D4A843]/10 border border-[#D4A843]/30 px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#D4A843] tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] pulse-dot" />
                AI-POWERED · LIVE 24/5
              </div>

              <h1 className="animate-fadein-2 font-display text-5xl md:text-6xl font-black leading-[1.03] tracking-tight text-white mb-6">
                The trading<br />intelligence<br />that <span className="text-[#D4A843]">waits.</span>
              </h1>

              <p className="animate-fadein-3 text-lg text-white/50 leading-relaxed max-w-lg mb-10">
                XauTrendLab monitors Gold and 5 major forex pairs around the clock — identifying high-probability setups through multi-layer AI validation before signalling a single entry.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <Link href={`${APP_ORIGIN}/register`}
                  className="rounded-xl bg-[#D4A843] px-7 py-3.5 text-center text-sm font-bold text-black hover:bg-[#E8C050] transition-all font-display">
                  Start Free Trial →
                </Link>
                <Link href="#how-it-works"
                  className="rounded-xl border border-white/[0.12] px-7 py-3.5 text-center text-sm font-medium text-white/60 hover:border-white/25 hover:text-white transition-all">
                  See How It Works
                </Link>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <div className="font-display text-3xl font-black text-white">68<span className="text-[#D4A843]">%</span></div>
                  <div className="text-[10px] text-white/25 tracking-widest mt-1">WIN RATE · 90D</div>
                </div>
                <div className="w-px h-10 bg-white/[0.08]" />
                <div>
                  <div className="font-display text-3xl font-black text-white">1:<span className="text-[#D4A843]">2.3</span></div>
                  <div className="text-[10px] text-white/25 tracking-widest mt-1">AVG RISK/REWARD</div>
                </div>
                <div className="w-px h-10 bg-white/[0.08]" />
                <div>
                  <div className="font-display text-3xl font-black text-white">6</div>
                  <div className="text-[10px] text-white/25 tracking-widest mt-1">PAIRS MONITORED</div>
                </div>
              </div>
            </div>

            {/* Right — Live Dashboard Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <span className="font-mono text-[11px] text-white/40 tracking-widest">XTL · XAUUSD · H1</span>
                <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />LIVE
                </div>
              </div>

              {/* Chart */}
              <div className="h-36 px-4 pt-3">
                <HeroChart />
              </div>

              {/* State rows */}
              <div className="px-4 pb-3 flex flex-col gap-1.5 mt-2">
                {[
                  { label: "STATE",         val: "REV_WATCH · ENTRY_READY", cls: "text-[#D4A843]",  bg: "bg-[#D4A843]/[0.06] border-[#D4A843]/20" },
                  { label: "FROZEN ZONE",   val: "2,318.45 — 2,321.80",    cls: "text-blue-400",    bg: "border-white/[0.05]" },
                  { label: "DIRECTION",     val: "BUY",                     cls: "text-emerald-400", bg: "border-white/[0.05]" },
                  { label: "NEWS RISK",     val: "CLEAR · All 6 pairs",     cls: "text-emerald-400", bg: "bg-emerald-500/[0.05] border-emerald-500/15" },
                  { label: "ENTRY TRIGGER", val: "LIVE > 2,336.86",         cls: "text-[#D4A843]",  bg: "border-white/[0.05]" },
                ].map(({ label, val, cls, bg }) => (
                  <div key={label} className={`flex items-center justify-between px-3 py-2 rounded-lg border ${bg}`}>
                    <span className="font-mono text-[10px] text-white/30 tracking-wider">{label}</span>
                    <span className={`font-mono text-[11px] font-semibold ${cls}`}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Metrics footer */}
              <div className="grid grid-cols-3 border-t border-white/[0.06]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { val: "+2.4R",  label: "LAST TRADE",    cls: "text-emerald-400" },
                  { val: "847",    label: "SETUPS / 30D",   cls: "text-white" },
                  { val: "68%",    label: "WIN RATE",       cls: "text-[#D4A843]" },
                ].map(({ val, label, cls }, i) => (
                  <div key={i} className={`py-3 text-center ${i < 2 ? "border-r border-white/[0.06]" : ""}`}>
                    <div className={`font-display text-lg font-black ${cls}`}>{val}</div>
                    <div className="text-[9px] text-white/20 tracking-widest mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED BY */}
        <div className="border-y border-white/[0.06] bg-white/[0.02] py-5">
          <div className="mx-auto max-w-7xl px-6 flex items-center gap-8">
            <span className="text-[11px] text-white/20 tracking-widest uppercase whitespace-nowrap">Compatible with</span>
            <div className="w-px h-5 bg-white/[0.08]" />
            <div className="flex items-center gap-10 flex-1">
              {["FTMO", "E8 Funding", "The Funded Trader", "My Forex Funds", "MetaTrader 5"].map(name => (
                <span key={name} className="font-display text-sm font-bold text-white/20 whitespace-nowrap">{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
          <div className="font-mono text-[11px] text-[#D4A843] tracking-widest uppercase mb-4">How it works</div>
          <h2 className="font-display text-5xl font-black text-white tracking-tight mb-5">Three stages.<br />Zero guessing.</h2>
          <p className="text-lg text-white/40 max-w-xl mb-14 leading-relaxed">
            XTL never predicts where price will go. It waits for the market to prove itself at each stage before advancing to the next.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-white/[0.07] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            <Step num="01" title="Detect" tag="AI · MULTI-TF · 24/5"
              desc="XTL continuously scans Gold and major forex pairs, identifying key structural zones using multi-timeframe AI analysis. When price approaches a high-probability area, monitoring begins automatically." />
            <Step num="02" title="Validate" tag="NEWS · MACRO · STRUCTURE"
              desc="Every potential setup passes through layered validation — market structure, news risk, macro conditions, execution quality, and time-based confirmation. Low-quality setups are automatically rejected." />
            <Step num="03" title="Execute" tag="MT5 · AUTOMATED · AUDITED"
              desc="Only when all conditions align does XTL generate an entry signal. Every trade includes defined risk, a clear reason string, and full audit trail. Connect to MT5 for automated execution." />
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="border-t border-white/[0.06] bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] text-[#D4A843] tracking-widest uppercase mb-4">Platform features</div>
            <h2 className="font-display text-5xl font-black text-white tracking-tight mb-5">Built for serious<br />traders.</h2>
            <p className="text-lg text-white/40 max-w-xl mb-14 leading-relaxed">
              Every feature exists because a real edge demanded it — not because it looks impressive on a feature list.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard icon="⚡" title="Confirmation-based entries"
                desc="XTL never enters on a wick, a forming candle, or a prediction. Every entry requires a fully closed candle confirming the setup — eliminating false signals at the source." />
              <FeatureCard icon="🛡" title="News risk protection"
                desc="Built-in economic calendar awareness automatically blocks entries during high-impact events — FOMC, NFP, CPI, rate decisions, and central bank speeches. Per-symbol precision." />
              <FeatureCard icon="🧠" title="Confluence intelligence"
                desc="Every setup is scored across multiple independent validation layers. Macro bias, news risk, structural quality, and execution conditions are all weighted before approval." />
              <FeatureCard icon="📊" title="6 pairs monitored"
                desc="Full coverage across Gold and the five major USD pairs. Each symbol uses its own optimised parameters, event whitelist, and risk configuration.">
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["XAUUSD","EURUSD","GBPUSD","USDJPY","USDCAD","USDCHF"].map(p => (
                    <span key={p} className="bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded font-mono text-[10px] text-white/40">{p}</span>
                  ))}
                </div>
              </FeatureCard>
              <FeatureCard icon="🔗" title="MT5 native integration"
                desc="Connect your MetaTrader 5 account for fully automated execution. XTL handles order placement, SL/TP, position sizing, and trade management." />
              <FeatureCard icon="📋" title="Full audit trail"
                desc="Every signal includes a human-readable reason string explaining exactly why the trade was approved or blocked. Complete transparency — no black boxes." />
            </div>
          </div>
        </section>

        {/* PROP FUNDING */}
        <section id="prop-funding" className="border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <div className="font-mono text-[11px] text-[#D4A843] tracking-widest uppercase mb-4">Prop funding</div>
                <h2 className="font-display text-5xl font-black text-white tracking-tight mb-6">Built to pass<br />evaluations.</h2>
                <p className="text-base text-white/40 leading-relaxed mb-8">
                  XTL's disciplined confirmation-based strategy is designed for the structured environment of prop firm evaluations. Consistent entries, defined risk, no martingale, no grid.
                </p>
                <ul className="flex flex-col gap-4 mb-10">
                  {[
                    "Automated trading allowed on all major prop firms",
                    "Consistent strategy — same rules every single trade",
                    "News filter protects against daily loss limit breaches",
                    "No prohibited strategies — clean, transparent execution",
                    "Full trade audit trail for prop firm compliance review",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`${APP_ORIGIN}/register`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#D4A843] px-7 py-3.5 text-sm font-bold text-black hover:bg-[#E8C050] transition-all font-display">
                  Start Your Evaluation →
                </Link>
              </div>

              <div>
                <p className="text-[11px] text-white/20 tracking-widest uppercase font-medium mb-5">Compatible prop firms</p>
                <div className="flex flex-col gap-3">
                  {[
                    { code: "FTMO", name: "FTMO",               detail: "Up to $200k funded · 10% profit target · Automated allowed", featured: true },
                    { code: "E8",   name: "E8 Funding",          detail: "Up to $300k funded · 8% profit target · Automated allowed",  featured: false },
                    { code: "TFT",  name: "The Funded Trader",   detail: "Multiple account sizes · Flexible rules · Automated allowed", featured: false },
                    { code: "MFF",  name: "My Forex Funds",      detail: "Rapid program · Instant funding · MT5 support",              featured: false },
                  ].map(p => (
                    <div key={p.code} className={`flex items-center gap-4 rounded-xl border px-5 py-4 ${
                      p.featured ? "border-[#D4A843]/30 bg-[#D4A843]/[0.04]" : "border-white/[0.07] bg-white/[0.02]"
                    }`}>
                      <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center font-display text-[11px] font-black text-white/40">
                        {p.code}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-sm font-bold text-white">{p.name}</div>
                        <div className="text-xs text-white/30 mt-0.5">{p.detail}</div>
                      </div>
                      {p.featured && (
                        <span className="bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded font-mono text-[10px] text-emerald-400 font-medium whitespace-nowrap">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-white/[0.07] overflow-hidden divide-x divide-white/[0.06]">
              <StatBox num="68"  gold suffix="%" label="Win rate · last 90 days" />
              <StatBox num="1:"  suffix="2.3"   label="Average risk/reward ratio" />
              <StatBox num="847" gold            label="Setups analysed · 30 days" />
              <StatBox num="4.2" gold suffix="%" label="Max drawdown · 90 days" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-t border-white/[0.06] bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] text-[#D4A843] tracking-widest uppercase mb-4">Traders using XTL</div>
            <h2 className="font-display text-5xl font-black text-white tracking-tight mb-14">Results speak.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Testimonial
                quote="Passed my FTMO $25k evaluation in 16 trading days. The news filter alone saved me from at least two trades that would have hit my daily loss limit during NFP week."
                name="Rahul K." role="FTMO Funded Trader · India" initials="RK" />
              <Testimonial
                quote="What separates XTL from every other EA I've used is the transparency. Every trade tells you exactly why it entered. You actually understand what the system is doing."
                name="Arjun M." role="E8 Funded · 3 accounts" initials="AM" />
              <Testimonial
                quote="I've been trading XAUUSD manually for 4 years. XTL finds setups I miss and never overtrades. The confirmation requirement eliminates most of the noise that kills retail traders."
                name="Sanjay P." role="Independent trader · 6 years" initials="SP" />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] text-[#D4A843] tracking-widest uppercase mb-4">Access & pricing</div>
            <h2 className="font-display text-5xl font-black text-white tracking-tight mb-5">Start free.<br />Scale when ready.</h2>
            <p className="text-lg text-white/40 max-w-xl mb-14 leading-relaxed">No credit card required. All plans include full platform access — upgrade when you're ready to connect live accounts.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PriceCard tier="Starter" price="0" cta="Start Free Trial" ctaHref={`${APP_ORIGIN}/register`}
                desc="Full platform access in paper trading mode. See every signal, every reason, every trade — risk free."
                features={["All 6 pairs · H1 signals","Confluence Intelligence dashboard","News risk monitoring","Paper trading mode","14-day trial"]} />
              <PriceCard tier="Pro" price="79" cta="Get Pro Access" ctaHref={`${APP_ORIGIN}/register`} featured
                desc="Full automation with one live MT5 account. Built for prop firm evaluations and funded accounts."
                features={["Everything in Starter","1 live MT5 account","Automated execution","Position management","Full trade audit trail","Priority support"]} />
              <PriceCard tier="Elite" price="149" cta="Get Elite Access" ctaHref={`${APP_ORIGIN}/register`}
                desc="Multiple funded accounts, advanced analytics, and early access to new features and pairs."
                features={["Everything in Pro","Up to 5 MT5 accounts","Advanced performance analytics","Early access · new features","Discord community access","Dedicated onboarding"]} />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/[0.06] bg-white/[0.02] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="font-mono text-[11px] text-[#D4A843] tracking-widest uppercase mb-5">Ready to start</div>
            <h2 className="font-display text-5xl font-black text-white tracking-tight mb-6">Stop predicting.<br />Start confirming.</h2>
            <p className="text-lg text-white/40 leading-relaxed mb-10">
              Join traders who've replaced guesswork with a disciplined, confirmation-based system — built for prop firm evaluations and funded account performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`${APP_ORIGIN}/register`}
                className="rounded-xl bg-[#D4A843] px-8 py-4 text-sm font-bold text-black hover:bg-[#E8C050] transition-all font-display">
                Start Free — No Card Required →
              </Link>
              <Link href={`${APP_ORIGIN}`}
                className="rounded-xl border border-white/[0.12] px-8 py-4 text-sm font-medium text-white/50 hover:text-white hover:border-white/25 transition-all">
                View Live Dashboard
              </Link>
            </div>
          </div>
        </section>

      </SiteLayout>
    </>
  );
}
