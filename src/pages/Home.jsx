import React, { useState } from "react";
import WineCard from "../components/WineCard";
import "./Home.css";
import axios from "axios";

function Home() {
  const [food, setFood] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!food.trim()) {
      setError("Please enter a food item.");
      return;
    }

    try {
      const res = await axios.get(
        `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${
          import.meta.env.VITE_SPOONACULAR_KEY
        }`
      );
      setResult(res.data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="home-container">
  <h2>🍷 Wine & Food Pairing</h2>
  <p>Type a food to discover the best wine pairings!</p>

  {/* <img
    src="/images/roberta-sorge-IywM7AQTZcM-unsplash.jpg"
    alt="Wine Background"
    className="blurred-wine-image"
  /> */}

  <form onSubmit={handleSearch} className="search-form">
    <input
      type="text"
      value={food}
      onChange={(e) => setFood(e.target.value)}
      placeholder="e.g. pizza, cheese, steak"
    />
    <button type="submit">Find Wine</button>
  </form>

  {error && <p className="error">{error}</p>}

  {result && (
    <WineCard
      wine={result.pairedWines?.[0] || "No wine found"}
      description={result.pairingText}
      pairings={result.pairedWines}
    />
  )}
</div>

  );
}

export default Home;
