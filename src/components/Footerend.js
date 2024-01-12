import React from 'react';
import Link from 'next/link';
import {  FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";



const Footerend = () => {
  return (
    <>
    

<div className='flex justify-center space-around '>

    <div className='text-gray-700  m-10' >
        <div className='w-80 h-[4px] mb-7 bg-blue-700 inline-block shadow-md '></div>
        <img
            src="https://10pearlsuniversity.org/wp-content/uploads/2021/02/10PU-footer-logo.png"
            alt="Logo"
            style={{ height: '54px', width: 'auto' }}
            className='mb-4'
        />
        <p>Facilitating learning and growth through</p>
        <p> interactive trainings, webinars and events</p>
    </div>

    <div className='text-gray-700 m-10'>


        <h2 className='text-blue-800 text-xl font-bold mb-4' >Company</h2>
        <Link href={"contact"}>Contact Us</Link>
    </div>
    <div className='text-gray-700 m-10 '>


        <h2 className='text-blue-800 text-xl font-bold mb-4'>Important Links</h2>
        <p>Our Services</p>
        <p>Corporate</p>
        <p>Academia</p>
    </div>
    <div className='text-gray-700 m-10'>

        <h2 className='text-blue-800 text-xl font-bold mb-4'> Social Media</h2>

        <FaFacebook className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
        <FaTwitter className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
        <FaLinkedin className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
        <FaYoutube className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
    </div>


</div>

    </>
  )
}
export default Footerend;