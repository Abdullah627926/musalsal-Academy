import { Card } from "antd";
import em1 from "../../public/platform/about-page-img-1.webp"
import React from "react";
import Image from "next/image";

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
];

const MusalsalProfessions = () => {
  return (
    <div>
      <div className="bg- white w-full h-[180px]"></div>
      <div className="flex justify-center space-evenly w-full  p-[3px] h-[220px] bg-blue-700 ">
        {dummyData.map((item) => (
          <div className="" key={item.id}>
            <Card
              hoverable
              className="w-[300px]   mt-[-100px] m-3 border-none  bg-inherit  !text-white "
              cover={
                <Image
                  src={em1}
                  className="!w-[400px] !h-[160px] "
                  alt={item.title}
                />
              }
            >
              <Card.Meta title={<div className="text-xl mb-2 text-white">{item.title}</div>} />
              <Card.Meta description={<div className="text-sm text-white">{item.description}</div>} />

            </Card>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MusalsalProfessions;
