import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdOutlineTextsms} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fj9rrv8', 'template_88a443o', form.current, 'WCkavmRHuEtcCP83O')
      
    e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>princeraisinghani26@gmail.com</h5>
            <a href="mailto:princeraisinghani26@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineTextsms className='contact_option-icon'/>
            <h4>Message</h4>
            <h5>+91-6390140394</h5>
            <a href="sms:+916390140394" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-9140575284</h5>
            <a href="https://api.whatsapp.com/send?phone=+919140575284" target="_blank">Send a message</a>
          </article>
        </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text"name='name' placeholder='Your Full name' required/>
            <input type="email" name='email' placeholder='your Email' reuired />
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary' >Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default contact