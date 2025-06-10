// src/components/WineCard.jsx
import React, { useState } from "react";
import "./WineCard.css";

function WineCard({ wine, description, pairings }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [review, setReview] = useState("");
  const [submittedReview, setSubmittedReview] = useState("");

  const handleRating = (rate) => setRating(rate);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedReview(review);
    setReview("");
  };

  return (
    <div className="wine-card">
      <h3>🍽️ Best Pairing: {wine}</h3>
      <p>{description}</p>

      {pairings?.length > 0 && (
        <p><strong>Other Suggestions:</strong> {pairings.join(", ")}</p>
      )}

      {/* 🖼️ Wine Image + Price */}
      {description && description.includes("Pinot Noir") && (
        <div className="wine-product">
          <img
            src="https://img.spoonacular.com/products/428640-312x231.jpg"
            alt="Wine"
          />
          <div>
            <h4>Skater Girl Limited Edition Pinot Noir</h4>
            <p>💰 Price: $29.99</p>
            <a
              href="https://www.amazon.com/2013-Skater-Girl-Limited-Pinot/dp/B01EJZ30T4?tag=spoonacular-20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      )}

      {/* ⭐ Star Rating */}
      <div className="star-rating">
        <p>Rate this wine pairing:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= (hovered || rating) ? "filled" : ""}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
          >
            ★
          </span>
        ))}
      </div>

      {/* 📝 Review Box */}
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>

      {submittedReview && (
        <div className="submitted-review">
          <p><strong>Your Review:</strong></p>
          <p>{submittedReview}</p>
        </div>
      )}
    </div>
  );
}

export default WineCard;
