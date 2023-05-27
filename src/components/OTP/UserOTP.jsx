import React, { Fragment } from 'react';
import "./UserOTP.css";


const UserOTP = () => {
  return (
    <Fragment>
     
    <div className='otp-cotainer'>
    <div className=" header-container">
        <Link className="navbar-brand nav-brand" to={"/usersign/signin"}>
          <h1>SOLGURUZ</h1>
        </Link>
      </div>
      <div className='hs'>
      <h2>Enter OTP</h2>
      <h4>Enter the OTP</h4>
      </div>
      <div className = "otp-input">
      <label>OTP</label>
      <input type="text" placeholder='Enter OTP' />
      <button className='btn-submit'>Submit Now</button>
      </div>
      <p className='back'> Back to sing in</p>
    </div>
    </Fragment>
  );
}

export default UserOTP
