import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import API from '../api/api'

export default function Product(){
  const { id } = useParams()
  const [p,setP] = useState(null)
  useEffect(()=>{if(id) API.get('/products/'+id).then(r=>setP(r.data)).catch(console.error)},[id])
  if(!p) return <div>Loading...</div>
  return (
    <div className="p-6">
      <h1 className="text-xl">{p.title}</h1>
      <p>{p.description}</p>
      <div>Price: ₹{p.price}</div>
    </div>
  )
}
