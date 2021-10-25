import React from "react";
import SignUp from "./components/signup/signup";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
