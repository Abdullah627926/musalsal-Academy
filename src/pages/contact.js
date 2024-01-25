import { PhoneFilled } from '@ant-design/icons';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { Divider } from 'antd';
import React from 'react'
import Link from 'next/link';

const contact = () => {

    return (
        <div >
            <div className='flex justify-center  p-3 mt-4'>
                <div className='m-20 w-[30%]' >

                    <h1 className='text-blue-800 text-5xl font-bold'>Contact</h1>
                    <Divider className="className=' 2px mb-7 bg-gray-800" />

                    <h4 className='font-medium '>Postal Address:</h4>
                    <div className='flex '> 
                    <FaMapMarkerAlt className="text-blue-950  hover:text-blue-700 transition duration-300 size-8" />
                    <p className='text-gray-700 ml-4'> Ground floor ,InFront of Madina Masjid.Labour Square Site Area , Karachi, Pakistan</p>
                    </div>
                    <Divider className="className=' 2px mb-7 bg-gray-800" />

                    <h4 className='font-medium '>Phone:</h4>
                    <div className='flex  '> 
                    <PhoneFilled className="text-blue-950 hover:text-blue-700 transition duration-300 size-8" />
                    <p className='text-gray-700'> +92 312 2029166</p>
                   
                    </div>
                    <Divider className="className=' 2px mb-7 bg-gray-800" />

                    <h4 className='font-medium '>Email:</h4>
                    <div className='flex  '>
                    <MdMarkEmailRead className="text-blue-950 hover:text-blue-700 transition duration-300 size-8" />
                    <p className='text-gray-700 ml-4'>Musalsaluniversity@gmail.com</p>
                    </div>
                </div>
                <div className='m-20'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7939749360658!2d66.98263827607582!3d24.905008243472206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb31568def75591%3A0xc5cc77121cc8ffa9!2sMadina%20Masjid!5e0!3m2!1sen!2s!4v1704357009888!5m2!1sen!2s"
                        width="500"
                        height="450"
                        style={{ border: 10 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" >
                    </iframe>
                </div>
            </div>

           </div>
    )
}

export default contact;