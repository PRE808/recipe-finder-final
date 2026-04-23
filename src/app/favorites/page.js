"use client";

import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites safely
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  // Remove favorite
  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Favorites ❤️</h1>

      {/* EMPTY STATE */}
      {favorites.length === 0 ? (
        <p>No favorites yet. Go add some recipes!</p>
      ) : (
        favorites.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>{item.title}</p>

            <button onClick={() => removeFavorite(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </main>
  );
}