import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import Link from 'next/link';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredAboutUs, setHoveredAboutUs] = useState(false);
  const [hoveredExplore, setHoveredExplore] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header style={{ backgroundColor: 'white' }} className="flex text-[20px] w-full h-20">
      <Button
        className="md:hidden"
        type="text"
        onClick={toggleCollapsed}
        style={{ color: 'black' }}
      >
        {collapsed ? '☰' : '✖'}
      </Button>
      <Menu
        mode="horizontal"
        className={`flex font-bold justify-between w-full ${
          collapsed ? 'hidden md:flex' : ''
        }`}
      >
        <div>
          <Menu.Item key="logo" style={{ padding: '0' }}>
            <img
              src="https://10pearlsuniversity.org/wp-content/uploads/2021/02/10PU-footer-logo.png"
              alt="Logo"
              style={{ height: '64px', width: 'auto' }}
            />
          </Menu.Item>
        </div>
        <div>
          <SubMenu
            key="About Us"
            title="About Us"
            onMouseEnter={() => setHoveredAboutUs(true)}
            onMouseLeave={() => setHoveredAboutUs(false)}
          >
            {hoveredAboutUs && (
              <Menu className='hover:text-blue-700 transition duration-300'>
                <Menu.Item key="1">Musalsal University</Menu.Item>
                <Menu.Item key="2">Professional Development</Menu.Item>
                <Menu.Item key="3">Musalsal Uni Orbit</Menu.Item>
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
              <Menu className='hover:text-blue-700 transition duration-100'>
                <Menu.Item key="4">Webinar</Menu.Item>
                <Menu.Item key="5">
                  <Link href={"./Allcategory"}>Courses</Link>
                </Menu.Item>
                <Menu.Item key="6">Events</Menu.Item>
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
              <Menu>
                <Menu.Item key="7">E-learning</Menu.Item>
                <Menu.Item key="8">Acadmeia</Menu.Item>
                <Menu.Item key="9">Corporate</Menu.Item>
              </Menu>
            )}
          </SubMenu>

          <Menu.Item key="link1">
            <Link href={"blogs"}>Blog</Link>
          </Menu.Item>
          <Menu.Item key="link2">
            <Link href={"contact"}>Contact Us</Link>
          </Menu.Item>
          <Menu.Item className="ml-[30px]">
            <Button className='bg-blue-600' type="primary">
              SIGN UP/LOGIN
            </Button>
          </Menu.Item>
        </div>
      </Menu>
    </Header>
  );
};

export default Navbar;
