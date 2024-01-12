import React from 'react';
import { Button } from 'antd';

const Explore = () => {
  return (
    <>
      <div className='flex justify-center items-center relative bg-gray-200'>
        <div className='w-[50%] inset-0 flex flex-col justify-center items-center text-start'>
          <h2 className='font-bold text-blue-700 text-5xl p-2 w-[50%]'>Lifelong learners transform the world</h2>
          <h4 className='font-medium text-gray-800 text-2xl p-2 w-[50%] text-start'>Free trainings, webinars and online courses</h4>
          <div className='flex w-[48%] mt-[10px]'>
            <Button className='bg-blue-600 !rounded-none !px-[30px]' type="primary">Explore</Button>
          </div>
        </div>
        <img
          className='w-[50%]  object-cover'
          src="https://10pearlsuniversity.org/wp-content/uploads/2021/08/10Puhero-2048x1385.png"
          alt="Description of the image"
        />
      </div>
    </>
  );
}

export default Explore;
