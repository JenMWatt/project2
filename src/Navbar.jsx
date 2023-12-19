import { useContext } from "react";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  let name = null;
  if (auth && auth.currentUser) {
    //console.log(auth.currentUser);
    const { displayName, email } = auth.currentUser;
    name = displayName || email;
  }

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
      <div className="navdiv">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/map">Map</NavLink>
          <NavLink to="/about">About</NavLink>
            {auth && <>
                <NavLink to="/addform">Add</NavLink>
                <NavLink to="/uploadjson">Upload</NavLink>
            </>}
          {auth && auth.currentUser ? (
            <button onClick={handleLogout}> Logout </button>
          ) : (
            <>
              <button onClick={() => navigate("/login")}> Login </button>
            </>
          )}
        </nav>
      </div>
      {name && <div>{name}</div>}
    </header>
  );
}
