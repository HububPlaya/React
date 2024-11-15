import { useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./home/Home'))
const About = lazy(() => import('./about/About'))
const Product = lazy(() => import('./product/Product')) 
import './App.css'
import Bar from './Bar/Bar'
import Loader from './loader/Loader'
import ContactPage from './Contact/ContactPage'

const App = () => {

  return (
    <>
    <Bar />
    <Suspense fallback={<Loader/>}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} >
        <Route path="contacts" element={<ContactPage/>}/>
        <Route path="products" element={<Product/>} />
      </Route>
    </Routes>
    </Suspense>
    </>
  )
}

export default App
