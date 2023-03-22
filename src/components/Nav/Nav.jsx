import React from 'react'
import './Nav.css'
import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>HOME</a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>ABOUT</a>
      <a href='#services'onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} >SERVICES</a>
      <a href='#projects' onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>PROJECTS</a>
      <a href='#tools' onClick={()=> setActiveNav('#tools')} className={activeNav === '#tools' ? 'active' : ''}>TOOLS</a>

      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>CONTACT</a>

      
      
      
    </nav>
  )
}

export default Nav