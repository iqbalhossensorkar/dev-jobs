import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './loading';
import img from '../assets/banner-icon/Vector-1.png'
import img2 from '../assets/banner-icon/Vector.png'
import AppliedCard from './AppliedCard';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Applied = () => {
    const navigation = useNavigation();
    const { initialJob } = useLoaderData()
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='relative'>
                <img src={img} alt="" className='absolute -top-32 -right-4 h-24 md:h-52' />
            </div>
            <h2 className='text-center font-bold text-3xl py-16 md:py-32 bg-[#FAF8FF]'>Applied Jobs</h2>
            <div className='relative'>
                <img src={img2} alt="" className='absolute bottom-0 h-24 md:h-52' />
            </div>
            <div className='min-h-screen'>
                {/* <h1>{initialJob.length}</h1> */}
                <div className='container mx-auto p-5 text-right'>
                    <div className="dropdown dropdown-end mt-32 mb-8">
                        <label tabIndex={0} className="flex items-center p-5 bg-[#F4F4F4] rounded-lg">Filter by <ChevronDownIcon className='h-6 w-6'></ChevronDownIcon></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Onsite</a></li>
                            <li><a>Remote</a></li>
                        </ul>
                    </div>
                    <div>
                        {
                            initialJob.map(job => <AppliedCard key={job.id} job={job}></AppliedCard>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Applied;