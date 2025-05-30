import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import MainLayOut from './layout/MainLayOut.jsx'
import Addhobby from './Addhobby.jsx'
import UpdateHobby from './Components/UpdateHobby.jsx'
import Home from './layout/Home.jsx'
import Login from './Components/login/Login.jsx'
import Sigin from './Components/login/Sigin.jsx'
const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayOut,
   children:[
   {
     index: true,
    Component: Home
   },
   {
    path: "/addhobby",
    Component: Addhobby
   },
   {
    path: "updatehobby/:id",
    Component: UpdateHobby,
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
