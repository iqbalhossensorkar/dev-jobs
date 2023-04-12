import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import img from '../assets/banner-icon/Vector-1.png'
import img2 from '../assets/banner-icon/Vector.png'
import { CurrencyDollarIcon, CalendarDaysIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Loading from './loading';
import { addToDb } from '../utility/fakeLocalDb';
import toast from 'react-hot-toast';

const Details = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    const [job, setJob] = useState({});
    const [addedJob, setAddedJob] = useState([]);


    const { id } = useParams();
    const featuredJobs = useLoaderData();

    const handleApplyNowJob = (id) => {
        // const existJob = addedJob.find(adJob => adJob.id === job.id)
        // let newJob = []
        // if (existJob) {
        //     console.log("ase");
        //     newJob = [...addedJob, job]
        // } else {
        //     console.log('nai');
        // }
        // setAddedJob(newJob)
        addToDb(id)
        toast.success('Job Applied SuccessFully')

    }


    useEffect(() => {
        const getJobDetails = featuredJobs.find(singleJob => singleJob.id == id)
        setJob(getJobDetails);
    }, [])

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, location, contact_information } = job;
    return (
        <>
            <div className='relative'>
                <img src={img} alt="" className='absolute -top-32 -right-4 h-24 md:h-52' />
            </div>
            <h2 className='text-center font-bold text-3xl py-16 md:py-32 bg-[#FAF8FF]'>Job Details</h2>
            <div className='relative'>
                <img src={img2} alt="" className='absolute bottom-0 h-24 md:h-52' />
            </div>
            <div className='grid md:grid-cols-3 gap-6 container mx-auto p-5 mt-32 mb-32'>
                <div className='md:col-span-2'>
                    <p className='leading-8 text-base'><span className='font-bold'>Job Description: </span><span className='font-medium text-[#757575]'>{job_description}</span></p>
                    <p className='leading-8 text-base my-6'><span className='font-bold'>Job Responsibility: </span><span className='font-medium text-[#757575]'>{job_responsibility}</span></p>
                    <p className='leading-8 text-base mt-6 mb-4'><span className='font-bold'>Educational Requirements: </span> <br /><span className='font-medium text-[#757575]'>{educational_requirements}</span></p>
                    <p className='leading-8 text-base mt-6 mb-4'><span className='font-bold'>Experiences: </span> <br /><span className='font-medium text-[#757575]'>{experiences}</span></p>
                </div>
                <div className='md:col-span-1'>
                    <div className='p-8 bg-gradient-to-r from-blue-500/[0.1] to-blue-500/[0.1] rounded-lg'>
                        <p className='font-bold text-xl'>Job Details</p> <hr className='my-6' />
                        <div className='flex items-center'>
                            <CurrencyDollarIcon fill='none' stroke='teal' className="h-6 w-6 mr-2" />
                            <p className='text-xl'><span className='font-bold'>Salary : </span><span className='font-medium text-[#757575]'>{salary}</span></p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <CalendarDaysIcon fill='none' stroke='teal' className="h-6 w-6 mr-2" />
                            <p className='text-xl'><span className='font-bold'>Job Title : </span><span className='font-medium text-[#757575]'>{job_title}</span></p>
                        </div>
                        <p className='font-bold text-xl mt-8'>Contact Information</p> <hr className='my-6' />
                        <div className='flex items-center mt-3'>
                            <PhoneIcon fill='none' stroke='teal' className="h-6 w-6 mr-2" />
                            <p className='text-xl'><span className='font-bold'>Phone : </span><span className='font-medium text-[#757575]'>{contact_information?.phone}</span></p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <EnvelopeIcon fill='none' stroke='teal' className="h-6 w-6 mr-2" />
                            <p className='text-xl'><span className='font-bold'>Email : </span><span className='font-medium text-[#757575]'>{contact_information?.email}</span></p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <MapPinIcon fill='none' stroke='teal' className="h-6 w-6 mr-2" />
                            <p className='text-xl'><span className='font-bold'>Address : </span><span className='font-medium text-[#757575]'>{location}</span></p>
                        </div>
                    </div>
                    <button onClick={() => handleApplyNowJob(id)} className='btn-all w-full h-16 mt-6'>Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default Details;

