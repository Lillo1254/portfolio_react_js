import { createBrowserRouter } from "react-router";
import AboutMe from "../page/AboutMe";
import App from "../App";

export const router = createBrowserRouter([
    {
    path: "/",
    Component: App,
    
  },
  {
    path: "/about-me",
    Component: AboutMe,
    
  },
]);