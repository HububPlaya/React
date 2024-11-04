import { useState } from 'react'
import Goods from './components/Goods'

const App = () => {
  const productsArray = [
    {
      id: 1,
      name: "Laptop",
      description: "A powerful laptop for professionals.",
      property: "$999.99"
  },
  {
      id: 2,
      name: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      property: "$199.99"
  },
  {
      id: 3,
      name: "Smartphone",
      description: "Latest model with advanced features.",
      property: "$799.99"
  }
  ]

  return (
    <>
      <Goods
        products={productsArray}
      />
    </>
  )
}

export default App
