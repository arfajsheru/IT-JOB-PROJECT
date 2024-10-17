import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';

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
  }
]);

const App = () => {
  return (
    <>
    <RouterProvider  router={appRouter}/>

    </>
  )
}

export default App