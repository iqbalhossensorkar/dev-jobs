import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from './loading';
import img from '../assets/banner-icon/Vector-1.png'
import img2 from '../assets/banner-icon/Vector.png'

const Blog = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='relative'>
                <img src={img} alt="" className='absolute -top-32 -right-4 h-24 md:h-52' />
            </div>
            <h2 className='text-center font-bold md:text-3xl py-16 md:py-32 bg-[#FAF8FF]'>Inteview Question Blogs</h2>
            <div className='relative'>
                <img src={img2} alt="" className='absolute bottom-0 h-24 md:h-52' />
            </div>
            <article className='mt-32 mb-8 container mx-auto px-8 md:px-80'>
                <h1 className='text-4xl font-medium'>When should you use <span className='font-bold'>context API</span>?</h1>
                <p className='mt-7'>Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.</p>
                <ul className='ml-5'>
                    <li className='my-3'>
                        If you have data that needs to be accessed by multiple components, but passing down props through multiple levels of nested components, you can use the Context API to provide that data to components, without having to pass props through components.
                    </li>
                    <li className='my-3'>
                        When you want to avoid prop drilling
                    </li>
                    <li className='my-3'>
                        By using the Context API, you can provide a clear separation of concerns and encapsulate the data that components need to operate independently.
                    </li>
                    <li className='my-3'>
                        When you need to provide data to deeply nested components
                    </li>
                </ul>

                <h1 className='text-4xl font-medium mt-16'>What is a <span className='font-bold'>custom hook</span>?</h1>
                <p className='mt-7'>In React, a custom hook is a JavaScript function that follows a specific naming convention and allows you to reuse stateful logic across different components. Custom hooks are a way to encapsulate reusable logic in a separate function, making it easy to share and manage stateful logic across multiple components in a React application.</p>
                <p className='my-3'>A Custom Hook has following featuresa:</p>
                <ul className='ml-5'>
                    <li className='my-3'>
                        As a function, it takes input and returns output.
                    </li>
                    <li className='my-3'>
                        It's name start's with 'use' like- useQuery, useMedia.....
                    </li>
                    <li className='my-3'>
                        Unlike functional components custom hooks returns a normal, non-jsx data.
                    </li>
                    <li className='my-3'>
                        Unlike normal function, custom hook can use other hooks such as- useState, useRef... and other custom hooks.
                    </li>
                </ul>
                <p className="mt-5 mb-3 text-xl font-medium">Why and when to use <strong>React</strong> Custom Hook?</p>
                <ul className='ml-5'>
                    <li className='my-3'>
                        Completely separate logic from UI.
                    </li>
                    <li className='my-3'>
                        Reusable in many different components with the same processing logic. Therefore, the logic only needs to be fixed in the place if it changes.
                    </li>
                    <li className='my-3'>
                        When the logic is too long and complicated, we can write it in another file. So that the component is shorter and easier to read.
                    </li>
                </ul>

                <h1 className='text-4xl font-medium mt-16'>
                    What is <span className='font-bold'> useRef</span>?
                </h1>
                <p className='my-3'>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>
                <ul className='ml-5'>
                    <li className='my-3'>
                        Call useRef at the top level of your component to declare one or more refs.
                    </li>
                    <li className='my-3'>
                        useRef returns an object with a single property
                    </li>
                    <li className='my-3'>
                        You can mutate the <strong>ref.current</strong> property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.
                    </li>
                    <li className='my-3'>
                        When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.
                    </li>
                    <li className='my-3'>
                        Changing a ref does not trigger a re-render.
                    </li>
                    <li className='my-3'>
                        Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen.
                    </li>
                </ul>

                <h1 className='text-4xl font-medium mt-16'>
                    What is <span className='font-bold'>useMemo</span>?
                </h1>
                <p className='my-3'>
                    useMemo is a built-in hook in React that allows you to memoize the result of a computation and only recompute it when its dependencies change. It helps optimize the performance of your React components by preventing unnecessary recalculations of expensive computations.
                </p>
                <ul className='ml-5'>
                    <li className='my-3'>
                        The useMemo hook takes two arguments: a function to compute the memoized value, and an array of dependencies that the memoized value depends on. The memoized value is only recomputed when one of the dependencies in the dependency array changes. If none of the dependencies change, the previously computed memoized value is returned, avoiding unnecessary computations.
                    </li>
                    <li className='my-3'>
                        useMemo is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
                    </li>
                    <li className='my-3'>
                        React will not throw away the cached value unless there is a specific reason to do that.
                    </li>
                    <li className='my-3'>
                        You need to pass two things to useMemo
                    </li>
                    <li className='my-3'>
                        calculation function
                    </li>
                    <li className='my-3 mb-20'>
                        list of dependencies
                    </li>
                </ul>
            </article>
        </>

    );
};

export default Blog;