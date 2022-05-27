import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Prince Raisinghani</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Education">Education and Skills</a></li>
        <li><a href="#projects">Experience</a></li>
        <li><a href="#certification">Achievements</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/prince-raisinghani-a44982221"><BsLinkedin/></a>
        <a href="https://www.instagram.com/manic._.psycho/"><BsInstagram/></a>
        <a href="https://facebook.com/prince.raisinghani.3"><BsFacebook/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Prince Raisinghani - CV . All Rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer