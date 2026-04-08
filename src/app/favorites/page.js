"use client";
import Navbar from "../Navbar"; // <-- use ../ because Navbar is in parent folder

export default function Favorites() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Navbar />

      <h1>Favorites ❤️</h1>
      <p>Your saved recipes will appear here.</p>
    </main>
  );
}