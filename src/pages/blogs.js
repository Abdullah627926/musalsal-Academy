import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Badge, Button } from 'antd';

const blog1 = '/post.jpg';
const blog2 = "/3.jpg";
const blog3 = "/4.jpg";
const blog4 = "/5.webp";



const blogs = () => {

  return (
<>
    <div className="flex max-w-7xl mx-auto my-8">
      <div className="flex flex-col w-1/2 pr-8">
        <div className="bg-[#1e40af] text-white p-10">
          <h2 className="text-2xl font-bold mb-4">
            The 10 Best Online Learning Platforms – A Comprehensive Comparison
          </h2>
          <p className="mb-6 ">
            Discover the ever-expanding world of online learning platforms! With the digital transformation reshaping
            education, these platforms have become vital for personal and professional growth. The COVID-19 pandemic
            catapulted their popularity, making flexible and accessible learning the new norm. Our comprehensive
            comparison unveils the top online learning platforms, each catering to distinct needs. Whether you’re a
            creative seeking inspiration on Skillshare, a professional advancing your career on LinkedIn Learning, or a
            tech enthusiast exploring 10Pearls University’s innovative approach, there’s an option for everyone.
          </p>
          <Button className="bg-white text-[#1e40af]">Read More</Button>
          <p className="mt-4 text-right">Abdullah</p>
        </div>
      </div>
      <div className="w-1/2 pl-4 text-blue-700">
        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
        <div className="mb-4 flex">
          <div className='w-1/2 '>
          <Image
            alt="Post thumbnail"
            className="mb-2"
            height="150"
            src={blog2}
            style={{
              aspectRatio: "160/100",
              objectFit: "cover",
            }}
            width="300"
          />
          </div>
          <div className='w-1/2'>
          <h4 className="text-lg font-medium mb-1">A Comprehensive Guide to Creating Apps with Apple Vision Pro</h4>
          <Button className="text-blue-600">Read More</Button>
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/2'>
          <Image
            alt="Post thumbnail"
            className="mb-2"
            height="150"
            src={blog1}
            style={{
              aspectRatio: "160/100",
              objectFit: "cover",
            }}
            width="300"
          />
          </div>
          <div className='w-1/2'>
          <h4 className="text-lg font-medium mb-1">
            Apple Vision Pro and visionOS: A Paradigm Shift in App Development
          </h4>
          <Button className="text-blue-600">Read More</Button>
          </div>
        </div>
      </div>
    </div>

    {/* /// 2nd div// */}
      <div className="flex justify-center py-8">
      <div className="max-w-7xl w-full px-4">
        <div className="grid grid-cols-3 gap-8">
          <aside className="col-span-1">
            <h2 className="text-3xl font-bold mb-4">Categories</h2>
            <nav className="space-y-1">
              <Link className="block text-blue-900 font-bold" href="#">
                10Pearls Conferences (1)
              </Link>
              <Link className="block text-blue-900 font-bold" href="#">
                About 10PU (1)
              </Link>
              <Link className="block text-blue-900 font-bold" href="#">
                E-Learning (8)
              </Link>
              <Link className="block text-blue-900 font-bold" href="#">
                Technology (1)
              </Link>
              <Link className="block text-blue-900 font-bold" href="#">
                Techposts (9)
              </Link>
            </nav>
          </aside>
          <main className="col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <article>
                <img
                  alt="Kanban board"
                  className="mb-4"
                  height="250"
                  src={blog4}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">E-Learning</Badge>
                  <Badge variant="secondary">Techposts</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Process Management Tools – Kanban vs Scrum</h3>
                <p className="mb-2">
                  One of the core principles for a home run in a project is constant pace. Agile, an iterative approach
                  to project management abide by this rule as it breaks down the...
                </p>
                <Link className="text-blue-600 hover:underline" href="#">
                  Abdullah
                </Link>
              </article>
              <article>
                <Image
                  alt="Person typing on a laptop"
                  className="mb-4"
                  height="250"
                  src={blog3}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">E-Learning</Badge>
                  <Badge variant="secondary">Techposts</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  E-Learning is the Future – Make the Most of it with 10PU!
                </h3>
                <p className="mb-2">
                  E-learning is the way forward as they say. This couldn’t be farthest from the truth. Capitalizing on
                  that 10Pearls University has curated its portal with the latest trending tech courses an...
                </p>
                <Link className="text-blue-600 hover:underline" href="#">
                  Abdullah
                </Link>
              </article>
              <article>
                <Image
                  alt="Person typing on a laptop"
                  className="mb-4"
                  height="250"
                  src={blog3}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">E-Learning</Badge>
                  <Badge variant="secondary">Techposts</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  E-Learning is the Future – Make the Most of it with 10PU!
                </h3>
                <p className="mb-2">
                  E-learning is the way forward as they say. This couldn’t be farthest from the truth. Capitalizing on
                  that 10Pearls University has curated its portal with the latest trending tech courses an...
                </p>
                <Link className="text-blue-600 hover:underline" href="#">
                  Abdullah
                </Link>
              </article>
              <article>
                <Image
                  alt="Person typing on a laptop"
                  className="mb-4"
                  height="250"
                  src={blog3}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">E-Learning</Badge>
                  <Badge variant="secondary">Techposts</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  E-Learning is the Future – Make the Most of it with 10PU!
                </h3>
                <p className="mb-2">
                  E-learning is the way forward as they say. This couldn’t be farthest from the truth. Capitalizing on
                  that 10Pearls University has curated its portal with the latest trending tech courses an...
                </p>
                <Link className="text-blue-600 hover:underline" href="#">
                  Abdullah
                </Link>
              </article>
              
            </div>
          </main>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default blogs;