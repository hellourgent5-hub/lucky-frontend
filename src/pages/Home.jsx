import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://lucky-backend-rlr0.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Lucky Marketplace</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
