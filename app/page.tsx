export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">XauTrendLab</h1>
        <p className="mt-4 text-slate-300">
          AI-powered intraday trend detection
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="https://app.xautrendlab.com"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400"
          >
            Open App
          </a>

          <a
            href="https://app.xautrendlab.com/login"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800"
          >
            Login
          </a>
        </div>
      </div>
    </main>
  );
}
