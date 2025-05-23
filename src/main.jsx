import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import MainLayOut from './layout/MainLayOut.jsx'
import Home from './Components/Home.jsx'
import Addhobby from './Addhobby.jsx'
import UpdateHobby from './Components/UpdateHobby.jsx'
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
   }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
