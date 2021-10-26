import React from "react";
import { useState } from "react";
import "./signupModal.css";
import signUpPic from "../../assests/modal-icon.png";
import welcomePic from "../../assests/welcome-back.png";

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

const SignupModal = ({ toggleModal }) => {
  const [login, setLogin] = useState(false);

  return (
    <div className="main-modal-holder">
      <div className="modal-icon-holder">
        <div className="modal-title-holder">
          <h2>VROAD</h2>
          <p>Discover new ways to be organize, teach others your Success.</p>
        </div>
        <div className="modal-pic-holder">
          <img
            className="modal-icon"
            src={login === true ? welcomePic : signUpPic}
          ></img>
          <p>Art By Leadership</p>
        </div>
      </div>
      <div className="signup-info">
        <div className="closing-modal-holder">
          <i class="fas fa-times" onClick={() => toggleModal()}></i>
        </div>
        <h2>{login === true ? "Welcome Back" : "Create Account"}</h2>
        <input type="text" placeholder="Name" className="enterName" />
        <input
          type="password"
          placeholder="Password"
          className="enterPassword"
        />
        <input
          style={login === true ? { display: "none" } : { display: "block" }}
          type="password"
          placeholder="Confirm Password"
          className="enterPassword"
        />
        <div className="show-pass-hold">
          <input type="checkbox" onClick={() => showPassword()} />
          <p>Show Password</p>
        </div>
        <button>{login === true ? "Login In" : "Sign Up"}</button>
        <p onClick={() => setLogin(!login)}>
          {login === true ? "Create an Account!" : "Already Have an Account?"}
        </p>
      </div>
      <div className="login-info"></div>
    </div>
  );
};

export default SignupModal;
