import React from "react";
import "./signupModal.css";

function showPassword() {
  let pass = document.getElementsByClassName("enterPassword");
  console.log(pass);

  for (let password of pass) {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
}

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
        <input
          type="password"
          placeholder="Password"
          className="enterPassword"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="enterPassword"
        />
        <div className="show-pass-hold">
          <input type="checkbox" onClick={() => showPassword()} />
          <p>Show Password</p>
        </div>
        <button>Sign Up</button>
        <p>Already have an account?</p>
      </div>
      <div className="login-info"></div>
    </div>
  );
};

export default SignupModal;
