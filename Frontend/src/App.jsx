import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Jobs from './Pages/Jobs';
import Browse from "./Pages/Browse"
import Profile from './Pages/Profile';
import JobDetails from './Pages/JobDetails';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobdetails/:id",
    element: <JobDetails />
  },
  {
    path:"/jobs",
    element: <Jobs />
  },
  {
    path:"/browse",
    element: <Browse />
  },
  {
    path:"/profile",
    element: <Profile />
  },
]);

const App = () => {
  return (
    <>
    <RouterProvider  router={appRouter}/>
    </>
  )
}

export default App