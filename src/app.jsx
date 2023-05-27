import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import UserOTP from "./components/OTP/UserOTP";
import { Routes, Route, Navigate } from "react-router-dom";
import UserSignUp from "./components/USER_LOG/usersingup/UserSignUp";
import UserSign from "./components/USER_LOG/UserSign";
import Home from "./components/home/Home";
import UserSignIn from "./components/USER_LOG/usersignin/UserSignIn";
import { ToastContainer } from "react-toastify";
import AddData from "./components/home/AddData";
import Edit from "./components/home/Edit";
import View from "./components/home/View";

const App = () => {
  return (
    <Fragment>
      <ToastContainer theme="colored"></ToastContainer>
      <Routes>
        {/* for sing in or sing up page prefert this route
            1> run npx json-server --watch src/data/db.json --port 8000
            2> you first sign up then direct go to sign in page
            3> after successfully sign in (with Auth) 
            4> directly go to home page 
        */}
        <Route path="/" exact element={<Navigate to="/usersign" />}></Route>
        <Route path="/usersign" element={<UserSign />}>
          <Route path="signup" element={<UserSignUp />} />
          <Route path="signin" element={<UserSignIn />} />
        </Route>

        
        {/* for home page prefert this route
          1> successfully sign in you navigate to home page
          2> then you can create data 
          3> apply CRUD oppration on that data 
          4> search filter also avalable  
        */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/add" element={<AddData />}></Route>
        <Route path="/home/edit/:id" element={<Edit />}></Route>
        <Route path="/home/view/:id" element={<View />}></Route>

      {/* My system Creating some issue soo i completed this much 
      
      */}

        <Route path="/otp" element={<UserOTP />}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
