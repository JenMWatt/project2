import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import AuthProvider from "./AuthContext";
import Home from "./Home";
import Map from "./Map";
import Contact from "./Contact";
import About from "./About";

function App() {
  const [auth, setAuth] = useState(null);

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
  return (
    <AuthProvider {...{ auth, setAuth }}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
