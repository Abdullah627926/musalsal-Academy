import { Button, Image } from 'antd';
import React from 'react';

const Teaching = () => {
    return (
        <div className='flex justify-center w-full  bg-gray-200'>
            <div className='flex justify-center items-center w-[84%]'>
                <div className='mt-10 w-full sm:w-1/3'>
                    <h2 className='font-bold text-4xl mb-2'>Teach on</h2>
                    <h2 className='font-bold text-4xl mb-6'>Musalsal University</h2>
                    <p>
                        Join our diverse group of instructors and make an impact by imparting your expertise and experience
                        with our ever-growing community of learners.
                    </p>
                    <div className=" mt-10 mb-20">
                        <Button
                            className='teachbtn font-medium w-[230px] bg-white border-solid border-2 border-blue-900 !rounded-sm'
                            type="primary"
                            size="large"
                        >
                            Start Teaching Today
                        </Button>
                    </div>
                </div>
                <div className='hidden sm:block  pl-10 w-full sm:w-1/2'>
                    <Image
                        src={"https://10pearlsuniversity.org/wp-content/uploads/2022/11/tech-on-622x730.webp"}
                        className="!w-[468px] !h-[549px] pb-10"
                        preview={false}

                    />
                </div>

            </div>
        </div>
    );
};

export default Teaching;
