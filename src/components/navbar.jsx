import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
    return (
        <>
        <nav className='nav'>
        <div class='logo'>
        <NavLink to = '/' className='link'>EduFind.NG</NavLink>
                </div>
            <div className='link-head'>
        <NavLink to = '/signup' className='link'>Signup</NavLink>
        <NavLink to = '/login' className='link'><button className = 'navbtn' >Login</button></NavLink>
        </div>
        </nav>
        </>
    )
}
export default Navbar