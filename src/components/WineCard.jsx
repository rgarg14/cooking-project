import React from "react";
import "./WineCard.css";

function WineCard({ wine, description, pairings }) {
  return (
    <div className="wine-card">
      <h3>{wine}</h3>
      <p>{description}</p>
      {pairings && pairings.length > 0 && (
        <ul>
          {pairings.map((food, index) => (
            <li key={index}>🍽️ {food}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WineCard;
