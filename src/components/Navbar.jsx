import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductCard({p}){
  return (
    <div className="border p-4 rounded">
      <img src={p.images?.[0] || 'https://via.placeholder.com/300'} alt="" className="h-40 w-full object-cover"/>
      <h3 className="font-semibold">{p.title}</h3>
      <div className="flex justify-between items-center">
        <div>₹{p.price}</div>
        <Link to={`/product/${p._id}`} className="text-sm underline">View</Link>
      </div>
    </div>
  )
}
