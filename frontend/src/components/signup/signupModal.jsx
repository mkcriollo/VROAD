import React from "react";
import "./signupModal.css";

const SignupModal = (props) => {
  return (
    <div className="main-modal-holder">
      <div className="modal-icon-holder">
        <div className="modal-title-holder">
          <h2>VROAD</h2>
          <p>Discover new ways to be organize, teach others your Success.</p>
        </div>
        <div className="modal-pic-holder">
          <div className="modal-icon"></div>
          <p>Art By Leadership</p>
        </div>
      </div>
      <div className="signup-info">
        <h2>Create Account</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <br />
        <button>Sign Up</button>
        <p>Already have an account?</p>
      </div>
      <div className="login-info"></div>
    </div>
  );
};

export default SignupModal;
