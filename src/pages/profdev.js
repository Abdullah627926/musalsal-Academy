import { Button } from 'antd';
import React from 'react'

const profdev = () => {
  return (
    <>
      <div className='flex justify-center items-center relative bg-white'>
        <div className='w-[50%] inset-0 flex flex-col justify-center items-center text-start'>
          <h2 className='font-medium text-blue-700 text-5xl  w-[60%]'>Professional</h2>
          <h2 className='font-bold text-blue-700 text-5xl w-[60%]'>Development</h2>
          <h4 className='font-normal text-gray-800 text-xl pt-5 w-[60%] text-start'>10Pearls University conducts 
          trainings, workshops and webinars on advance tools and technologies to enhance skillsets, and enable 
          individual and industry growth. We also conduct non-technical webinars and speaker sessions which 
          focus on personal growth and help enhance soft-skills. All our sessions are hands-on, applicable to 
          real-world problems,and are targeted towards professionals in varying disciplines.</h4>
          
          
        </div>
        <img
          className='w-[50%]  object-cover'
          src="https://10pearlsuniversity.org/wp-content/uploads/2021/06/professional-1-840x788.png"
          alt="Description of the image"
        />
      </div>
      {/* second div */}
      
      <div className="bg-white p-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl text-blue-700 font-bold mb-4">Master latest tech and trends</h2>
            <p className="text-gray-600">
              Whether you wish to upskill in in-demand fields like IT, AI and Cloud engineering, or learn skills like
              business analytics, test automation, social media analytics or Python, we have a vast repository of
              technical and non-technical trainings, webinars and workshops.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-blue-700 font-bold  mb-4">Access anywhere, anytime</h2>
            <p className="text-gray-600">
              All trainings, webinars and workshops are available online. Whether you wish to access a session from our
              archives, or enroll for an upcoming one, the process is simple, safe and convenient. Just register and
              start exploring!
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-blue-700 font-bold  mb-4">Learn from skilled, experienced trainers</h2>
            <p className="text-gray-600">
              Our trainers are experienced industry resources who have worked on complex projects and applications. They
              apply their industry knowledge, and use interactive tools and techniques to teach and impart knowledge.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-blue-700 font-bold  mb-4">Earn industry-recognized credentials</h2>
            <p className="text-gray-600">
              All participants receive certificates on successful completion of a training, workshop or a course. These
              certificates are recognized across the industry and are excellent vehicles to elevate your career.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-blue-700 font-bold  mb-4">Affordable Options</h2>
            <p className="text-gray-600">
              In-line with our mission to be an enabler, our trainings, workshops and webinars are free to attend. For
              premium trainings/workshops, various discounts are offered to help maximum people benefit from them.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default profdev;