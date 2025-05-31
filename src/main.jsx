import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import MainLayOut from './layout/MainLayOut.jsx'
import UpdateHobby from './Components/UpdateHobby.jsx'
import Home from './layout/Home.jsx'
import Login from './Components/login/Login.jsx'
import Sigin from './Components/login/Sigin.jsx'
import Footer from './Components/Footer.jsx'
import Banner from './Components/banner/Banner.jsx'
import AddNewCar from './AddNewCar.jsx'
import UppdateCar from './Components/UppdateCar.jsx'
import CarsDetails from './Components/banner/CarsDetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayOut,
   children:[
   {
     index: true,
     loader: () => fetch('http://localhost:3000/cars'),
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
    Component: AddNewCar
   },
   {
    path: "/updatecare/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`),
    Component: UppdateCar
   },
   {
      path: "/carsdetails/:id",
      Component:  CarsDetails,
   },
   {
    path: '/login',
    Component: Login,
   },
   {
    path: "/sigin",
    Component: Sigin,
   }
   
   ]
   
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
