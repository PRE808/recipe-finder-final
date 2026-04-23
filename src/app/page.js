"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load recipes (simulate API)
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setRecipes([
        { id: "1", title: "Spaghetti Carbonara", image: "https://via.placeholder.com/150" },
        { id: "2", title: "Chicken Salad", image: "https://via.placeholder.com/150" },
        { id: "3", title: "Pancakes", image: "https://via.placeholder.com/150" },
      ]);

      setLoading(false);
    }, 500);
  }, []);

  // Safe localStorage load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(saved);
    }
  }, []);

  const addToFavorites = (recipe) => {
    const exists = favorites.some((f) => f.id === recipe.id);

    if (!exists) {
      const updated = [...favorites, recipe];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ padding: "20px" }}>
      <h1>Recipe Finder 🍳</h1>

      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />

      {/* LOADING STATE */}
      {loading && <p>Loading recipes...</p>}

      {/* EMPTY STATE */}
      {!loading && filtered.length === 0 && (
        <p>No recipes found. Try another search.</p>
      )}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filtered.map((recipe) => (
          <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
            <div style={{ border: "1px solid #ddd", padding: "10px" }}>

              {/* Image optimization */}
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={150}
                height={150}
              />

              <p>{recipe.title}</p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorites(recipe);
                }}
              >
                ❤️ Save
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}