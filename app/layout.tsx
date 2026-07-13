import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://runwithbee.com"),
  title: "Run With Bee — Run Club",
  description:
    "Community runs in Bengaluru. All paces welcome. Join the crew for creative routes and an encouraging community.",
  openGraph: {
    title: "Run With Bee — Run Club",
    description:
      "Community runs in Bengaluru. All paces welcome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen bg-canvas flex flex-col`}
      >
        <Nav />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
