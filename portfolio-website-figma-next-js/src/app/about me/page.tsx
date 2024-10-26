'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pic from '../../../public/girl-icon.png'
const AboutMe = () => {

  return (
    <>
      <div className='min-h-screen'>
        <h1 className='text-center pt-2 text-2xl'>About Me</h1>
        <div>
          <Image src={pic} alt='pix' width={500} height={500} className='w-48 h-40- mt-2 mr-12 float-right' />
          <h2 className='pl-7 text-2xl font-semibold'>i'm a <br />Frontend <br />Developer</h2>
          <p className=' text-xs pl-7 pt-2'>Hello, I’m Huriya Syed <br /> Frontend Developer skilled in HTML, CSS,  <br />JavaScript, TypeScript, and Next.js. I create  <br />responsive, dynamic websites and love turning <br /> ideas into interactive, user-friendly experiences</p>
          <button className='bg-primary rounded-full p-1 pr-2 pl-2 pt-1 text-sm ml-7 mt-2 text-black'>Contact Me!</button>

        </div>
      </div>
    </>
  )
}

export default AboutMe