import React from 'react'
import './projects.css'
import {BiCheck} from 'react-icons/bi'

const projects = () => {
  return (
    <section id='projects'>
      <h5>
        What is my work experience ?
      </h5>
      <h2>Experience</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3> Projects </h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Disaster Management System</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Smart Refrigerator</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>WooCommerce Website</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>React Portfolio</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3> Internship </h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <div>
                <p>Zebion - Dynamic Virtual Catalogue</p>
                <small className='text-light'>Shellcode Solution</small>
              </div>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <div>
                <p>HumourBaba - Video editing and Designing </p>
                <small className='text-light'>HumourBaba</small>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default projects