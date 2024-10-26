'use client'
import React from 'react'
import Navbar from '../navbar/page'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import handleClick from '../button/page';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <h1 className='text-xl text-center p-1'>Contact</h1>
        <div className='container w-72 h-72 mx-auto px-4 bg-primary rounded-l-3xl rounded-r-3xl'>

          <form>
            <p className='text-center text-xl font-semibold pt-2 '>Connect With Me! </p>
            <label htmlFor="name" className='pl-4 text-sm'> Name</label><br />
            <input type="text" id="name" name="name" placeholder="Your Name"
              className='w-56 p-2 text-xs pl-2  ml-4 rounded-full ' />

            <label htmlFor="email" className='pl-4 text-sm'>Email</label><br />
            <input type="email" id="email" name="email" placeholder="Your Email"
              className='w-56 p-2 text-xs pl-2  ml-4 rounded-full ' />

            <label htmlFor="text" className='pl-4 text-sm'>Message</label><br />
            <textarea id="name" name="name" rows={4} placeholder="Your Message"
              className='w-56 p-2 text-xs pl-4  ml-4 rounded-full '></textarea>

            <button onClick={handleClick} type='submit' className='text-center bg-black text-primary text-xs ml-28 pr-2 pl-2 rounded-md'>Submit</button>
          </form>
        </div>
        <div className='flex flex-row gap-14 mt-2 ml-60  w-48 h-7 rounded-full'>

          <div className='w-7 h-7 bg-primary rounded-full p-1 hover:bg-yellow-200'><Link href='https://www.facebook.com/syedahuriyanaz/'><FaFacebook size={20} color="black" /></Link></div>
          <div className='w-7 h-7 bg-primary rounded-full p-1 hover:bg-yellow-200'><Link href='https://github.com'> <FaGithub size={20} color="black" /></Link></div>
          <div className='w-7 h-7 bg-primary rounded-full p-1 hover:bg-yellow-200'><Link href='https://linkedin.com'><FaLinkedin size={20} color="black" className='rounded-full' /></Link></div>
        </div>

      </div>


    </>
  )
}
export default Contact