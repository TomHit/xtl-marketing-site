import React, { useState } from "react";

const NAV = [
  {
    label: "Product",
    items: [
      { label: "Overview", href: "/#product" },
      { label: "Signals", href: "/#signals" },
      { label: "MyBots", href: "/#mybots" },
      { label: "Automation", href: "/#automation" },
    ],
  },
  { label: "Pricing", href: "/#pricing" },
  { label: "Docs", href: "https://app.xautrendlab.com/docs" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10" />
          <div className="text-sm font-semibold tracking-tight text-white">XauTrendLab</div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          <div className="relative">
            <button
              onClick={() => setProdOpen((v) => !v)}
              className="text-sm text-white/80 hover:text-white"
            >
              Product ?
            </button>
            {prodOpen && (
              <div className="absolute right-0 mt-3 w-52 rounded-xl border border-white/10 bg-black/90 p-2 shadow-xl">
                {NAV[0].items!.map((x) => (
                  <a
                    key={x.href}
                    href={x.href}
                    className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    {x.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a className="text-sm text-white/80 hover:text-white" href={NAV[1].href as string}>
            Pricing
          </a>
          <a className="text-sm text-white/80 hover:text-white" href={NAV[2].href as string}>
            Docs
          </a>

          <a
            href="https://app.xautrendlab.com/login"
            className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/90 hover:border-white/20 hover:bg-white/5"
          >
            Login
          </a>

          <a
            href="https://app.xautrendlab.com"
            className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            Open App
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/90 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-2">
            <div className="text-xs uppercase tracking-wider text-white/50">Product</div>
            <div className="grid grid-cols-2 gap-2">
              {NAV[0].items!.map((x) => (
                <a
                  key={x.href}
                  href={x.href}
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/85 hover:bg-white/5"
                >
                  {x.label}
                </a>
              ))}
            </div>

            <a className="block rounded-lg border border-white/10 px-3 py-2 text-sm text-white/85" href={NAV[1].href as string}>
              Pricing
            </a>
            <a className="block rounded-lg border border-white/10 px-3 py-2 text-sm text-white/85" href={NAV[2].href as string}>
              Docs
            </a>

            <div className="flex gap-2 pt-2">
              <a
                href="https://app.xautrendlab.com/login"
                className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-sm text-white/90"
              >
                Login
              </a>
              <a
                href="https://app.xautrendlab.com"
                className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black"
              >
                Open App
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
