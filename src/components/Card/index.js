import { Card, Image } from 'antd';
import React from 'react';

function CustomCard({ data, containerClass }) {
    return (
        <div className={`flex justify-center flex-wrap space-x-4 ${containerClass}`}>
            {
                data?.map((item) => (
                    <Card
                        key={item.id}
                        hoverable={false}
                        bordered={true}
                        className="w-[300px] m-3  bg-inherit text-black"
                        cover={
                            <Image src={"https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg"} alt={item.title} className="!w-[300px] !h-[160px]" preview={false} />
                        }
                    >
                        <Card.Meta title={<div className="text-xl mb-2 text-black">{item.title}</div>} />
                        <Card.Meta description={<div className="text-sm text-black">{item.description}</div>} />
                    </Card>
                ))
            }
        </div>
    );
}

export default CustomCard;
