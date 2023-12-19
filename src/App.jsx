import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Layout";
import AuthProvider from "./AuthContext";
import Home from "./Home";
import Region from "./Region";
import Mmiw from "./Mmiw";
import Login from "./Login";
import Signup from "./Signup";
import Map from "./Map";
import Contact from "./Contact";
import About from "./About";
import AddForm from "./AddForm";
import UploadJson from "./UploadJson";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

function App() {
  const [auth, setAuth] = useState(null);
  const [data, setData] = useState(null);
  const [regions, setRegions] = useState(null);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home regions={regions} />,
        },
        {
          path: "/region",
          element: <Region data={data} />,
        },
        {
          path: "/mmiw",
          element: <Mmiw data={data} />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/map",
          element: <Map />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/addform",
          element: <AddForm />,
        },
        {
          path: "/uploadjson",
          element: <UploadJson />,
        },
      ],
    },
  ]);

  useEffect(() => {
    async function getData() {
      const regionSet = new Set();
      const newData = [];
      const querySnapshot = await getDocs(collection(firestore, "mmiw"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const document = doc.data();
        document.id = doc.id;
        newData.push(document);
        if ("region" in document) {
          regionSet.add(document.region);
        }
      });
      setRegions(Array.from(regionSet));
      setData(newData);
    }
    getData();
  }, []);

  return (
    <AuthProvider {...{ auth, setAuth }}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
