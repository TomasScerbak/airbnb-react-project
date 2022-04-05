import React from 'react'
import logo from '../Images/logo.png'

export default function Navbar() {
    return(
        <nav>
            <img className='logo' src={logo} alt='airbnb logo'/>
        </nav>
    )
}