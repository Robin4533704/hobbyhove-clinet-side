import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./index.css";
import { AuthProvider } from "./AuthLayout/auth/AuthProvider";
import { ThemeProvider } from "./layout/ThemProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
     </ThemeProvider>
    
  </React.StrictMode>
);
