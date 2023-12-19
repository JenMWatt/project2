import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";
import Contact from "./Contact";
import About from "./About";

function App() {
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

  return <RouterProvider router={router} />;
}
export default App;
