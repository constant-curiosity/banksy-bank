import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { publicRoutes } from "./routes/Public";
import { privateRoutes } from "./routes/Private";
import { callbackRoutes } from "./routes/CallBack";

const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  ...callbackRoutes,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
