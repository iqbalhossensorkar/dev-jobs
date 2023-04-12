import React from 'react';
import Loading from './loading';
import { useNavigation } from 'react-router-dom';
import img from '../assets/banner-icon/Vector-1.png'
import img2 from '../assets/banner-icon/Vector.png'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';



const Statistics = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    const data = [
        { id: 1, marks: 60, assignment: "A1" },
        { id: 2, marks: 56, assignment: "A2" },
        { id: 3, marks: 60, assignment: "A3" },
        { id: 4, marks: 58, assignment: "A4" },
        { id: 5, marks: 57, assignment: "A5" },
        { id: 6, marks: 53, assignment: "A6" },
        { id: 7, marks: 60, assignment: "A7" },
        { id: 8, marks: 60, assignment: "A8" }
    ];
    return (
        <>
            <div className='relative'>
                <img src={img} alt="" className='absolute -top-32 -right-4 h-24 md:h-52' />
            </div>
            <h2 className='text-center font-bold md:text-3xl py-16 md:py-32 bg-[#FAF8FF]'>Assignment Analytics</h2>
            <div className='relative'>
                <img src={img2} alt="" className='absolute bottom-0 h-24 md:h-52' />
            </div>
            <div className='container mx-auto mt-32 mb-8'>
                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="assignment" />
                            <defs>
                                <linearGradient id="colorAssignment" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="marks" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAssignment)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Statistics;