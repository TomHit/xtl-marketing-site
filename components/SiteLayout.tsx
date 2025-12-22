import SiteHeader from "./SiteHeader";

export default function SiteLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-white">
      <SiteHeader />

      {(title || subtitle) && (
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-10">
          {title && <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>}
          {subtitle && <p className="mt-3 max-w-3xl text-white/70">{subtitle}</p>}
        </section>
      )}

      <main>{children}</main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} XauTrendLab (XTL)</div>
            <div className="text-white/55">
              Risk Disclaimer: Trading involves risk. Past performance is not indicative of future results.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
