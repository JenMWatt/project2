import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Contact from "./Contact";
import Map from "./map";
import About from "./About";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/map" element={<Map />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}


root.render(
  <StrictMode>
    <Home />
    <RouterProvider router={router} />
  </StrictMode>,
);

export default App;

