import React from 'react'
import { push } from 'next/router';
import { Button } from 'antd';
import Partners from '@/components/partners';

const elearning = () => {
  return (
    <div className='py-6'>
      <div className='flex justify-center items-center relative bg-white'>
        <div className='w-[50%] inset-0 flex flex-col justify-center items-center text-start'>
          <h2 className='font-medium text-blue-700 text-5xl  w-[60%]'>Empower through</h2>
          <h2 className='font-bold text-blue-700 text-5xl w-[60%]'>E-learning</h2>
          <h4 className='font-normal text-gray-800 text-xl pt-5 w-[60%] text-start'>As a leading e-learning facilitator, 10Pearls University also partners with other organizations and institutions that work in the domain of e-learning. We offer a gamut of e-learning services. These include collaborating with e-learning SMEs (Small and Medium Enterprises) to curate, polish, and deliver content for courses, trainings and workshops, and also assist them with branding and technical roll-out. We leverage our vast and global outreach to ensure companies receive the mileage they desire.</h4>
          <div className=" mt-10 mb-20">
            <Button
              onClick={()=>push("/contact")}
              className='teachbtn font-medium w-[230px] bg-white border-solid border-2 border-blue-900 !rounded-sm'
              type="primary"
              size="large"

            >
              CONNECT WITH US
            </Button>
          </div>

        </div>
        <img
          className='w-[50%]  object-cover'
          src="https://10pearlsuniversity.org/wp-content/uploads/2021/07/elearning-img1-904x788.jpg"
          alt="Description of the image"
        />
      </div>
      <Partners/>
    </div>
  )
}
export default elearning;