import React from 'react'
import './about.css'
import Me from '../../assets/about.jpeg'
import {FiAward} from 'react-icons/fi'
import {AiOutlineTeam} from 'react-icons/ai'
import {SiSmartthings} from 'react-icons/si'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className='about_me-image'>
          <img src={Me} alt="About Image"/>
          </div>
        </div>

        <div className="about_content">
          <div className='about_cards'>

            <article className='about_card'>
            <FiAward className ='about_icon'/>
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>

            <article className='about_card'>
            <AiOutlineTeam className='about_icon'/>
              <h5>Strong Communication</h5>
              <small>clarity, courtesy, concreteness and completeness.</small>
            </article>

            <article className='about_card'>
            <SiSmartthings className='about_icon'/>
              <h5>Problem Solving skills</h5>
              <small>Well-equipped with the skills needed to overcome obstacles</small>
            </article>
            </div>
            <p>
            Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, PYTHON, and C++. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          

        </div>
        
      </div>
    </section>
  )
}

export default about