import React from "react";
import "../styles/Modal.css";

export default function BuyNowModal({ isOpen, onClose, wine }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Buy {wine.name}</h2>
        <p>This is a demo. Checkout functionality coming soon!</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
