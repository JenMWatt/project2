import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";
import Contact from "./Contact";
import About from "./About";
import Login from './components/Signin.component';
import SignUp from './components/Signup.component';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Map",
    element: <Map />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />

  </StrictMode>,
);
