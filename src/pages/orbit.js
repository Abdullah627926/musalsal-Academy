import { StarOutlined } from '@ant-design/icons';
import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { MdOutlineBarChart , MdLightbulbOutline, MdOutlineConstruction, MdOutlineNetworkCheck } from 'react-icons/md';
import { PiTarget } from "react-icons/pi";

const orbit = () => {
  return (
    <>

<div className='flex justify-center items-center relative bg-white'>
        <div className='w-[50%] inset-0 flex flex-col justify-center items-center text-start'>
          <h2 className='font-medium text-blue-700 text-5xl  w-[60%]'>Powering community building, accelerating tech growth</h2>
          <h4 className='font-normal text-gray-800 text-xl pt-5 w-[60%] text-start'>10PU Orbit is an outreach program by 10Pearls University with the purpose to connect with, engage and nurture the tech community in Pakistan. The program aims to bring together tech professionals and students, providing a platform where they can learn, exchange ideas, network and grow.</h4>
          
          
        </div>
        <img
          className='w-[45%]  object-cover'
          src="https://10pearlsuniversity.org/wp-content/uploads/2022/03/10pu-orbit-111-887x810.webp"
          alt="Description of the image"
        />
      </div>
      {/* strenth section */}
      <section className="bg-[#3758c7] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center mb-10">
          Orbit organises various technology and community-building events across Lahore, Islamabad and Karachi. These
          events are held at 10Pearls University premises, often in collaboration with other tech communities in
          Pakistan.
        </p>
        <div className="flex justify-center space-x-10">
          <div className="text-center">
            <FaUsers className="mx-auto mb-4 h-12 w-12" />
            <h3 className="font-semibold">Connect, Network & Collaborate</h3>
          </div>
          <div className="text-center">
            <MdLightbulbOutline className="mx-auto mb-4 h-12 w-12" />
            <h3 className="font-semibold">Leverage Learning & Growth Opportunities</h3>
          </div>
          <div className="text-center">
            <MdOutlineBarChart className="mx-auto mb-4 h-12 w-12" />
            <h3 className="font-semibold">Strengthen the Tech Industry</h3>
          </div>
        </div>
      </div>
    </section>
    {/* 3rd section */}
    <div className="flex w-full py-10">
      <div className="flex flex-col w-1/2 p-8 space-y-6">
        <h2 className="text-4xl text-blue-800 font-bold">GAIN AN EDGE</h2>
        <div className="flex items-center space-x-4">
          <MdOutlineNetworkCheck className="text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold">NETWORKING</h3>
            <p>Grow your network and connect with industry professionals</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <StarOutlined className="text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold">CAREER OPPORTUNITIES</h3>
            <p>Access to career opportunities within 10Pearls University/10Pearls</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <PiTarget className="text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold">FOCUSED PLATFORM</h3>
            <p>A focused platform to build core and ancillary tech skills</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MdLightbulbOutline className="text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold">EMPOWER</h3>
            <p>
              10PU Orbit also empowers niche tech communities with 10PU's established platform to scale/grow their
              network
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MdOutlineConstruction className="text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold">BUILD</h3>
            <p>Together build and strengthen the tech community of Pakistan</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          alt="Women in Tech Event"
          className="w-full h-auto"
          height="715"
          src="https://10pearlsuniversity.org/wp-content/uploads/2022/03/10pu-orbit-22-808x940.jpg"
          style={{
            aspectRatio: "800/715",
            objectFit: "cover",
          }}
          width="800"
        />
      </div>
    </div>
    </>
  )
}

export default orbit;