import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../Context";

export default function Login() {
  // ------ Users Contexti
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios(
      `${process.env.REACT_APP_API_KEY}basic/web/index.php/users/verify_user?email=${email}`
    );
    setEmail("");
    if (res.data.length === 0) {
      alert("kullanıcı mevcut değil");
    } else {
      localStorage.setItem("user", JSON.stringify(res.data[0]));
      setUser(res.data[0]); // gelen arr ın 0. elemanı
      navigate("/");
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="col">
          <div className="row d-flex align-center justify-content-center">
            <form
              action=""
              className="form-control "
              style={{ height: "50vh", width: "75vh" }}
            >
              <h4 className="text-center m-4">
                L
                <span className="text-danger">
                  <strong>O</strong>
                </span>
                gin Web
                <span className="text-danger">
                  <strong>OO</strong>
                </span>
                st
              </h4>
              <div className="mb-4 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              <div className="col-sm-10 text-center ms-5">
                <button onClick={handleClick} className="btn btn-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
