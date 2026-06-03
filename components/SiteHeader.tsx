import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const APP_ORIGIN = "https://app.xautrendlab.com";



export default function SiteHeader() {
  

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const itemBtn =
    "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5";
  const linkCls =
    "block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5";
  const panel =
    "absolute left-0 top-full mt-2 w-64 rounded-2xl border border-white/10 bg-[#0b0b0e]/95 p-2 shadow-xl backdrop-blur";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0e]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" ref={ref}>
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4A843] text-black font-black text-sm" style={{fontFamily:"'Outfit',sans-serif"}}>
              X
            </div>
            <span className="font-black text-white tracking-widest text-sm" style={{fontFamily:"'Outfit',sans-serif", letterSpacing:"0.1em"}}>
              TRENDLAB
            </span>
          </div>    
            
          
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link className={itemBtn} href="/product">
            Product
          </Link>

          <Link className={itemBtn} href="/features">
            Features
          </Link>


          <Link className={itemBtn} href="/pricing">
            Pricing
          </Link>

          {/* Docs can be internal later; for now keep external placeholder */}
          <a className={itemBtn} href="#" onClick={(e) => e.preventDefault()}>
            Docs
          </a>

          <a
            
            href="/login?next=preview"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90"
          >
            Live Preview
          </a>
        </nav>

        {/* Mobile (simple) */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            href="/product"
            target="_blank"
            rel="noreferrer"
          >
            Live Preview
          </a>
        </div>
      </div>
    </header>
  );
}
