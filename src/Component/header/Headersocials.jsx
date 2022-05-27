import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/prince-raisinghani-a44982221" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Princeraisinghani" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/manic._.psycho/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default Headersocials