import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocials from'./Headersocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>
          Prince Raisinghani
        </h1>
        <h5 className='text-light'>Engineering Student</h5>
        <CTA />
        <Headersocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#Contact" className='scroll_down'>Scroll Down </a>

      </div>
      </header>
  )
}

export default header