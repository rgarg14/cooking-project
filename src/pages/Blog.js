import { useState } from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Beginner’s Guide to Red Wine",
      description: "Learn the basics about red wines, popular types, and perfect food pairings.",
      date: "July 2, 2025",
      content: "Red wine is made from dark-colored grape varieties. The color of red wine can range from intense violet to brick red. Common types include Merlot, Cabernet Sauvignon, and Pinot Noir.",
      img: "https://i.pinimg.com/1200x/8a/ef/0d/8aef0d0a8b55b729bc11be40794a582c.jpg",
    },
    {
      id: 2,
      title: "5 Wines for Romantic Dinners",
      description: "Elevate your date night with these top wine picks.",
      date: "July 5, 2025",
      content: "Romantic dinners call for smooth, rich wines. Try Pinot Noir, Chianti, or a bold Cabernet Franc to impress your partner.",
      img: "https://w0.peakpx.com/wallpaper/412/1006/HD-wallpaper-a-romantic-night-awaits-dinner-beach-romantic-food-wine-candle-light-night.jpg",
    },
    {
      id: 3,
      title: "Perfect Wine and Cheese Pairings",
      description: "Master the art of pairing cheese with the right wine.",
      date: "July 8, 2025",
      content: "Brie pairs well with Champagne. Aged cheddar loves Cabernet Sauvignon. Blue cheese is divine with Port. Explore more pairings inside.",
      img: "https://images.pexels.com/photos/248413/pexels-photo-248413.jpeg",
    },
    {
      id: 4,
      title: "Why Decanting Wine Matters",
      description: "The science and magic behind letting your wine breathe.",
      date: "July 10, 2025",
      content: "Decanting helps oxygenate the wine and removes sediment. Especially useful for bold reds like Syrah, Bordeaux, or Barolo.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWmdmrXM48viU7lZeSbc67E34x9pY9Kai1A&s",
    },
  ];

  const [activePost, setActivePost] = useState(null);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Wine Blog 🍇</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={`blog-card ${activePost === post.id ? 'expanded' : ''}`}
            onClick={() => setActivePost(activePost === post.id ? null : post.id)}
          >
            <img src={post.img} alt={post.title} className="blog-img" />
            <div className="blog-card-content">
              <p className="blog-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              {activePost === post.id && (
                <div className="blog-full-content">
                  <p>{post.content}</p>
                </div>
              )}
              <span className="read-more-link">
                {activePost === post.id ? "Show Less ▲" : "Read More ▼"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
