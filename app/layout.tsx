import "./globals.css";

export const metadata = {
  title: "XauTrendLab",
  description: "AI-powered intraday trend detection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
