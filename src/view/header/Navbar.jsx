import * as React from 'react'
import  {   NavLink  } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar(){
    return(
        <div className='nav'>
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }  to="/">
        <div className='sitetitle'>Title Site</div>
        </NavLink>
<ul>
    <li>
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }  to="/about">
        About
        </NavLink>
    </li>
    <li>
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }  to="/work">
        Work
        </NavLink>
    </li>
</ul>

        </div>

        
    )
}
export default Navbar