import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AllJobs from './AllJobs';

const Header = () => {
    return (
        <div className='bg-[#FAF8FF]'>
            <div className='container mx-auto p-5'>
                <div className="navbar py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to='/statistics'>Statistics</NavLink></li>
                                <li tabIndex={0}>
                                    <NavLink className="justify-between" to='/applied-jobs'>Applied Jobs</NavLink>
                                </li>
                                <li><NavLink to='/blog'>Blog</NavLink></li>
                            </ul>
                        </div>
                        <Link className="text-3xl font-bold" to='/'>Dev Jobs</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/statistics'>Statistics</Link></li>
                            <li tabIndex={0}><Link to='/applied-jobs'>Applied Jobs</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className="btn-all" to={'/'}>Start Applying</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;