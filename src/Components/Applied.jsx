import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from './loading';

const Applied = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-24'>Applied Jobs</h1>
        </div>
    );
};

export default Applied;