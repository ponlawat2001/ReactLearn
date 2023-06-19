import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './view/header/Navbar.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
            <RouterProvider router={routes} />
  </React.StrictMode>,
)
