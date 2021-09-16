import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <div className="full-page-su">
        <div className="top-su">
          <h2>YOUR DOSE OF PRODUCTIVITY</h2>
          <p>PLAN YOUR GOALS, PLAN YOUR LIFE, PLAN YOUR VROAD</p>
          <div className="goal-input">
            <input type="text" name="" id="" placeholder="TODAY I WILL.." />
            <button>GO</button>
          </div>
        </div>
        <div className="bottom-su"></div>
        <div className="app-example"></div>
      </div>
      <div className="info-page">
        <i class="fas fa-grip-lines-vertical"></i>
        <div className="info-holder">
          <div className="left-info">
            <h2>01.</h2>
            <h2>INSPIRE OTHERS,</h2>
            <h2>BE INSPIRED.</h2>
          </div>
          <div className="image-slide-holder">
            <div className="image-slide-01"></div>
          </div>
          <div className="right-info">
            <p>POST YOUR GOALS, ROUTINES, LIFESTYLE</p>
            <p>SHARE AND LET OTHERS BE INSPIRED</p>
            <p>BE INSPIRED BY OTHERS VROADS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
