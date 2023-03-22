import React from 'react'
import './projects.css'
import l4 from '../../assets/l4.png'
import l5 from '../../assets/l5.png'
import l6 from '../../assets/l6.png'
const projects = () => {
  return (
    <section id='projects'>
      <h5>My recent projects</h5>
      <h2> PROJECTS</h2>
      
      <div className="container services__container">
      <article className="services">
        <div className="services__head">
          <div className="WEBD">
            <img src={l4} alt='WEBD'/>
          </div>
        <h3> MOBILE APP DEVELOPMENT</h3>

        </div>
        <div className='description'>
        <p>
        Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser. The programming and markup languages used for this
         kind of software development include Java, Swift, C# and HTML5.        </p>

        </div>

      </article>
      <article className="services">
        <div className="services__head">
        <div className="WEBD">
            <img src={l5} alt='WEBD'/>
          </div>
          
        <h3> WEB DEVELOPMENT</h3>

        </div>
        <div className='description'>
        <p>
        Web development typically refers to the coding and programming side of website production. When you learn web development, you might start out writing a simple page of HTML text and build up to creating more complex, feature-rich applications designed to be accessed from various Internet-connected devices. Examples of feature-rich web development include e-commerce websites, content management systems (CMS), and social networks. Common programming languages and software web developers may use include Hypertext Markup Language (HTML), Cascading
         Style Sheets (CSS), JavaScript, PHP, Drupal, and MySQL.
         </p>
        </div>

      </article>
      <article className="services">
        <div className="services__head">
          <div className="WEBD">
            <img src={l6} alt='WEBD'/>
          </div>
        <h3> WEB DESIGN</h3>

        </div>
        <div className='description'>
        <p>
        Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development          </p>

        </div>

      </article>

      </div>
    </section>
  )
}

export default projects