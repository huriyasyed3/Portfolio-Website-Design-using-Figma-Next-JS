import React from 'react'
import Navbar from './navbar/page'
import AboutMe from './about me/page'
import Skills from './skills/page'
import Project from './project/page'
import Contact from './contact/page'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home