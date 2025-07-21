import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Regions.css";

const countries = [
  {
    name: "France",
    image:
      "https://flagcdn.com/w320/fr.png",
    specialties: ["Bordeaux", "Champagne", "Burgundy"],
    type: "Red"
  },
  {
    name: "Italy",
    image:
      "https://flagcdn.com/w320/it.png",
    specialties: ["Chianti", "Barolo", "Prosecco"],
    type: "Red"
  },
  {
    name: "Spain",
    image:
      "https://flagcdn.com/w320/es.png",
    specialties: ["Rioja", "Cava", "Sherry"],
    type: "White"
  },
  {
    name: "USA",
    image:
      "https://flagcdn.com/w320/us.png",
    specialties: ["Napa Valley", "Zinfandel", "Cabernet Sauvignon"],
    type: "Red"
  },
  {
    name: "Australia",
    image:
      "https://flagcdn.com/w320/au.png",
    specialties: ["Shiraz", "Chardonnay", "Cabernet"],
    type: "White"
  },
  {
    name: "Germany",
    image:
      "https://flagcdn.com/w320/de.png",
    specialties: ["Riesling", "Spätburgunder"],
    type: "White"
  },
];

function Regions() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = (country) => {
    navigate(`/regions/${country.name.toLowerCase()}`, {
      state: { ...country },
    });
  };

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="regions-page">
      <h1 className="regions-title">Explore Wine by Region</h1>

      <input
        type="text"
        placeholder="Search by country or wine type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="regions-grid">
        {filteredCountries.map((country, index) => (
          <div
            key={index}
            className="region-card"
            onClick={() => handleClick(country)}
          >
            <img src={country.image} alt={country.name} className="flag-img" />
            <h2>{country.name}</h2>
            <p>
              <strong>Specialties:</strong> {country.specialties.join(", ")}
            </p>
            <p>
              <strong>Wine Type:</strong> {country.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Regions;

