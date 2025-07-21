import React, { useState } from "react";
import "../styles/ReviewSection.css";

export default function ReviewSection({ wineName }) {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");

  const submitReview = () => {
    if (comment.trim() !== "") {
      setReviews([...reviews, comment]);
      setComment("");
    }
  };

  return (
    <div className="review-section">
      <h3>Reviews for {wineName}</h3>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a review..."
      ></textarea>
      <button onClick={submitReview}>Submit</button>
      <ul>
        {reviews.map((rev, index) => (
          <li key={index}>{rev}</li>
        ))}
      </ul>
    </div>
  );
}
