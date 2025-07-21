// ProductDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/food/products/${id}?apiKey=716845be5645474e9401235107b0f5c4`
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product details", err);
      }
    };
    fetchDetail();
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div style={{ padding: "32px", maxWidth: "800px", margin: "auto" }}>
      <h1>{product.title}</h1>
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", borderRadius: "12px", margin: "20px 0" }}
        />
      )}
      <p><strong>Price:</strong> ${product.price || "Not available"}</p>
      <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
      <p><strong>Description:</strong></p>
      <p>{product.description || "No description available."}</p>
    </div>
  );
}

