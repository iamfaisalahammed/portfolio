import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import ProjectOne from "./Home/Section/Details/ProjectOne";
import ProjectTwo from "./Home/Section/Details/ProjectTwo";
import ProjectThree from "./Home/Section/Details/ProjecrThree";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "Project-1/",
    element: <ProjectOne></ProjectOne>,
  },
  {
    path: "Project-2/",
    element: <ProjectTwo></ProjectTwo>,
  },
  {
    path: "Project-3/",
    element: <ProjectThree></ProjectThree>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
