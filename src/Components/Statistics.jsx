import React from 'react';
import Loading from './loading';
import { useNavigation } from 'react-router-dom';
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
        <div className=''>

            <div className='container mx-auto mt-32 mb-8'>
                {/* <ResponsiveContainer height={400}>
                    <LineChart width={1000} height={300} data={marksArray}>
                        <Line stroke="#8884d8" dataKey="physics" activeDot={{ r: 8 }}></Line>
                        <Line dataKey="chemistry" stroke="#82ca9d" />
                        <Line dataKey="math" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer> */}
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
        </div>
    );
};

export default Statistics;