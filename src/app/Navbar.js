"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "10px 20px",
        background: "#f8f8f8",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Link href="/" style={{ marginRight: "15px", textDecoration: "none", color: "#333" }}>
        Home
      </Link>
      <Link href="/favorites" style={{ textDecoration: "none", color: "#333" }}>
        Favorites
      </Link>
    </nav>
  );
}