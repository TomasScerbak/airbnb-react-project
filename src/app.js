import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Contacts from './Components/Contact'

export default function App() {
    return(
        <div className='container'>
            <Navbar />
            <Hero />
            <Contacts />
        </div>
    )
}