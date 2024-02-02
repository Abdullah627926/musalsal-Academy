import axios from '@/utils/axios';
import { Image, Form, Input, Button, Checkbox, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const loginpage = () => {
    const { replace } = useRouter()
    const onFinish = async (values) => {
        try {
            const response = await axios.post('/auth/login', values);
            localStorage.setItem("token", response?.data?.token)
            localStorage.setItem("user_id", response?.data?.user?._id)
            replace("/userProfile")
        } catch (error) {
            console.error('Login failed:', error);
            message.error('Login failed. Please check your credentials.');
        }
    };

    const onFinishFailed = (errorInfo) => {
    };
    return (
        <>
            <div className='flex justify-center h-[full] bg-white'>
                <div className='w-full sm:w-1/2'>
                    <Image
                        src={"https://10pearlsuniversity.org/wp-content/themes/masterstudy-child/stm-lms-templates/custom_assets/img/login-1.jpg"}
                        className="!w-[100%] !h-[100%]"
                        preview={false}
                    />
                </div>
                <div className='hidden sm:block pl- w-full sm:w-1/2'>
                    <div className="h-4/6">
                        <h1 className='font-bold pl-24 pt-24 text-blue-800 !text-[22px] mb-2'>Login</h1>
                        <Form
                            className='text-start mr-96 mt-12 font-medium'
                            name="loginForm"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Invalid email format!' },
                                ]}
                            >
                                <Input className='px-5 border rounded-sm w-96 pt-2 pb-2' placeholder='Enter your email' />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password className='px-5 border rounded-sm w-96 pt-2 pb-2' placeholder='Enter your password' />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button className='w-full font-bold p-1 bg-blue-800 rounded-none' type="primary" htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                            <Link className='flex justify-center mr-8 text-blue-800' href={"/registeruser"}>New? Register here</Link>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

// Export the loginpage component
export default loginpage;
