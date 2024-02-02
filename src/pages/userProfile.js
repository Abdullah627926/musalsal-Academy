import { ProfileOutlined, SafetyCertificateOutlined, UserDeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from '@/utils/axios';
import { useRouter} from "next/router";


const userProfile = () => {
  const [user, setuser] = useState()
  const router = useRouter();

  const getUser = async () => {
    try {
      const user_id = localStorage.getItem('user_id');
      if (!user_id) {
        router.replace('/login');
        return;
      }
      console.log('🚀 ~ getUser ~ user_id:', user_id);
      const response = await axios.get(`/auth/me/${user_id}`);
      console.log('🚀 ~ getUser ~ response:', response.data);
      setuser(response?.data?.data);
    } catch (error) {
      console.log('🚀 ~ getUser ~ error:', error);
    }
  };


  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='main pt-10 pb-10'>
      <div className='flex justify-center'>
        <div className='w-[25%] text-start pt-8'>
          <Avatar size={180} icon={<UserOutlined />} />
          <div className='pt-6' >
            <h4>No file chosen</h4>
            <h2 className='pt-2 pb-2 '> <SafetyCertificateOutlined />  MY CERTIFICATES </h2>
            <h2 className='pt-2 pb-2 '> <ProfileOutlined /> EDIT PROFILE</h2>
            <h2 className='pt-2 pb-2 '> <UserDeleteOutlined /> DELETE ACCOUNT</h2>
            <button className='bg-blue-800 text-white text-lg font-semibold pl-3 pr-3 pt-1 pb-1'>MY MESSEGE</button>
          </div>
        </div>
        <div className='w-full'>
          <h1 className='pt-8  text-5xl font-bold text-blue-800'>{user?.firstName}  {user?.lastName}</h1>
          <>


            <div>

              <Tabs
                defaultActiveKey="1"
                type="card"
                size={'large'}
                items={new Array(2).fill(null).map((_, i) => {
                  const id = String(i + 1);
                  return {
                    label: `Courses ${id} `,
                    key: id,
                    children: `Content of card tab ${id} `,
                  };
                })}
              />
            </div>

          </>
        </div>
      </div>
    </div>
  )
}

export default userProfile;