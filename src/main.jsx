import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './view/header/Navbar.jsx'
import './index.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './view/Home.jsx'
import About from './view/About.jsx'
import Work from './view/Work.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/work" element={<Work />} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
