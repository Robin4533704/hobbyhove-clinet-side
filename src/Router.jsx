import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./layout/MainLayOut";
import Home from "./page/Home";
import AuthLayout from "./AuthLayout/AuthLayout";
import Login from "./page/Login";
import Register from "./page/Register";
import CreateGroup from "./page/CreatGrups";
import AllGroups from "./page/AllGroups";
import GroupDetails from "./page/GroupsDetails";
import MyGroups from "./page/MyGroups";
import PrivetRoute from "./Components/PrivetRoute";
import ErrorPage from "./Components/profiles/Errorpage";
import UpdateProfile from "./Components/Navber.jsx/updateprofile";
import EditGroup from "./page/EditGroup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/creategrupe",
        element: (
          <PrivetRoute>
            <CreateGroup />
          </PrivetRoute>
        ),
      },
      {
    path: "/updateprofile",
    element:<PrivetRoute> <UpdateProfile/></PrivetRoute>
      },
      {
        path: "/AllGroups",
        element: (
          <PrivetRoute>
            <AllGroups />
          </PrivetRoute>
        ),
      },
      { path: "/group/edit/:id", element: <EditGroup/>},
      {
        path: "/group/:id",
        element: (
          <PrivetRoute>
            <GroupDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/mygroups",
        element: (
          <PrivetRoute>
            <MyGroups />
          </PrivetRoute>
        ),
      },
    ],
  },

  // 🔥 Auth routes আলাদা রাখা হলো
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
