import { Card, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React,{useState} from 'react';

const dummyData = [
    {
        id: 1,
        title: "Skilled Trainers",
        description: "Learn from experienced industry professionals who provide hands-on knowledge with real-life applications.",
        thumbnail: "https://example.com/product1.jpg",
    },
    {
        id: 2,
        title: "Live & Interactive",
        description: "Communicate and engage with your trainer and other students for a collaborative learning experience.",
        thumbnail: "https://example.com/product2.jpg",
    },
    {
        id: 3,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    },
    {
        id: 4,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 5,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 6,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 7,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 8,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 9,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 10,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 11,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    }, {
        id: 12,
        title: "Convenient & Remote",
        description: "Recorded sessions for learning at your own pace. Safe and easy access to all trainings and webinars.",
        thumbnail: "https://example.com/product3.jpg",
    },
];
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
