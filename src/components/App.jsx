import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from './homePage/HomePage.jsx'

import './App.css'
import { NavBar } from './navBar/NavBar.jsx'
function App() {
 

  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
                <Route path="/" element={<HomePage />} />
                
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
