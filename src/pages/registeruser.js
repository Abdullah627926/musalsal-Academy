import React from 'react';
import { Form, Image, Input, Button, Checkbox, message } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from '@/utils/axios';

const RegisterPage = () => {
    const router = useRouter();
    const onFinish = async (values) => {
        try {
            const response = await axios.post('/auth/signup', values);
            message.success('Registration successful. Please login.');
            router.push("/login");
        } catch (error) {
            console.error('Registration failed:', error);
            message.error("User with this email already exists");
        }
    };

    const onFinishFailed = (errorInfo) => {
    };

    return (
        <div className="flex items-center h-screen bg-gray-100">
            <Image
                src={"https://10pearlsuniversity.org/wp-content/themes/masterstudy-child/stm-lms-templates/custom_assets/img/register-1.jpg"}
                className="!w-[97%] !h-[97%]"
                preview={false}
            />
            <div className="w-full max-w-md mx-auto pr-[100px]">
                <h1 className='font-bold text-5xl ml-20 mb-10 flex justify-center text-blue-800 '>Register</h1>

                <Form
                    className='font-medium'
                    name="registerForm"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="FirstName"
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your firstname!' }]}
                    >
                        <Input className='px-5 border rounded-sm w-96 pt-2 pb-2' placeholder='Enter your firstname' />
                    </Form.Item>
                    <Form.Item
                        label="LastName"
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your lastname!' }]}
                    >
                        <Input className='px-5 border rounded-sm w-96 pt-2 pb-2' placeholder='Enter your Lastname' />
                    </Form.Item>

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

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password className='px-5 border rounded-sm w-96 pt-2 pb-2' placeholder='Confirm your password' />
                    </Form.Item>

                    <Form.Item valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className='w-full font-bold p-1 bg-blue-800 rounded-none' type="primary" htmlType="submit" >
                            Register
                        </Button>
                    </Form.Item>
                    <Link className='flex justify-center ml-20 text-blue-800' href={"/login"}>Already a member? Login here</Link>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;
