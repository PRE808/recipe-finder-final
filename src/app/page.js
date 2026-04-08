"use client"; // required for useState
import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [query, setQuery] = useState("");

  // Dummy recipe data
  const dummyRecipes = [
    { id: 1, title: "Spaghetti Carbonara", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Chicken Salad", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Pancakes", image: "https://via.placeholder.com/150" },
  ];

  // Filter recipes based on search query
  const filteredRecipes = dummyRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Navbar />

      <h1>Recipe Finder 🍳</h1>
      <p>Search for recipes:</p>

      <input
        type="text"
        placeholder="Type recipe name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      />

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img src={recipe.image} alt={recipe.title} style={{ width: "100%", borderRadius: "4px" }} />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && <p>No recipes found.</p>}
    </main>
  );
}
