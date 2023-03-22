import React from 'react'
import './services.css'
import WEBD from '../../assets/webd.png'
import l2 from '../../assets/UI.png'
import l3 from '../../assets/respo.png'
const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2> Services</h2>
      
      <div className="container services__container">
      <article className="services">
        <div className="services__head">
          <div className="WEBD">
            <img src={WEBD} alt='WEBD'/>
          </div>
        <h3> WEB DESIGN</h3>

        </div>
        <div className='description'>
        <p>
        Web design refers to the design of websites that are displayed on the internet.
         It usually refers to the user experience aspects of website development rather than software development
        </p>

        </div>

      </article>
      <article className="services">
        <div className="services__head">
        <div className="WEBD">
            <img src={l2} alt='WEBD'/>
          </div>
          
        <h3> UI/UX DESIGN</h3>

        </div>
        <div className='description'>
        <p>
        UI/UX design is an essential part of your website. Enhancing this aspect of your site enables you to attract more prospects, increase conversions, sales,
         and overall profitability, and improve customer retention.        </p>

        </div>

      </article>
      <article className="services">
        <div className="services__head">
          <div className="WEBD">
            <img src={l3} alt='WEBD'/>
          </div>
        <h3> RESPONSIVE DESIGN</h3>

        </div>
        <div className='description'>
        <p>
        Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website,
        to make it look good on all devices (desktops, tablets, and phones)        </p>

        </div>

      </article>

      </div>

    </section>
  )
}

export default services
