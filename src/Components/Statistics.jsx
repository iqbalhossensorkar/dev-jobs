import React from 'react';
import Loading from './loading';
import { useNavigation } from 'react-router-dom';

const Statistics = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Statistics</h1>
        </div>
    );
};

export default Statistics;