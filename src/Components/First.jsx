import React, { useEffect, useState } from 'react'
import img from '../assets/img/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import AllJobs from './AllJobs';

const First = () => {
    // const categories = useLoaderData();
    const jobs = useLoaderData();
    const [job, setJobs] = useState(false)

    return (
        <>
            <div className='bg-[#FAF8FF]'>
                <div className='container mx-auto px-5'>
                    <div className='md:flex justify-between items-center align-middle'>
                        <div>
                            <h1 className='text-3xl md:text-7xl font-bold md:leading-[100px]'>One Step <br /> Closer To Your <br /> <span className='text-gradient'>Dream Job</span></h1>
                            <p className='sub-title'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className='btn-all my-6'>Get Started</button>
                        </div>
                        <img src={img} alt="" className='md:h-[744px]' />
                    </div>
                </div>
            </div>
            <section>
                <h1 className='sub-heading'>Job Category List</h1>
                <p className='sub-title text-center py-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-6 my-5 container mx-auto p-5 lg:px-14">
                    {/* {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    } */}
                </div>
            </section>
            <section>
                <h1 className='sub-heading'>Featured Jobs</h1>
                <div className='grid md:grid-cols-2 justify-center items-center gap-6 my-5 container mx-auto p-5'>
                    {jobs.slice(0, 4) &&
                        jobs.map(job => <AllJobs key={job.id} job={job}></AllJobs>)
                    }
                </div>
            </section>
            <div className='text-center'>
            <button className='btn-all mb-32'>See All Jobs</button>
            </div>
        </>
    );
};

export default First;