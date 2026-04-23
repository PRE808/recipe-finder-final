"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-gray-100 border-b border-gray-300 mb-5 flex gap-4 font-sans">
      <Link
        href="/"
        className={`transition ${
          pathname === "/"
            ? "text-black font-bold"
            : "text-gray-600 hover:text-black"
        }`}
      >
        Home
      </Link>

      <Link
        href="/favorites"
        className={`transition ${
          pathname === "/favorites"
            ? "text-black font-bold"
            : "text-gray-600 hover:text-black"
        }`}
      >
        Favorites
      </Link>
    </nav>
  );
}