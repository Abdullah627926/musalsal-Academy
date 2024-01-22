"use client";
import { Spin } from 'antd';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => setLoading(true);
        const done = () => setLoading(false);

        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', done);
        Router.events.on('routeChangeError', done);

        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', done);
            Router.events.off('routeChangeError', done);
        };
    }, []);
    // console.log("loading", loading)

    return loading ? (
        <div className='flex justify-center items-center '>
            <Spin size="large" />
        </div>
    ) : null;
};

export default Loading;
