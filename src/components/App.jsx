import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from './homePage/HomePage.jsx'

import './App.css'
import { NavBar } from './navBar/NavBar.jsx'
import { ProductsPage } from './productsPage/ProductsPage.jsx'
function App() {
 

  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
                <Route path="/lexclean" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
