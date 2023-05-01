// import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
// import './App.css'
import {AboutMe,Home, Portfolio, NavBar, Contact} from "./views/index";


function App() {

  const location = useLocation();

  return (
    <div className="App">
      {/* {location.pathname !== "/" && <NavBar />} */}

    <Routes>
        
      
        <Route path="/" element={<Home />} />
      
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>

    
    </div>
  )
}

export default App
