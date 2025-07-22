import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const FALLBACK_IMAGE = "https://images.pexels.com/photos/6292065/pexels-photo-6292065.jpeg"; 


export default function Products() {
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState("");

  useEffect(() => {
    async function fetchWines() {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/food/products/search?query=wine&number=8&apiKey=716845be5645474e9401235107b0f5c4"
        );
        const data = await res.json();
        const mapped = data.products.map((item) => ({
          id: item.id,
          name: item.title,
          rating: +(3 + Math.random() * 2).toFixed(1),
          img: item.image || FALLBACK_IMAGE,
        }));
        setProducts(mapped);
      } catch (err) {
        console.error("Failed to fetch wines:", err);
      }
    }
    fetchWines();
  }, []);

  const addToCart = (wine) => {
    const cart = JSON.parse(localStorage.getItem("wineCart")) || [];
    cart.push(wine);
    localStorage.setItem("wineCart", JSON.stringify(cart));
    setPopup(`${wine.name} added to cart!`);
    setTimeout(() => setPopup(""), 2000);
  };

  return (
    <div className="products-container">
      {popup && <div className="cart-popup">{popup}</div>}
      <h1 className="products-heading">Our Wines</h1>

      <div className="product-grid">
        {products.map((wine) => (
          <div key={wine.id} className="product-card">
            <img
              src={wine.img}
              alt={wine.name}
              onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            />
            <div className="product-card-content">
              <h2 className="product-name">{wine.name}</h2>
              <ReactStars
                count={5}
                value={wine.rating}
                edit={false}
                size={20}
                activeColor="#ffd700"
              />
              <div className="card-buttons">
                <button className="buy-btn" onClick={() => addToCart(wine)}>
                  Buy Now
                </button>
                <Link to={`/product/${wine.id}`}>
                  <button className="details-btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
