import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from './loading';

const Blog = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            This is blog section
        </div>
    );
};

export default Blog;