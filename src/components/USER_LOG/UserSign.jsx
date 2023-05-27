import { Route, Routes, Link, Outlet } from "react-router-dom";
import UserSingUp from "./usersingup/UserSignUp";
import React from "react";
import "./UserSign.css";

const UserSing = () => {
  return (
    <div className="usersing">
      <div className=" header-container">
        <Link className="navbar-brand nav-brand" to={"/usersign/signin"}>
          <h1>SOLGURUZ</h1>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<UserSingUp />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
};

export default UserSing;
