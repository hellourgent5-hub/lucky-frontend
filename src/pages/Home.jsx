import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Lucky Marketplace 🛍️</h1>
      <p className="mb-6">Shop groceries, food, parcels, pharmacy & more!</p>
      <Link
        to="/services"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Explore Services
      </Link>
    </div>
  );
}
