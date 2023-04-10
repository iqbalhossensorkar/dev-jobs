import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import First from './Components/First';
import Applied from './Components/Applied';
import Blog from './Components/Blog';
import ErrorPage from './Components/ErrorPage';
import AllJobs from './Components/AllJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <First></First>,
        loader: () => fetch('fakeJobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied-jobs',
        element: <Applied></Applied>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
