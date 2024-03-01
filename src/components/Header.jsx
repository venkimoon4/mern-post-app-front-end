import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { TbBrandGoogleHome } from "react-icons/tb";
import { IoMdLogIn } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { FaChalkboardUser } from "react-icons/fa6";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    if(confirm("Confirm Logout?")){
    setUser({ email: null, posts: [] });
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    navigate("/");
    }
  };

  return (
    <>
      <header>
        <nav>
          <NavLink style={{textDecoration:"none",color:"white",textAlign:"center"}} to="/" >
          <TbBrandGoogleHome style={{color:"white",fontSize:"2rem"}}/>
          <p style={{fontSize:"1rem"}}>Home</p>
          </NavLink>
          <div>
            {user.email ? (
              <div>
                <Link
                  style={{textDecoration:"none",color:"white",textAlign:"center"}}
                  to="create"
                ><IoIosCreate/>
                <p style={{fontSize:"1rem"}}>Create</p>
                </Link>
                <Link
                  to="dashboard"
                  style={{textDecoration:"none",color:"white",textAlign:"center"}}
                ><FaChalkboardUser/>
                <p style={{fontSize:"1rem"}}>
                  Dashboard
                </p>
                </Link>
                <button className="link" onClick={handleLogout}>
                <LiaSignOutAltSolid/>
                <p style={{fontSize:"1rem"}}>
                  Logout
                </p>
                </button>
              </div>
            ) : (
              <div>
                <Link style={{textDecoration:"none",color:"white",textAlign:"center"}} to="/login">
                <IoMdLogIn style={{fontSize:"2rem"}}/>
                <p style={{fontSize:"1rem"}}>Login</p>
                </Link>
                <Link style={{textDecoration:"none",color:"white",textAlign:"center"}} to="/register">
                  <FaUserEdit style={{fontSize:"2rem"}}/>
                  <p style={{fontSize:"1rem"}}>Register</p>
                  </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
