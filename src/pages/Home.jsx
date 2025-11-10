import React, {useEffect, useState} from 'react'
import API from '../api/api'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const [products,setProducts] = useState([])
  useEffect(()=>{API.get('/products').then(r=>setProducts(r.data)).catch(console.error)},[])
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">lucky - Marketplace</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(p=> <ProductCard key={p._id} p={p}/>) }
      </div>
    </div>
  )
}
