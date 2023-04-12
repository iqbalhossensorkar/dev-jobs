import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Home;