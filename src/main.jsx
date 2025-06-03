import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import MainLayOut from './layout/MainLayOut.jsx'
import Home from './layout/Home.jsx'

import Footer from './Components/Footer.jsx'
import Banner from './Components/banner/Banner.jsx'
import AddNewCar from './AddNewCar.jsx'
import UppdateCar from './Components/UppdateCar.jsx'
import CarsDetails from './Components/banner/CarsDetails.jsx'
import AuthProvider from './firebase/AuthProvider.jsx'

import Sigin from './Components/login/Sigin.jsx'
import Login from './Components/login/Login.jsx'
import AuthLayout from './layout/AuthLayout.jsx'
import MyGroup from './layout/MyGroup.jsx'
import MyProfile from './layout/MyProfile.jsx'
import ErrorPage from './Components/profiles/Errorpage.jsx'
import PrivetRoute from './Components/PrivetRoute.jsx'
import EditeProfiles from './Components/profiles/EditeProfiles.jsx'
import Loading from './Components/banner/Loading.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
   errorElement: <ErrorPage/>,
   children:[
   {
    
     index: true,
     loader: () => fetch('https://hobby-lamberghini-car-server.vercel.app/cars'),
       hydrateFallbackElement: <Loading></Loading>,
    Component: Home
   },
   {
     path: "/banner",
     Component: Banner,
   },
  
   {
    path: "/footer",
    Component: Footer,
   },
   {
    path: "/addnewcar",
    element: <AddNewCar></AddNewCar>
   },
   {
    path: "/updatecare/:id",
    loader: ({ params }) => fetch(`https://hobby-lamberghini-car-server.vercel.app/cars/${params.id}`),
    Component: UppdateCar,
      hydrateFallbackElement: <Loading></Loading>
   },
   {
   path: "/mygroup",
   loader: () => fetch('https://hobby-lamberghini-car-server.vercel.app/cars'),
   element: <MyGroup></MyGroup>,
     hydrateFallbackElement: <Loading></Loading>
   },
   {
      path: "/myprifile",
      element: <MyProfile></MyProfile>
   },
   {
    path: "/editProfile",
    element: <EditeProfiles/>
   },

   {
      path: "/carsdetails/:id",
      loader: () => fetch('https://hobby-lamberghini-car-server.vercel.app/cars'),
      element: <PrivetRoute><CarsDetails></CarsDetails></PrivetRoute>,
      hydrateFallbackElement: <Loading></Loading>

   },
 
   ]
   
  },
  {
      path: "/auth",
   Component: AuthLayout,
    children:[
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/sigin",
        Component: Sigin
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
