import "./index.css";
import "./responsive.css"
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// pages
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

