import React from "react";
import "./navbar.css";

let counter = 0;
let changeWord = document.getElementById("change-words");

let words = ["LIFE", "PLANS", "VROAD"];

setInterval(change, 1000);

function change() {
  if (changeWord === null) {
    changeWord = document.getElementById("change-words");
  }
  changeWord.innerHTML = words[counter];
  counter++;
  if (counter >= words.length) {
    counter = 0;
  }
}

const NavBar = ({ toggleModal }) => {
  // this nav bar return is if there is no user login
  return (
    <div className="full-navbar">
      <div className="details-nav-holder">
        <i className="fas fa-ellipsis-v"></i>
        <div className="holder-message-nav">
          <p>YOUR</p>
          <p id="change-words"></p>
        </div>
      </div>
      <h2>VROAD</h2>
      <button className="login-btn" onClick={toggleModal}>
        CREATE YOUR VROAD
      </button>
    </div>
  );
  // we will create another nav bar for when a user is login
};

export default NavBar;
