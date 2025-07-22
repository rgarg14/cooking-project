import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wineCart")) || [];
    setCartItems(stored);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("wineCart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item, index) => (
            <div className="cart-card" key={`${item.id}-${index}`}>
              <img src={item.img} alt={item.name} />
              <div className="cart-details">
                <h2>{item.name}</h2>
                <ReactStars
                  count={5}
                  value={item.rating}
                  edit={false}
                  size={20}
                  activeColor="#ffd700"
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
