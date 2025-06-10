import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    title: "Top 5 Wine Pairings for Pizza Lovers",
    date: "June 10, 2025",
    summary:
      "Discover the perfect wines to pair with your favorite pizzas, from margherita to pepperoni. Hint: red wines dominate!",
    image: "https://images.unsplash.com/photo-1617191511159-e24f6c42b9a4",
  },
  {
    title: "The Science Behind Wine & Cheese Pairings",
    date: "May 28, 2025",
    summary:
      "Ever wondered why wine and cheese go so well together? Dive into flavor chemistry and learn what works and why.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
  },
  {
    title: "Beginner’s Guide to Red Wines",
    date: "May 15, 2025",
    summary:
      "New to wine? This guide walks you through types of red wines, flavor notes, and what to pair them with.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
];

function Blog() {
  return (
    <div className="blog-container">
      <h2>🍇 Wine & Food Blog</h2>
      <p className="subtext">Insights, guides, and tips from the wine world</p>

      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-summary">{post.summary}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
