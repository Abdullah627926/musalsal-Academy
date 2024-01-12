import { useRouter } from 'next/router';
import { Card, Image, Button } from 'antd';
import React from 'react';
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
    },
];

const Courses = () => {
    const {push} = useRouter();
    const fourCards = dummyData.slice(0, 4);


    return (
        <div className=''>
            <div className='mt-[50px]'>
                <h1 className='text-5xl font-bold flex justify-center mb-[20px] text-blue-800'>Courses</h1>
                <h2 className='text-xl flex justify-center mb-[30px] text-gray-700'>
                    Hi! Looks like you haven’t started a course yet. Click here to browse through our range of courses.
                </h2>
            </div>
            <div className="flex justify-center flex-wrap space-x-4">
                {fourCards.map((item) => (
                    <Card
                        key={item.id}
                        hoverable={false}
                        bordered={true}
                        className="w-[300px] m-3  bg-inherit text-black"
                        cover={
                            <Image src={"https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg"} alt={item.title} className="!w-[300px] !h-[160px]" preview={false} />}
                    >
                        <Card.Meta title={<div className="text-xl mb-2 text-black">{item.title}</div>} />
                        <Card.Meta description={<div className="text-sm text-black">{item.description}</div>} />
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-10 mb-20">
                <Button className='!text-white font-medium w-[150px] bg-blue-700 !rounded-none'
                    onClick={()=>push("/Allcategory")}
                    type="primary"
                    size="large">View All
                    {/* <Link href={"../Allcategory"}> View All</Link> */}
                    
                </Button>

            </div>
        </div>
    );
};

export default Courses;
