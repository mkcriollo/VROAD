import React from "react";
import SignUp from "./components/signup/signup";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
