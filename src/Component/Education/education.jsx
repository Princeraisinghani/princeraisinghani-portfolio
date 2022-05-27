import React from 'react'
import './education.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const education = () => {
  return (
    <section id='Education'>
      <h5>What is my educational Qualification ? </h5>
      <h2>Education and Skills</h2>

      <div className="container education_container">
        <div className='Education'>
          <h3>Education</h3>
          <div className="education_content">
            <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons' />
              <div>
                <h4>B.tech</h4>
                <small className='text-light'>Vellore Institute of Technology <br/> (2019-Present)</small>
              </div>
              </article>
              <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
              <div> 
                <h4>10+2</h4>
                <small className='text-light'>Delhi Public School <br/> (2016-2018)</small>
              </div>
             
            </article>
            <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
              <div>
                <h4>10</h4>
                <small className='text-light'>Delhi Public School <br/> (2004-2016)</small>
              </div>
             
            </article>
          </div>
        </div>
        <div className="Technical_Skills">
        <h3>Technical Skills</h3>
          <div className="education_content">
            <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
              <div>
                <h4>Data Structures and Algorithm</h4>
              </div>
            
            </article><article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
              <div>
                <h4>Wordpress Development</h4>
                <small className='text-light'>Web Development , PWA</small>
              </div>
            </article>
            <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
              <div>
                <h4>Programming Language</h4>
                <small className='text-light'>Java</small>
              </div>
   
            </article>
            <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
             <div>
                <h4>Also familiar with</h4>
                <small className='text-light'>C++ and Python</small>
              </div>
   
            </article>

            <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
             <div> 
               <h4>Video Editing and Designing </h4>
               <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='education_details'>
              <BsPatchCheckFill className='education_details-icons'/>
              <div>
                <h4>Web Development</h4>
                <small className='text-light'>Frontend , React</small>
              </div>
   
            </article>
          </div>
        </div>

      </div>
      </section>
  )
}

export default education