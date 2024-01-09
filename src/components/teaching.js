import { Button, Image } from 'antd';
import React from 'react';

const Teaching = () => {
    return (
        <>
            <div className='flex justify-center items-center pl-40 pr-40 h-[500px] bg-gray-200'>
                <div className='mt-10 w-full sm:w-1/2 px-6'>
                    <div className='font-bold text-4xl mb-2'>Teach on</div>
                    <div className='font-bold text-4xl mb-6'>Musalsal University</div>
                    <p>
                        Join our diverse group of instructors and make an impact by imparting your expertise and experience
                        with our ever-growing community of learners.
                    </p>
                    <div className=" mt-10 mb-20">
                        <Button
                            className='!text-blue-800 font-medium w-[230px] bg-white border-solid border-2 border-blue-900 !rounded-sm'
                            type="primary"
                            size="large"
                        >
                        Start Teaching Today
                        </Button>
                    </div>
                </div>
                <div className='hidden sm:block  pl-10 w-full sm:w-1/2'>
                    <Image
                        src={"https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg"}
                        className="!w-[100%] !h-[100%]"

                    />
                </div>

            </div>
        </>
    );
};

export default Teaching;
