import React, { useState } from 'react'

const products = [
  { id:1,name: "Laptop", brand: "Dell", qty: 1 },
  { id:2,name: "Laptop", brand: "Hp", qty: 1 },
  { id:3,name: "Laptop", brand: "Acer", qty: 1 },
]

const Key = () => {
  const[Items,setItem] =useState(products)

  const changeQty =(id)=>{
    const newItem = Items.map((item)=>
    item.id === id ? {...item,qty: item.qty+1}:item
    )
    setItem(newItem)
  }

  const changeQty2 =(id)=>{
    const newItem = Items.map((item)=>
    item.id === id ? {...item,qty: item.qty-1}:item
    )
    setItem(newItem)
  }
  return (
    <div>
      {Items.map((product) => (
        <div className='bg-success text-white m-2' key={product.id}>
          <h1>{product.name}</h1>
          <h3>Brand:{product.brand}</h3>
          <h4>Qty: {product.qty}</h4>
          <button onClick={()=>changeQty(product.id)} type='button'>+</button>
          <button onClick={()=>changeQty2(product.id)} type='button'>-</button>

        </div>
      ))}



    </div>
  )
}

export default Key
