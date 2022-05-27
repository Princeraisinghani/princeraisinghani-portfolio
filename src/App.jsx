import React from 'react';
import Header from './Component/header/Header.jsx'
import Nav from './Component/navigation/navigation'
import About from './Component/About/about'
import Education from './Component/Education/education'
import Projects from './Component/projects/projects'
import Certification from './Component/certification/certification'
import Contact from './Component/Contact/contact'
import Footer from './Component/footer/footer'


const App = () => {
  return (
  <>
    <Header/>
    <Nav/>
    <About/>
    <Education/>
    <Projects/>
    <Certification/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default App