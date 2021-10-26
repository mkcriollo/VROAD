import React from "react";
import SignUp from "./components/signup/signup";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import SignupModal from "./components/signup/signupModal";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function toggleModal() {
  let modal = document.querySelector(".main-modal-holder");

  if (modal.style.visibility === "hidden" || modal.style.visibility === null) {
    modal.style.visibility = "visible";
  } else {
    modal.style.visibility = "hidden";
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavBar toggleModal={toggleModal} />
        </nav>
        <Switch>
          <Route path="/" component={SignUp} toggleModal={toggleModal} />
        </Switch>
        <Footer></Footer>
        <SignupModal></SignupModal>
      </div>
    </Router>
  );
}

export default App;
