import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recipe Finder",
  description: "Search and save recipes",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">

        {/* NAVBAR */}
        <nav
          style={{
            padding: "12px 20px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: "15px",
            fontFamily: "Arial",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </Link>

          <Link
            href="/favorites"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Favorites
          </Link>
        </nav>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}