import { Card, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { dummyData } from './data/data';

const Allfields = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = dummyData.filter(
        (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <h1 className='text-5xl font-bold flex justify-center mb-[40px] mt-[20px] text-blue-800'>
                Let's Start Learning
            </h1>
            <div className='flex justify-center'>
                <input
                    className='bg-gray-200 hover:border-none border-none w-[50%] p-3 h-10'
                    type='text'
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='bg-gray-200 border-none h-10 w-12'>
                    <SearchOutlined />
                </button>
            </div>

            <div className='flex justify-center mt-[30px]'>
                <button className='bg-gray-100 border-none h-14 w-40 font-semibold text-xl'>
                    All Category
                </button>
            </div>

            <div className='flex flex-wrap justify-center mt-10  space-evenly w-full  p-[30px] bg-gray-200'>
                {filteredData.map((item) => (
                    <div key={item.id} className='w-[250px] m-3 border-none bg-inherit text-black'>
                        <Card
                            hoverable
                            className="transition-transform hover:transform hover:scale-125 "
                            cover={<Image
                                src={"https://img.youtube.com/vi/tEOoJqqCskM/maxresdefault.jpg"}
                                alt={item.title}
                                className='!w-[300px]  !h-[160px]' />}
                        >
                            <Card.Meta title={<div className='text-xl mb-2 text-black'>{item.title}</div>} />
                            <Card.Meta description={<div className='text-sm text-black'>{item.description}</div>} />
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Allfields;
