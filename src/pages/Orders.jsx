import { useEffect, useState } from "react";
import { getProducts, createOrder } from "../api/api";
import { toast } from "react-toastify";

export default function Orders() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch(() => toast.error("Failed to load products"));
  }, []);

  const handleOrder = async (product) => {
    try {
      await createOrder({ productId: product._id, quantity: 1 });
      toast.success("Order placed successfully ✅");
    } catch {
      toast.error("Order failed ❌");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Products</h1>
      {products.map((p) => (
        <div key={p._id} className="flex items-center justify-between border p-3 rounded mb-2">
          <div>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600">₹{p.price}</p>
          </div>
          <button
            onClick={() => handleOrder(p)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Order
          </button>
        </div>
      ))}
    </div>
  );
}
