import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../Context";

export default function Navbar() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const Quit = () => {
    localStorage.removeItem("user");
    setUser({});
    navigate("/Login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Weboost
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user.email ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contacts">
                    Contacts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Users">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link" to="/Users">
                    Hello, {user.firstname}
                  </span>
                </li>
                <li className="nav-item">
                  <span onClick={Quit} className="nav-link" to="/Users">
                    Quit
                  </span>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
