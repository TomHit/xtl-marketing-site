import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

const NavLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <Link
    href={href}
    className="text-sm text-white/70 hover:text-white transition"
  >
    {label}
  </Link>
);

export default function SiteLayout({ title, children }: Props) {
  const pageTitle = title || "XauTrendLab";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="XauTrendLab: AI-powered intraday trend intelligence, opportunities, and trade management."
        />
      </Head>

      <div className="min-h-screen bg-[#070A12] text-white">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A12]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-xl bg-white/10 grid place-items-center">
                <span className="text-gold2 font-semibold">X</span>
              </span>
              <span className="font-semibold tracking-tight">XauTrendLab</span>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <NavLink href="/features" label="Features" />
              <NavLink href="/pricing" label="Pricing" />
              <NavLink href="/faq" label="FAQ" />
              <NavLink href="/about" label="About" />
              <NavLink href="/contact" label="Contact" />
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://app.xautrendlab.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-95"
              >
                Open App
              </a>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-white/60">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} XauTrendLab. All rights reserved.</div>
              <div className="flex gap-4">
                <a className="hover:text-white" href="/privacy">Privacy</a>
                <a className="hover:text-white" href="/terms">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
