import React from 'react';
import Link from 'next/link';
import {  FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import logo from "../../public/logo.png";
import { ArrowUpOutlined } from '@ant-design/icons';



const Footerend = () => {
  return (
    <>

<footer className="bg-[#F8F8F8] py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col space-y-4">
          <Image
                  src={logo}
                  className="!w-[220px] !h-[100px] "
                  alt={"logo musalsal university"}
                />
            <p className="text-sm text-gray-600">
              Facilitating learning and growth through interactive trainings, webinars and events.
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <h6 className='text-blue-800 text-2xl font-bold mb-4' >Company</h6>
            <Link className="text-lg text-gray-600" href={"/contact"}>
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col space-y-1">
            <h6 className='text-blue-800 text-2xl font-bold mb-4'>Important Links</h6>
            <Link className="text-lg text-gray-600" href="/elearning">
              Our Services
            </Link>
            <Link className="text-lg text-gray-600" href="/academia">
              Academia
            </Link>
            <Link className="text-lg text-gray-600" href="/corporate">
              Corporate
            </Link>
          </div>
          <div className="flex flex-col space-y-1">
            <h6  className='text-blue-800 text-2xl font-bold mb-4'>Social Media</h6>
            <div className="flex space-x-2">
              <Link className="text-gray-600" href="#">
              <FaFacebook className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
              </Link>
              <Link className="text-gray-600" href="#">
              <FaTwitter className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
              </Link>
              <Link className="text-gray-600" href="#">
              <FaLinkedin className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
              </Link>
              <Link className="text-gray-600" href="#">
              <FaYoutube className='inline-block m-2 text-blue-950 hover:text-blue-700 transition duration-300 size-6' />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex justify-end items-center">
            <Link className="text-blue-600 " href="#">
              <ArrowUpOutlined className="size-10" />
            </Link>
          </div>
    </footer>
    </>
  )
}
export default Footerend;