// pages/Special.js

const specialWines = [
  {
    name: "Château Margaux",
    image: "https://images.pexels.com/photos/724091/pexels-photo-724091.jpeg",
    rating: 4.9,
    price: "₹25,000",
    description: "Renowned Bordeaux blend with deep elegance and complexity."
  },
  {
    name: "Domaine de la Romanée-Conti",
    image: "https://images.pexels.com/photos/13622705/pexels-photo-13622705.jpeg",
    rating: 5.0,
    price: "₹1,50,000",
    description: "One of the rarest and finest Pinot Noirs from Burgundy."
  },
  {
    name: "Penfolds Grange",
    image: "https://images.pexels.com/photos/33097112/pexels-photo-33097112.jpeg",
    rating: 4.8,
    price: "₹18,000",
    description: "Australian excellence with bold flavors and long aging."
  },
  {
    name: "Vega Sicilia Unico",
    image: "https://images.pexels.com/photos/33040105/pexels-photo-33040105.jpeg",
    rating: 4.7,
    price: "₹30,000",
    description: "Spain’s legendary wine with rich heritage and complexity."
  }
];

export default function Special() {
  return (
    <div className="special-container">
      <h1 className="special-title">🌟 Authentic Limited Edition Wines</h1>
      <div className="special-grid">
        {specialWines.map((wine, index) => (
          <div className="special-card" key={index}>
            <img src={wine.image} alt={wine.name} />
            <div className="special-card-content">
              <h3>{wine.name}</h3>
              <p>{wine.description}</p>
              <p><strong>Rating:</strong> ⭐ {wine.rating}</p>
              <p><strong>Price:</strong> {wine.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
