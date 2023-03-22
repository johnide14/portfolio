import React from 'react'
import './tools.css'
import tool1 from '../../assets/tool1.png'
import tool2 from '../../assets/tool2.png'
import tool3 from '../../assets/tool3.png'
import tool4 from '../../assets/tool4.png'
import tool5 from '../../assets/tool5.png'
import tool6 from '../../assets/tool6.png'

const tools = () => {
  return (
    <section id='tools'>
    <h5>Frequently used</h5>
    <h2>TOOLS</h2>

    <div className="container tools__container">
    <article className='tools__item'>
      <div className='tools__image'>
        <img src = {tool1} alt=""/>
        
        </div>
        <h3>FIGMA</h3>

    </article>
    <article className='tools__item'>
      <div className='tools__image'>
        <img src = {tool2} alt=""/>
        
        </div>
        <h3> ADOBE ILLUSTRATOR</h3>

    </article>
    <article className='tools__item'>
      <div className='tools__image'>
        <img src = {tool3} alt=""/>
        
        </div>
        
        <h3> VISUAL STUDIO</h3>
    </article>
    <article className='tools__item'>
      <div className='tools__image'>
        <img src = {tool4} alt=""/>
        
        </div>
        
        <h3> REACT JS</h3>
    </article>
    <article className='tools__item'>
      <div className='tools__image'>
        <img src = {tool5} alt=""/>
        
        </div>
        
        <h3> LARAVEL</h3>
    </article>
    <article className='tools__item'>
      <div className='tools__image'>
        <img src = {tool6} alt=""/>
        
        </div>
        <h3> ADOBE PHOTOSHOP</h3>

    </article>

    </div>

    </section>
  )
}

export default tools