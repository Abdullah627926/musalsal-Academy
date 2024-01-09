import React from 'react';
import { Card, Image, Button } from 'antd';

const dummyData = [
    {
        id: 1,
        title: 'Card 1',
        description: 'Description for Card 1',
    },
    {
        id: 2,
        title: 'Card 2',
        description: 'Description for Card 2',
    },
    {
        id: 3,
        title: 'Card 3',
        description: 'Description for Card 3',
    },
    {
        id: 4,
        title: 'Card 4',
        description: 'Description for Card 4',
    },
];

const Webinars = () => {
    const handleViewAll = () => {
        // Handle the View All action
        // Redirect or navigate to the desired location
    };

    return (
        <>
            <div className='bg-slate-300 p-10 w-full h-[500px]'>
                <h1 className='text-5xl font-bold flex justify-center  mb-[20px] text-blue-800'>Webinars</h1>
                <h2 className='text-xl flex justify-center mb-[30px] text-gray-700'>
                    We have a variety of webinars lined up for you. Check them out here.
                </h2>
                <div className="flex justify-center items-center ">
                    <div className="flex  gap-0">
                        {dummyData.map((item) => (
                            <Card
                                key={item.id}
                                hoverable
                                className="w-[200px] h-[200px]  border-none bg-white text-black"
                                cover={<Image src={"https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg"} alt={item.title} className="!w-[250px] !h-[130px]" />}
                            >
                                <Card.Meta title={<div className="text-xl mb-2 text-black">{item.title}</div>} />
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-10 mb-20">
                    <Button className='!text-white font-medium w-[150px] bg-blue-700 !rounded-none'
                        onClick={handleViewAll}
                        type="primary"
                        size="large">
                        View All
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Webinars;
