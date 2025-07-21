import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Regions.css";

function RegionDetails() {
  const { state } = useLocation();
  const { name, specialties, type, image } = state || {};

  if (!state) return <div>Invalid region data.</div>;

  return (
    <div className="region-detail-page">
      <h1>{name} Wines</h1>
      <img src={image} alt={name} className="flag-img-large" />
      <p><strong>Wine Type:</strong> {type}</p>
      <p><strong>Specialties:</strong> {specialties.join(", ")}</p>
    </div>
  );
}

export default RegionDetails;
