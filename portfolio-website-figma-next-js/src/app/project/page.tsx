import React from 'react'
import Navbar from '../navbar/page'
import Image from 'next/image'
import Pro1 from '../../../public/1st Project 14th-august.png'
import Pro2 from '../../../public/2nd Project.png'
import Pro3 from '../../../public/3rd Project To do list.png'


const Project = () => {
    return (
        <>
            <Navbar />

            <div className='min-h-screen'>
                <h1 className='pt-2 text-2xl text-center'>Projects</h1>

                <div>
                    <Image src={Pro1} alt='Project-1' width={500} height={500} className=' mt-5 mr-14 float-right w-48 h-39 rounded-lg' />
                    <div className='bg-primary inline-block p-3 ml-6 mt-2 rounded-lg '>
                        <h3 className='text-md font-semibold '>Independence Day Website</h3>
                        <p className='text-xs '>
                            This website commemorates Pakistan's <br />
                            Independence Day, honoring the sacrifices <br />
                            and history behind this significant day. With<br />
                            vivid imagery and historical content, it brings <br />
                            the spirit of 14th August celebrations to life.</p>
                    </div>
                </div>

                <div>
                    <Image src={Pro2} alt='Project-2' width={500} height={500} className=' mt-5 mr-14 float-right w-48 h-39 rounded-lg' />
                    <div className=' bg-primary inline-block p-3 ml-6 mt-5 rounded-lg '>
                        <h3 className='text-md font-semibold '>Desi Delight Website</h3>
                        <p className='text-xs '>
                            Desi Delight is a website dedicated to the rich<br />
                            flavors of Pakistani cuisine, showcasing<br />
                            traditional dishes like biryani, nihari, and<br />
                            karahi. It offers a detailed menu, vibrant <br />
                            images, and engaging content that celebrates <br />
                            authentic desi food.</p>
                    </div>
                </div>

                <div className='mb-6'>
                    <Image src={Pro3} alt='Project-3' width={500} height={500} className='  mt-3 mr-14 float-right w-48 h-39 rounded-lg' />
                    <div className='bg-primary inline-block p-2 ml-6 mt-5 rounded-lg '>
                        <h3 className='text-md font-semibold '>Todo List  - Task Management App</h3>
                        <p className='text-xs '>
                            The Todo List app is designed for managing <br />
                            daily tasks with ease, allowing users to add,<br />
                            complete, and delete tasks. It’s a simple, user-<br />
                            friendly tool to boost productivity and stay <br />
                            organized.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Project