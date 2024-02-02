import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from "../../public/logo.png";
import Image from 'next/image';

const { Header } = Layout;
const { SubMenu } = Menu;
const { confirm } = Modal;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredAboutUs, setHoveredAboutUs] = useState(false);
  const [hoveredExplore, setHoveredExplore] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);
  const { push } = useRouter();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
  
  }, [isLoggedIn]);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleLogin = () => {
         router.push("/login");
        
    setIsLoggedIn(true); 
 };
  const handleLogout = () => {
    confirm ({
       title: 'Logout',
       icon: <ExclamationCircleOutlined />,
       content: 'Are you sure you want to logout?',
       onOk() {
         localStorage.clear('user_token');
         setIsLoggedIn(false);
         console.log('User logged out!');
         router.replace("/");
       },
       onCancel() {
         console.log('Logout canceled');
       },
    });
   };
   const handleUser = () => {
    if (isLoggedIn) {
      router.push("/userProfile");
    } else {
      alert("Please log in first!");
    }
  };

  return (
    <Header style={{ backgroundColor: 'white' }} className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <Button
        className="md:hidden"
        type="text"
        onClick={toggleCollapsed}
        style={{ color: 'black' }}
      >
        {collapsed ? '☰' : '✖'}
      </Button>
      <Menu
        mode={collapsed ? 'vertical' : 'horizontal'}
        className={`flex font-bold ${collapsed ? 'flex-col' : 'justify-between'
          } w-full ${collapsed ? 'hidden md:flex' : ''}`}
      >
        <div>
          <Link href="/">
            <Image
              src={logo}
              className="!w-[180px] !h-[80px] "
              alt={"logo musalsal university"}
            />

          </Link>

        </div>
        <div>
          <SubMenu
            key="About Us"
            title="About Us"
            onMouseEnter={() => setHoveredAboutUs(true)}
            onMouseLeave={() => setHoveredAboutUs(false)}
          >
            {hoveredAboutUs && (
              <Menu items={[
                { key: '1', label: 'Musalsal University', onClick: () => push('/about-us') },
                { key: '2', label: 'Professional Development', onClick: () => push('/profdev') },
                { key: '3', label: 'Musalsal Uni Orbit', onClick: () => push('/orbit') },
              ]} className='hover:text-blue-700 transition duration-300'>
              </Menu>
              
            )}
          </SubMenu>

          <SubMenu
            key="Explore"
            title="Explore"
            onMouseEnter={() => setHoveredExplore(true)}
            onMouseLeave={() => setHoveredExplore(false)}
          >
            {hoveredExplore && (
              <Menu items={[
                { key: '4', label: 'Webinar', onClick: () => push('/webinar') },
                { key: '5', label: <Link href={"/Allcategory"}>Courses</Link> },
                { key: '6', label: 'Events', onClick: () => push('/events') },
              ]} className='hover:text-blue-700 transition duration-100'>
              </Menu>
            )}
          </SubMenu>

          <SubMenu
            key="Services"
            title="Services"
            onMouseEnter={() => setHoveredServices(true)}
            onMouseLeave={() => setHoveredServices(false)}
          >
            {hoveredServices && (
              <Menu items={[
                { key: '7', label: 'E-learning', onClick: () => push('/e-learning') },
                { key: '8', label: 'Academia' },
                { key: '9', label: 'Corporate' },
              ]} className='hover:text-blue-700 transition duration-100'>
              </Menu>
            )}
          </SubMenu>
          <span >
            <Link className='mr-[25px]' href={"/blogs"}>Blog</Link>
            <Link href={"/contact"}>Contact Us</Link>
            {!isLoggedIn ? (
        <Button
          onClick={handleLogin}
          className='ml-[30px] text-white font-bold bg-gradient-to-r from-blue-900 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900'>
          SIGN UP/LOGIN
        </Button>
      ) : (
        <>
          <Button
            onClick={() => handleUser()}
            className='ml-[30px] text-white font-bold bg-gradient-to-r from-blue-900 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900'>
            PROFILE
          </Button>
          <Button
            onClick={handleLogout}
            className='ml-[30px] text-white font-bold bg-gradient-to-r from-blue-900 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900'>
            LOGOUT
          </Button>
        </>
      )}
            
          </span>

        </div>
      </Menu>

    </Header>
  );
};

export default Navbar;
