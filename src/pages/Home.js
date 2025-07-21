// Home.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [recommendedWines, setRecommendedWines] = useState([]);

  const searchPairing = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/food/wine/pairing?food=${query}&apiKey=716845be5645474e9401235107b0f5c4`
      );
      const data = await res.json();

      if (data.pairingText) {
        setResult(data.pairingText);
        setRecommendedWines(data.pairedWines || []);
      } else {
        setResult("No pairing found.");
        setRecommendedWines([]);
      }
    } catch (err) {
      setResult("Error fetching pairing. Please try again.");
      setRecommendedWines([]);
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">Welcome to WineVerse</div>
      </div>

      <p className="intro-text">
        Discover perfect wine and food pairings. Explore curated wines, regions, and expert reviews.
      </p>

      <div className="pairing-search">
        <input
          type="text"
          placeholder="Type a food (e.g. steak, cheese)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchPairing}>Find Pairing</button>
        {result && <p className="pairing-result">{result}</p>}
        {recommendedWines.length > 0 && (
          <div className="wine-list">
            <strong>Recommended Wines:</strong>
            <ul>
              {recommendedWines.map((wine, idx) => (
                <li key={idx}>{wine}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="cta-button">
        <Link to="/signup">
          <button>Join WineVerse</button>
        </Link>
      </div>

      <div className="featured-wines">
  <div className="wine-card">
    <img
      src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400
"
      alt="Red Wine"
    />
    <h3>Elegant Red</h3>
    <p>A bold and smooth red wine, perfect with grilled meats.</p>
  </div>
  <div className="wine-card">
    <img
      src="https://images.pexels.com/photos/1407855/pexels-photo-1407855.jpeg?auto=compress&cs=tinysrgb&w=400
"
      alt="White Wine"
    />
    <h3>Crisp White</h3>
    <p>A fresh white wine with citrusy notes, ideal for seafood.</p>
  </div>
  <div className="wine-card">
    <img
      src="https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg?auto=compress&cs=tinysrgb&w=400
"
      alt="Rosé Wine"
    />
    <h3>Summer Rosé</h3>
    <p>Light and refreshing rosé, great for sunny afternoons.</p>
  </div>
</div>
    </div>
  );
}
