'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="bg-primary">

        <ul className='flex flex-row gap-8 text-1x justify-end pr-8 items-center pt-1 pb-2'>
          <button className='bg-black rounded-full p-1 pr-5 pl-5 mr-32 mt-1 hover:bg-black  '> <h1 className='text-primary font text-1xl font-sans font-bold hover:text-white'>Huriya Syed.</h1></button>
          <li className='hover:text-gray-400'><Link href='/'>About Me</Link></li>
          <li className='hover:text-gray-400'><Link href='/skills'>Skills</Link></li>
          <li className='hover:text-gray-400'><Link href='/project' >Project</Link></li>
          <li className='hover:text-gray-400'><Link href='contact'>Contact</Link></li>

        </ul>
      </div>

    </>
  )

}

export default Navbar