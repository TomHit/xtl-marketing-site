import SiteLayout from "../components/SiteLayout";

export default function PricingPage() {
  return (
    <SiteLayout title="XauTrendLab — Pricing">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs text-gold2/90">PRICING</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple pricing (coming soon)
          </h1>
          <p className="mt-4 text-sm text-white/70 md:text-base">
            We’re finalizing plans. For now, use the web app and we’ll enable billing when ready.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
