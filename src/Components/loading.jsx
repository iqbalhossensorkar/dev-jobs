import React from 'react';
import Lottie from "lottie-react";
import loading from '../assets/140468-bound-loading.json'

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-100px)]">
            <Lottie animationData={loading} loop={true}></Lottie>
        </div>
    );
};

export default Loading;