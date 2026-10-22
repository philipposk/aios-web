import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import PageAssistantWidget from "@/components/PageAssistantWidget";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aios.6x7.gr"),
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "AI OS",
    description: "Many AI agents, one team. Plans, writes, ships code, with you in the loop.",
    url: "https://aios.6x7.gr",
    siteName: "AI OS",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI OS" }],
  },
  twitter: { card: "summary_large_image", title: "AI OS", description: "Many AI agents, one team. Plans, writes, ships code, with you in the loop.", images: ["/og-image.png"] },
  icons: { icon: "/icon.svg", apple: "/icon-192.png" },
  title: "AI OS — Multi-agent workspace",
  description:
    "Many AI agents, one team. Plans, writes, ships code — with you in the loop.",
  applicationName: "AI OS",
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <nav
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          className="px-6 py-4 flex items-center justify-between"
        >
          <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1.1rem" }}>
            AI OS
          </span>
          <a
            href="https://6x7.gr"
            style={{ color: "var(--fg-muted)", fontSize: "0.8rem" }}
          >
            by 6x7.gr
          </a>
        </nav>
        <main className="flex-1">{children}</main>
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "var(--fg-muted)",
            fontSize: "0.75rem",
            textAlign: "center",
            padding: "1.5rem",
          }}
        >
          AI OS · part of{" "}
          <a href="https://6x7.gr" style={{ color: "var(--accent)" }}>
            6x7.gr
          </a>
        </footer>
        <PageAssistantWidget />
      </body>
    </html>
  );
}
