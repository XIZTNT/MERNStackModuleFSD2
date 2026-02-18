import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import Login from "./components/Login"; // 👈 import login component
import "./index.css";

// Axios setup for cookies
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5050";

const router = createBrowserRouter([
  // Login route (top-level)
  {
    path: "/login",
    element: <Login />,
  },

  // Authorized routes (nested under App)
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",           // default home
        element: <RecordList />,
      },
      {
        path: "/edit/:id",
        element: <Record />,
      },
      {
        path: "/create",
        element: <Record />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
