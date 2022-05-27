import React from 'react'
import certificate1 from '../../assets/certificate1.png'
import certificate2 from '../../assets/certificate2.png'
import certificate3 from '../../assets/certificate3.png'
import './certification.css'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    image:certificate1,
    name:'Internship at Shellcode solution'
  },
  {
    image:certificate2,
    name:'Neural networks and Deep Learning '
  },
  {
    image:certificate3,
    name:'Linear circuits-2:AC Analysis'
  }

]
const certification = () => {
  return (
    <section id='certification'>
      <h5>what are my Achievements?</h5>
      <h2>Certificates</h2>

      <Swiper className="container certificates_container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({image,name},index)=> {
            return (
              <SwiperSlide key={index} className='certificates'>
          <div className='certificate_image'>
            <img src={image}/>
            </div>
            <h5 className='certificate_name'>{name}</h5>
        </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default certification