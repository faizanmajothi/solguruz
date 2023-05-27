import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./UserSignIn.css";
import { toast } from "react-toastify";

const UserSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  function passwordClick() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  }

  function isValid() {
    let isValidValue = true;
    let error = "please enter valid value in ";
    if (email === "" || email === null) {
      isValidValue = false;
      error += "email ";
    }
    if (password === "" || password === null) {
      isValidValue = false;
      error += "password ";
    }
    if (!isValidValue) {
      toast.warning(error);
    }
    return isValidValue;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (isValid()) {
      fetch("http://localhost:8000/users/" + email)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          if (Object.keys(res).length === 0) {
            toast.error("Enter the valid email");
          } else {
            if (res.password === password) {
              toast.success("You are Log In");

              navigate("/home");
            } else {
              toast.error(" Invalid Password ");
            }
          }
        })
        .catch((err) => {
          toast.error("failed: " + err.message);
        });
      setEmail("");
      setPassword("");
    }
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="sing-container">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <nav className="nav-sign">
                <NavLink className="activeSign-in" to="/usersign/signin">
                  Sing In
                </NavLink>
                <NavLink
                  className="btn activeSign-up "
                  style={{
                    color: "white",
                    backgroundColor: "rgb(29, 27, 129)",
                  }}
                  to="/usersign/signup"
                >
                  Sing Up
                </NavLink>
              </nav>
              <div className="mb-3 ">
                <label className="mb-2 ">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 signin-password">
                <label className="mb-2 ">Password</label>
                <input
                  type={passwordType}
                  className="form-control mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordType === "password" ? (
                  <VisibilityIcon
                    onClick={passwordClick}
                    className="btn-eye-pass"
                  />
                ) : (
                  <VisibilityOffIcon
                    className="btn-eye-pass"
                    onClick={passwordClick}
                  />
                )}
              </div>

              <div className="d-grid">
                <button type="submit" className="btn">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default UserSignIn;
