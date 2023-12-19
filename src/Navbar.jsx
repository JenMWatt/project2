import { useContext } from "react";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
        //navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      <h1>MMIW road map</h1>{" "}
      <div className="nav">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Map">Map</NavLink>
          <NavLink to="/About">About</NavLink>
        </nav>
        {auth && auth.currentUser ? (
          <button onClick={handleLogout}> Logout </button>
        ) : (
          <button onClick={() => navigate("/login")}> Login </button>
        )}
      </div>
    </header>
  );
}
