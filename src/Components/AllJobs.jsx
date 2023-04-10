import React from 'react';
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const AllJobs = ({ job }) => {
    console.log(job);
    const { company_logo, company_name, job_title, remote_or_onsite, fulltime_or_parttime, salary, location, id } = job;
    return (
        <div className='p-10 border border-[#E8E8E8] rounded-lg'>
            <img src={company_logo} alt="" className='h-10' />
            <h3 className='mt-9 font-bold text-2xl text-[#474747]'>{job_title}</h3>
            <p className='mt-2 text-[#757575] font-semibold'>{company_name}</p>
            <div className='my-4'>
                <button className='text-gradient text-base font-bold px-5 py-2 border rounded-md mr-4 border-blue-500'>{remote_or_onsite}</button>
                <button className='text-gradient text-base font-bold px-5 py-2 border rounded-md mr-4 border-blue-500'>{fulltime_or_parttime}</button>

            </div>
            <div className="flex justify-normal items-center mt-4 mb-6">
                <MapPinIcon fill='none' stroke='#474747' className="h-6 w-6 mr-2" />
                <p className='mr-6 text-[#757575] font-semibold'>{location}</p>
                <CurrencyDollarIcon fill='none' stroke='#474747' className="h-6 w-6 mr-2" />
                <p className='text-[#757575] font-semibold'>{salary}</p>
            </div>
            <button className='btn-all'>View Details</button>
        </div>
    );
};

export default AllJobs;