import { Button } from 'antd'
import React from 'react'

const About = () => {
  return (
    <>
      {/* //div1// */}
      <div className='about-img pl-60 flex justify-center items-center relative bg-gray-200'>
        <div className='about-con pl-5'>
          <h2 className='font-medium text-blue-700 text-3xl  '>A Platform For Advance Learning, Professional
            Networking, and Tech Community Building</h2>
          <div className='flex  mt-[10px]'>
            <Button className='bg-blue-600 w-[136px] h-[52px] text-[20px] !rounded-none !px-[30px]' type="primary">Explore</Button>
          </div>

        </div>
        <img
          className=' w-[1115px] h-[540px]  object-cover'
          src="https://10pearlsuniversity.org/wp-content/uploads/2023/06/about-page-hero-2-1723x787.webp"
          alt="Description of the image"
        />
      </div>

      {/* //div2// */}
      <div className='pt-[60px] pb-[100px] ml-80 mr-80 flex justify-between content-center items-center  '>
        <div className='content-center items-center w-[50%]'>
          <img
            src='https://10pearlsuniversity.org/wp-content/uploads/2023/06/about-page-img-1-1024x689.webp'
            alt='image of meeting'
            width={"1024px"}
            height={"689px"}
          />
        </div>
        <div className='content-center items-center pl-10 w-[50%]'>
          <h1 className='font-bold text-blue-700 text-4xl p-2' >About 10Pearls University</h1>
          <p className='p-2' >
            10Pearls University, founded in 2016, is a platform for learning, networking, and tech
            community building. Our vision is to grow and strengthen the tech industry and create a more skilled
            , connected and empowered talent pool. We do this by providing free, world-class professional
            learning opportunities for all, organizing large-scale and niche technology events, and leading
            the conversation in innovation and emerging tech.
          </p>
        </div>
      </div>
      {/* //div3// */}
      <div className='pt-[60px] pb-[100px] ml-80 mr-80 flex justify-between content-center items-center  '>

        <div className='content-center items-center pr-10 w-[50%]'>
          <h1 className='font-bold text-blue-700 text-4xl p-2' >Our Story</h1>
          <p className='p-2' >
            The idea of 10Pearls University began forming roots in 2015, when 10Pearls,
            10PU’s parent company and a leading award-winning digital company, felt a significant
            gap in the skills taught by the academia and the level required by the industry. Aiming to
            bridge this gap, 10Pearls
            University officially launched in 2016, with four 8-week courses conducted on-premise.
          </p>
          <br />
          <p>Today, 10Pearls University has evolved into a career and life-enhancing ecosystem,
            meeting its manifesto through 10Pearls University, a self-service e-learning platform;
            along with community development events to
            connect and engage the tech community in Pakistan.</p>
        </div>
        <div className='content-center items-center w-[50%]'>
          <img
            src='https://10pearlsuniversity.org/wp-content/uploads/2023/06/about-page-img-2-1024x713.webp'
            alt='image of meeting'
            width={"1024px"}
            height={"689px"}
          />
        </div>
      </div>
      {/* //div4 impact div// */}
      <div className='pt-[60px] pb-[20px] ml-80 mr-80 flex justify-between content-center items-center  '>
        <div>
          <h1 className='font-bold text-blue-700 text-4xl pb-8'>Our Impact</h1>
          <p>Since its inaugural, 10Pearls University has enabled thousands
            of professionals and tech communities to upskill, connect, build, and lead the change.</p>
        </div>
      </div>

      {/* //icons start here */}
      <div className='pt-[20px] pb-[40px] ml-80 mr-80 flex flex-row item-center justify-between '>
        {/* First Icon */}
        <div className="flex flex-col items-center ">
          <svg className="" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path d="M16.1736 16.5078L10.6736 11.0078M16.1736 16.5078L9.30075 23.3807C8.3951 24.2863 7.29579 25.0014 6.03365 25.2191C4.75928 25.4388 3.17779 25.512 2.42361 24.7578C1.66944 24.0036 1.74258 22.4221 1.96237 21.1478C2.18006 19.8856 2.8951 18.7863 3.80074 17.8807L10.6736 11.0078M16.1736 16.5078C16.1736 16.5078 20.2986 12.3828 17.5486 9.63281C14.7986 6.88281 10.6736 11.0078 10.6736 11.0078M1.8125 13.5C1.8125 4.5625 4.5625 1.8125 13.5 1.8125C22.4375 1.8125 25.1875 4.5625 25.1875 13.5C25.1875 22.4375 22.4375 25.1875 13.5 25.1875" stroke="#0045A6" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round"></path>

          </svg>
          <h1 className="text-xl text-[#555] font-bold pt-3">100,000+</h1>
          <p>Resources Trained</p>
        </div>

        {/* Second Icon */}
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26" fill="none">
            <path d="M27.9231 4.55801C25.7309 2.57775 22.0378 1.83301 16.2222 1.83301C10.4066 1.83301 6.71348 2.57775 4.52127 4.55801M27.9231 
            4.55801C29.8893 6.33409 30.6481 9.10402 30.6481 13.2219C30.6481 21.931 27.2538 24.6108
             16.2222 24.6108C5.1906 24.6108 1.79626 21.931 1.79626 13.2219C1.79626 9.10402 2.5551 
             6.33409 4.52127 4.55801M27.9231 4.55801L18.3697 14.1114C17.1836 15.2974 15.2607 15.2974 
             14.0746 14.1114L4.52127 4.55801" stroke="#0045A6"
              stroke-width="2.27778" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <h1 className="text-xl pt-3 text-[#555] font-bold ">100,000+</h1>
          <p>Unique Enrollments</p>
        </div>

        {/* Third Icon */}
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M28.8889 15.2223C28.8889 22.7702 22.7701 28.889 15.2222 28.889M28.8889 15.2223C28.8889 7.67444 22.7701 1.55566 15.2222 1.55566M28.8889 15.2223H1.55554M15.2222 28.889C7.67432 28.889 1.55554 22.7702 1.55554 15.2223M15.2222 28.889C15.2222 28.889 21.2963 24.3334 21.2963 15.2223C21.2963 6.11122 15.2222 1.55566 15.2222 1.55566M15.2222 28.889C15.2222 28.889 9.14813 24.3334 9.14813 15.2223C9.14813 6.11122 15.2222 1.55566 15.2222 1.55566M1.55554 15.2223C1.55554 7.67444 7.67432 1.55566 15.2222 1.55566" stroke="#0045A6" stroke-width="2.27778"></path>
          </svg>
          <h1 className="text-xl pt-3 text-[#555] font-bold ">15+ Countries</h1>
          <p>With a Growing User Base</p>
        </div>
      </div>

      <div className='pt-[20px] pb-[40px] ml-80 mr-80 flex flex-row item-center justify-between  '>
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="29" viewBox="0 0 37 29" fill="none">
            <path d="M29.3333 18.3068C32.6879 18.3068 35.4074 22.0295 35.4074 24.8215C35.4074 26.3635 34.3876 27.6135 33.1296 27.6135H32.3704M26.2963 12.7228C28.8123 12.7228 30.8518 10.2227 30.8518 7.13873C30.8518 4.05475 28.8123 1.55469 26.2963 1.55469M8.07407 18.3068C4.71946 18.3068 2 22.0295 2 24.8215C2 26.3635 3.0198 27.6135 4.27778 27.6135H5.03704M11.1111 12.7228C8.59515 12.7228 6.55555 10.2227 6.55555 7.13873C6.55555 4.05475 8.59515 1.55469 11.1111 1.55469M25.537 27.6135H11.8704C10.6124 27.6135 9.59259 26.3635 9.59259 24.8215C9.59259 20.1681 14.1481 18.3068 18.7037 18.3068C23.2593 18.3068 27.8148 20.1681 27.8148 24.8215C27.8148 26.3635 26.795 27.6135 25.537 27.6135ZM23.2593 7.13873C23.2593 10.2227 21.2197 12.7228 18.7037 12.7228C16.1877 12.7228 14.1481 10.2227 14.1481 7.13873C14.1481 4.05475 16.1877 1.55469 18.7037 1.55469C21.2197 1.55469 23.2593 4.05475 23.2593 7.13873Z" stroke="#0045A6" stroke-width="2.27778" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <h1 className="text-xl pt-3 text-[#555] font-bold ">60+</h1>
          <p>Instructors</p>
        </div>

        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path d="M14.2222 18.2594V15.2223M14.2222 18.2594V21.2964M14.2222 18.2594C8.14817 18.2594 2.0741 16.7408 2.16714 13.7038M14.2222 18.2594C20.2963 18.2594 26.3704 16.7408 26.2774 13.7038M2.16714 13.7038C2.1076 14.6651 2.0741 15.6883 2.0741 16.7408C2.0741 21.4651 2.74899 25.5989 3.42389 26.1894C4.09879 26.7799 8.82307 27.3705 14.2222 27.3705C19.6214 27.3705 24.3457 26.7799 25.0206 26.1894C25.6955 25.5989 26.3704 21.4651 26.3704 16.7408C26.3704 15.6883 26.3369 14.6651 26.2774 13.7038M2.16714 13.7038C2.37483 10.3505 2.89936 7.75126 3.42389 7.29229C4.09879 6.70175 9.66669 6.25278 9.66669 6.25278M26.2774 13.7038C26.0697 10.3505 25.5451 7.75126 25.0206 7.29229C24.3457 6.70175 18.7778 6.25278 18.7778 6.25278M9.66669 6.25278C11.0659 6.16361 12.6141 6.11122 14.2222 6.11122C15.8304 6.11122 17.3786 6.16361 18.7778 6.25278M9.66669 6.25278V4.5927C9.66669 1.89727 12.153 1.55566 14.2222 1.55566C16.2915 1.55566 18.7778 1.89727 18.7778 4.5927V6.25278" stroke="#0045A6" stroke-width="2.27778" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <h1 className="text-xl pt-3 text-[#555] font-bold ">80+</h1>
          <p>Courses and Webinars</p>
        </div>

        <div className="flex flex-col items-center "  >
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M23.5278 12.9168H19.9907M21.0896 4.74385L17.338 8.49545M12.9167 5.8427V2.30566M8.49538 8.4955L4.74379 4.74391M5.84258 12.9168H2.30554M8.49541 17.3381L4.74381 21.0897M12.9167 23.5279V19.9908M32.3704 32.3704L18.2222 18.2223" stroke="#0045A6" stroke-width="2.65278" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <h1 className="text-xl pt-3 text-[#555] font-bold ">100+</h1>
          <p>Events Organized</p>
        </div>
      </div>
      {/* //div 4// */}
      <div className='pt-[50px] pb-[50px] ml-80 mr-80 flex justify-between content-center items-center  '>

        <div className='content-center items-center pr-10 w-[50%]'>
          <h1 className='font-bold text-blue-700 text-4xl p-2' >Growth through Multi-Platform Experiences</h1>
          <p className='p-2' >
            A trailblazer in advance tech learning and professional networking, 10Pearls University hosts online, on-ground and hybrid trainings, courses, workshops and events. Every session is a unique and fulfilling experience, catering to curious minds who aspire to grow, learn and excel in their discipline.
          </p>
          <div className='flex justify-between pt-5'>

            <div className="flex flex-col items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="29" viewBox="0 0 37 29" fill="none">
                <path d="M29.3333 18.3068C32.6879 18.3068 35.4074 22.0295 35.4074 24.8215C35.4074 26.3635 34.3876 27.6135 33.1296 27.6135H32.3704M26.2963 12.7228C28.8123 12.7228 30.8518 10.2227 30.8518 7.13873C30.8518 4.05475 28.8123 1.55469 26.2963 1.55469M8.07407 18.3068C4.71946 18.3068 2 22.0295 2 24.8215C2 26.3635 3.0198 27.6135 4.27778 27.6135H5.03704M11.1111 12.7228C8.59515 12.7228 6.55555 10.2227 6.55555 7.13873C6.55555 4.05475 8.59515 1.55469 11.1111 1.55469M25.537 27.6135H11.8704C10.6124 27.6135 9.59259 26.3635 9.59259 24.8215C9.59259 20.1681 14.1481 18.3068 18.7037 18.3068C23.2593 18.3068 27.8148 20.1681 27.8148 24.8215C27.8148 26.3635 26.795 27.6135 25.537 27.6135ZM23.2593 7.13873C23.2593 10.2227 21.2197 12.7228 18.7037 12.7228C16.1877 12.7228 14.1481 10.2227 14.1481 7.13873C14.1481 4.05475 16.1877 1.55469 18.7037 1.55469C21.2197 1.55469 23.2593 4.05475 23.2593 7.13873Z" stroke="#0045A6" stroke-width="2.27778" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <h1 className="text-xl pt-3 text-blue-700 font-bold ">Online</h1>
              <p>Convenient access from anywhere in the world</p>
            </div>
            <div className="flex flex-col items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                <path d="M14.2222 18.2594V15.2223M14.2222 18.2594V21.2964M14.2222 18.2594C8.14817 18.2594 2.0741 16.7408 2.16714 13.7038M14.2222 18.2594C20.2963 18.2594 26.3704 16.7408 26.2774 13.7038M2.16714 13.7038C2.1076 14.6651 2.0741 15.6883 2.0741 16.7408C2.0741 21.4651 2.74899 25.5989 3.42389 26.1894C4.09879 26.7799 8.82307 27.3705 14.2222 27.3705C19.6214 27.3705 24.3457 26.7799 25.0206 26.1894C25.6955 25.5989 26.3704 21.4651 26.3704 16.7408C26.3704 15.6883 26.3369 14.6651 26.2774 13.7038M2.16714 13.7038C2.37483 10.3505 2.89936 7.75126 3.42389 7.29229C4.09879 6.70175 9.66669 6.25278 9.66669 6.25278M26.2774 13.7038C26.0697 10.3505 25.5451 7.75126 25.0206 7.29229C24.3457 6.70175 18.7778 6.25278 18.7778 6.25278M9.66669 6.25278C11.0659 6.16361 12.6141 6.11122 14.2222 6.11122C15.8304 6.11122 17.3786 6.16361 18.7778 6.25278M9.66669 6.25278V4.5927C9.66669 1.89727 12.153 1.55566 14.2222 1.55566C16.2915 1.55566 18.7778 1.89727 18.7778 4.5927V6.25278" stroke="#0045A6" stroke-width="2.27778" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <h1 className="text-xl pt-3 text-blue-700 font-bold ">On-Premise</h1>
              <p>Custom-built learning and networking spaces</p>
            </div>

            <div className="flex flex-col items-start "  >
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M23.5278 12.9168H19.9907M21.0896 4.74385L17.338 8.49545M12.9167 5.8427V2.30566M8.49538 8.4955L4.74379 4.74391M5.84258 12.9168H2.30554M8.49541 17.3381L4.74381 21.0897M12.9167 23.5279V19.9908M32.3704 32.3704L18.2222 18.2223" stroke="#0045A6" stroke-width="2.65278" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <h1 className="text-xl pt-3 text-blue-700 font-bold ">Hybrid</h1>
              <p>Experience the
                best of both the mediums</p>
            </div>
          </div>
        </div>

        <div className='content-center items-center w-[50%]'>
          <img
            src='https://10pearlsuniversity.org/wp-content/uploads/2023/06/about-page-img-3-1-1024x916.webp'
            alt='image of meeting'
            width={"1024px"}
            height={"689px"}
          />
        </div>
      </div>
      {/* ///div 5// */}
      <div className='pt-[50px] pb-[50px] ml-80 mr-80 flex justify-between content-center items-center  '>
        <div className='content-center items-center w-[50%]'>
          <img
            src='	https://10pearlsuniversity.org/wp-content/uploads/2023/06/about-page-img-4-1024x756.webp'
            alt='image of meeting'
            width={"1024px"}
            height={"689px"}
          />
        </div>
        <div className='content-center items-center pl-10 w-[50%]'>
          <h1 className='font-bold text-blue-700 text-4xl p-2' >10PU E-Learning Platform</h1>
          <p className='p-2' >
          The 10Pearls University e-learning platform offers self-paced online courses, and webinars on in-demand technologies to enhance skillsets, and enable individual and industry growth. All our sessions are hands-on, based on real-world problems, and targeted towards professionals of varying disciplines.
          </p>
          <ul>
            <li>Access anywhere, anytime</li>
            <li>Free top-quality courses and webinars</li>
            <li>Master latest tech and trends</li>
            <li>Learn from skilled industry professionals</li>
            <li>Earn industry-recognized certificates</li>
          </ul>
        </div>
      </div>
      {/* //div 6// */}
      <div className='pt-[60px] pb-[100px] ml-80 mr-80 flex justify-between content-center items-center  '>

        <div className='content-center items-center pr-10 w-[50%]'>
          <h1 className='font-bold text-blue-700 text-4xl p-2' >Events and Networking – Connect, Share & Empower</h1>
          <p className='p-2' >
          10Pearls University organizes various public and community events aimed at engaging and nurturing the tech community. These initiatives facilitate industry liaison for like-minded technology enthusiasts to learn from, and challenge, one another.
          </p>
          <ul>
            <li>Flagship conferences and expos on emerging technologies</li>
            <li>Competitions and hackathons to build skills and encourage healthy competition</li>
            <li>Niche tech community meetups to connect like-minded people</li>
            <li>Seminars and webinars on trending topics and technological advancements</li>

          </ul>
        </div>
        <div className='content-center items-center w-[50%]'>
          <img
            src='https://10pearlsuniversity.org/wp-content/uploads/2023/06/about-page-img-5-1024x756.webp'
            alt='image of meeting'
            width={"1024px"}
            height={"689px"}
          />
        </div>
      </div>
    </>
  )
}

export default About;