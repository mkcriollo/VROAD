import React from "react";
import { useState } from "react";
import "./signupModal.css";
import signUpPic from "../../assests/modal-icon.png";
import welcomePic from "../../assests/welcome-back.png";

function showPassword() {
  let pass = document.getElementsByClassName("enterPassword");

  for (let password of pass) {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
}

function handleUserInput(e) {
  const value = e.target.value;
}

function submitUserForm() {
  let name = document.querySelector(".enterName");
  let password = document.querySelector(".enterPassword");
  // let confirmPassword = document.getElementById("confirmedPassword");

  // if (password == confirmPassword) {
  // } else {
  //   alert("Password doesn't match");
  // }

  console.log(name);
  console.log(password);
}

const SignupModal = ({ toggleModal }) => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");

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
            alt="Modal-icon"
          ></img>
          <p>Art By Leadership</p>
        </div>
      </div>
      <div className="signup-info">
        <div className="closing-modal-holder">
          <i className="fas fa-times" onClick={() => toggleModal()}></i>
        </div>
        <h2>{login === true ? "Welcome Back" : "Create Account"}</h2>
        <form className="signup-info-form" onSubmit={() => submitUserForm()}>
          <input
            type="text"
            placeholder="Name"
            className="enterName"
            onChange={(e) => handleUserInput(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="enterPassword"
            onChange={(e) => handleUserInput(e)}
          />
          <input
            style={login === true ? { display: "none" } : { display: "block" }}
            type="password"
            placeholder="Confirm Password"
            className="enterPassword"
            id="confirmPassword"
          />
          <div className="show-pass-hold">
            <input type="checkbox" onClick={() => showPassword()} />
            <p>Show Password</p>
          </div>
          <input
            id="submit-userInfo"
            type="submit"
            value={login === true ? "Login In" : "Sign Up"}
          ></input>
        </form>
        <p onClick={() => setLogin(!login)}>
          {login === true ? "Create an Account!" : "Already Have an Account?"}
        </p>
      </div>
      <div className="login-info"></div>
    </div>
  );
};

export default SignupModal;
