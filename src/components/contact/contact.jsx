import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
const contact = () => {
  return (
    <section id='contact'>
       
      <h2 >Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__option'>
          <article className='contact__options'>
          <MdOutlineMailOutline className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>johnide14@gmail.com</h5>
          <a href='mailto:johnide14@gmail.com' target="_blank">Send a message</a>
          </article>
          
          <article className='contact__options'>
          <BsMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Johnide</h5>
          <a href='https://m.me/wataze12'  target="_blank">Send a message</a>
          </article>


          <article className='contact__options'>
          <BsInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>niiiiideee</h5>
          <a href=' https://ig.me/m/niiiiideee' target="_blank">Send a message</a>
          </article>
        </div>
        <form action=''>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>


          
      </div>

      

    </section>
  )
}

export default contact