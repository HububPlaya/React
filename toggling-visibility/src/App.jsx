import { useState } from 'react'
import Form from './form'
import products from './data/products'
import carList from './data/cars'

import './App.css'
import DataFetcher from './DataFetcher'
import ShoppingCart from './ShoppingCart'
import CarList from './CarList'
import cars from './data/cars'

const App = () => {

  return (
    <>
      <Form/>
      <DataFetcher/>
      <ShoppingCart products={products}/>
      <CarList vehicles={carList}/>
    </>
  )
}

export default App
