import React from 'react'
import './navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'
import {GiBrain} from 'react-icons/gi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const navigation = () => {
  const[activeNavigation , setActiveNavigation]=useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNavigation('#')} className={activeNavigation === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNavigation('#about')} className={activeNavigation === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Education" onClick={() => setActiveNavigation('#Education')} className={activeNavigation === '#Education' ? 'active' : ''}><BiBookOpen/></a>
      <a href="#projects" onClick={() => setActiveNavigation('#projects')} className={activeNavigation === '#projects' ? 'active' : ''}><GiBrain/></a>
      <a href="#Contact" onClick={() => setActiveNavigation('#Contact')} className={activeNavigation === '#Contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default navigation