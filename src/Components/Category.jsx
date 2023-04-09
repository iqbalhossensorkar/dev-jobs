import React from 'react';

const Category = ({category}) => {
    const {id, category_logo, category_name, job_available} = category;
    return (
        <div className='p-5 bg-[#FAF8FF] rounded-lg mb-4 '>
            <div className='p-4 bg-[#EFECFF] w-max rounded-lg'>
            <img src={category_logo} alt="" className='h-10 w-10 '/>
            </div>
            <h1 className='text-xl font-semibold mt-8'>{category_name}</h1>
            <p className='sub-title'>{job_available}+ Job Available</p>
        </div>
    );
};

export default Category;