import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./UserSignUp.css";
import { toast, ToastContainer } from "react-toastify";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");
  function passwordClick() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  }
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  function confirmPasswordClick() {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else if (confirmPasswordType === "text") {
      setConfirmPasswordType("password");
    }
  }

  const isValid = () => {
    let isValidValue = true;
    let error = "please enter valid value in ";
    if (fName === null || fName === "") {
      isValidValue = false;
      error += " First name";
    }
    if (lName === null || lName === "") {
      isValidValue = false;
      error += " Last Name ";
    }
    if (email === null || email === "") {
      isValidValue = false;
      error += " Email ";
    }
    if (password === null || password === "") {
      isValidValue = false;
      error += " password ";
    }
    if (confirmPassword === null || confirmPassword === "") {
      isValidValue = false;
      error += " confirm  password";
    }
    if (!isValidValue) {
      toast.warning(error);
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        isValidValue = false;
        toast.warning("Enter the valid Emain");
      }
      if (password !== confirmPassword) {
        isValidValue = false;
        toast.warning("password not match");
      }
    }

    return isValidValue;
  };

  function handelSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/users").then((res) => {
      console.log(res.data);
    });
    let USER_DATA = { id, fName, lName, email, password, confirmPassword };
    if (isValid()) {
      fetch("http://localhost:8000/users", {
        method: "POST",
        body: JSON.stringify(USER_DATA),
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          console.log(res);
          toast.success("Register successfuly");
          navigate("/usersign/signin");
        })
        .catch((err) => {
          toast.err("Faild: " + err.message);
        });
      setFName("");
      setLName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <Fragment>
      <div className="sing-container">
        <form onSubmit={handelSubmit}>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <nav className="nav-sign">
                <NavLink
                  className="activeSign-in"
                  ActiveClassName="sign-in"
                  to="/usersign/signin"
                >
                  Sing In
                </NavLink>
                <NavLink
                  className="btn activeSign-up"
                  style={{
                    color: "white",
                    backgroundColor: "rgb(29, 27, 129)",
                  }}
                  ActiveClassName="sign-up"
                  to="/usersign/signup"
                >
                  Sing Up
                </NavLink>
              </nav>
              <div className="mb-3">
                <label>First Name</label>
                <input
                  className="form-control"
                  label="First Name"
                  type="text"
                  name="fName"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Last Name</label>

                <input
                  className="form-control"
                  label="Last Name"
                  type="text"
                  name="lName"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Email</label>

                <input
                  className="form-control"
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setId(e.target.value);
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 signup-password">
                <label>Password</label>

                <input
                  className="form-control"
                  label="Password"
                  type={passwordType}
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
              <div className="mb-3 signup-confirm-password">
                <label>Confirm Password</label>

                <input
                  className="form-control"
                  label="Confirm password"
                  type={confirmPasswordType}
                  name="confirmPass"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                {confirmPasswordType === "password" ? (
                  <VisibilityIcon
                    onClick={confirmPasswordClick}
                    className="btn-eye-confirm"
                  />
                ) : (
                  <VisibilityOffIcon
                    className="btn-eye-confirm"
                    onClick={confirmPasswordClick}
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
        </form>
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export default UserSignUp;
