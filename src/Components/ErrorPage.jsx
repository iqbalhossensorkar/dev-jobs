import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { ArrowUturnLeftIcon, FaceFrownIcon } from '@heroicons/react/24/solid'

const Error = () => {
    const error = useRouteError();
    const { data, status, statusText } = error;

    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <FaceFrownIcon className="h-24 w-24 text-[#5d5858]" />
                    <h1 className='text-9xl text-[#5d5858] font-bold'>{status}</h1>
                    <h1 className='font-bold text-[#5d5858] text-4xl'>{statusText}</h1>
                    <h1 className='text-blue-500'>{data}</h1>
                    <Link to='/'><button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 focus:outline-none mt-10">
                        <ArrowUturnLeftIcon className="h-5 w-5" />
                        <span>Back</span>
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;