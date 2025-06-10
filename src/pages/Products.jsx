import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const foodSamples = [
    "pizza", "steak", "cheese", "pasta", 
    "salad", "burger", "chicken", "sushi"
  ];

  useEffect(() => {
    const fetchAll = async () => {
      const results = [];

      for (let food of foodSamples) {
        try {
          const res = await axios.get(
            `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`
          );
          if (res.data.productMatches?.length > 0) {
            results.push({
              food,
              ...res.data.productMatches[0],
              pairingText: res.data.pairingText,
            });
          }
        } catch (err) {
          console.error(`Error fetching for ${food}:`, err);
          setError("Failed to fetch wine pairings.");
        }
      }

      setProducts(results);
    };

    fetchAll();
  }, []);

  return (
    <div className="products-container">
      <h2>🍷 Explore Wine Pairings</h2>
      <p className="subtext">Discover wines best suited for your favorite foods</p>
      {error && <p className="error">{error}</p>}

      <div className="products-grid">
        {products.map((item, idx) => (
          <div key={idx} className="product-card">
            <img src={item.imageUrl} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="food-label">Pairs well with <b>{item.food}</b></p>
              <p className="desc">{item.description.slice(0, 100)}...</p>
              <p className="price">{item.price}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                View Product →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
