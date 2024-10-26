import React from 'react'
import Navbar from '../navbar/page'

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <h1 className='text-center pt-2 text-2xl'>Skills</h1>
        <div className='flex flex-row justify-center gap-44 mt-4 '>
          <div className='bg-primary w-20 h-20 rounded-full text-center text-xs pt-8  '>HTML5</div>
          <div className='bg-primary w-20 h-20 rounded-full text-center text-xs pt-8  '>CSS3</div>
          <div className='bg-primary w-20 h-20 rounded-full text-center text-xs pt-8  '>JavaScript</div>
        </div>
        <div className='flex flex-row justify-center gap-44 mt-6 '>
          <div className='bg-primary w-20 h-20 rounded-full text-center text-xs pt-8  '>TypeScript</div>
          <div className='bg-primary w-20 h-20 rounded-full text-center text-xs pt-8  '>Next JS</div>
          <div className='bg-primary w-20 h-20 rounded-full text-center text-xs pt-8  '>Tailwind</div>
        </div>
      </div>
    </>
  )
}

export default Skills