import Link from "next/link";

const itemBtn = "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0e]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4A843] text-black font-black text-sm">X</div>
          <span className="font-black text-white text-sm" style={{letterSpacing:"0.1em"}}>TRENDLAB</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <Link className={itemBtn} href="/product">Product</Link>
          <Link className={itemBtn} href="/features">Features</Link>
          <Link className={itemBtn} href="/pricing">Pricing</Link>
          <a className={itemBtn} href="#" onClick={(e) => e.preventDefault()}>Docs</a>
          <a href="/login?next=preview" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90">Live Preview</a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a href="/product" className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90">Live Preview</a>
        </div>
      </div>
    </header>
  );
}
