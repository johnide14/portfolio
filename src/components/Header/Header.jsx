import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1> HELLO I'M JOHNIDE G. MEDAL</h1>
        <h4 className="text-light">And I'm Web developer and a Designer</h4>
        <CTA />

        <div className="me">
          <img src ={ME} alt ="me" />

        </div>

        
      </div>
        
    </header>
  )
}

export default header