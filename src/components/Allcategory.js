import Image from 'next/image';
import c1 from "../../public/platform/c1.webp"
import React from 'react'
import Allfields from './Allfields';

const Allcategory = () => {
  return (
    <>
    <div className='flex justify-center items-center relative bg-gray-200'>
      
      <Image
        className='w-[50%]  h-[400px] object-cover'
        src={c1}
        alt="Description of the image"
      />
      <div className='w-[50%] inset-0 flex flex-col justify-center items-center text-start'>
        <h2 className='font-bold text-blue-950 text-5xl p-2 w-[50%]'>Courses to Propel Your Career</h2>
        <h4 className='font-medium text-blue-700 text-2xl p-2 w-[50%] text-start'>Free trainings, webinars and online courses</h4>
        <div className='flex w-[48%] mt-[10px]'>
        </div>
      </div>
    </div>
    <Allfields/>
  </>
  )
}

export default Allcategory;