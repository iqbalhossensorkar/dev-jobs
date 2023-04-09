import React from 'react'
import img from '../assets/img/P3OLGJ1 copy 1.png'

const First = () => {
    return (
        <div className='bg-[#FAF8FF]'>
            <div className='container mx-auto p-5'>
                <div className='md:flex justify-between items-center align-middle'>
                    <div>
                        <h1 className='text-3xl md:text-7xl font-bold md:leading-[100px]'>One Step <br /> Closer To Your <br /> <span className='text- bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent'>Dream Job</span></h1>
                        <p className='font-medium text-[#757575] text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-all my-6'>Get Started</button>
                    </div>
                    <img src={img} alt="" className='md:h-[744px]' />
                </div>
            </div>
        </div>
    );
};

export default First;