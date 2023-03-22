import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
export const about = () => {
  return (
    <section id='about'>
  <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src = {ME} alt="About Image"/>
      </div>
    </div>

  </div>
      <div className='about__content'>
      <h2>I'm Passionate developer and a Designer</h2>

<p>I love reflecting my emotions into my design to develop certain things. 
  I can release all my feelings to make my designs deeper.
  Using Adobe has been my coping mechanism to relieve all my depression since I was a kid</p>
      </div>

    </section>
  )
}

export default about