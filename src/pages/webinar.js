import Webinars from '@/components/Webinars';
import React from 'react'

const webinar = () => {
  return (
    <>  
    
    <div className='flex justify-center items-center relative py-5 bg-blue-100'>
    <img
          className='w-[50%]  object-cover'
          src="https://10pearlsuniversity.org/wp-content/uploads/2021/09/webinar-banner-thumbnail-1024x740.png"
          alt="Description of the image"
        />
        <div className='w-[50%] inset-0 flex flex-col justify-center items-center text-start'>
          <h2 className='font-medium text-gray-900 text-5xl  w-[60%]'>Webinars for Experts, by Experts</h2>
          <h4 className='font-normal text-blue-700 text-xl pt-5 w-[60%] text-start'>Learn from industry leaders and experts in the field about a range of topics, from Game Development to Leadership Scalability.</h4>
        </div>
      </div>
      <Webinars/>
    </>
  )
}

export default webinar;