import React from "react";
import { useEffect } from "react";
import SignupModal from "./signupModal";
import "./signup.css";

let slideIndex = 0;
// showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

const Signup = () => {
  useEffect(() => {
    showSlides();
  }, []);
  return (
    <>
      <div className="full-page-su">
        {/* <SignupModal></SignupModal> */}
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
        <i className="fas fa-grip-lines-vertical"></i>
        <div className="slideshow-container">
          <div className="mySlides fade">
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
          <div className="mySlides fade">
            <div className="info-holder2">
              <div className="left-info">
                <h2>02.</h2>
                <h2>PLAN SHORT TIME GOALS,</h2>
                <h2>PLAN FOREVER GOALS.</h2>
              </div>
              <div className="image-slide-holder">
                <div className="image-slide-02"></div>
              </div>
              <div className="right-info">
                <p>THINK OF A GOAL,</p>
                <p>JOT IT DOWN,</p>
                <p>LIVE BY IT NOW.</p>
              </div>
            </div>
          </div>
          <div className="mySlides fade">
            <div className="info-holder3">
              <div className="left-info3">
                <h2>03.</h2>
                <h2>NEVER WORK ALONE,</h2>
                <h2>WE GOT YOUR BACK.</h2>
              </div>
              <div className="image-slide-holder">
                <div className="image-slide-03"></div>
              </div>
              <div className="right-info">
                <p>WE GET IT,</p>
                <p>ORGANIZING CAN BE HARD,</p>
                <p>WE GOT YOUR BACK.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-full-page">
        <h2>VROAD IS FULL OF GREAT FEATURES</h2>
        <div className="feature-holder">
          <div className="feature-left">
            <div className="FL-upper">
              <i class="fas fa-bullseye"></i>
              <h2>SET ALL YOUR GOALS</h2>
              <p>
                JOT DOWN SHORT TERMS OR LONG TERM GOALS, THE GOAL IS TO ACHIEVE
                THEM.
              </p>
            </div>
            <div className="FL-bottom">
              <i class="fas fa-project-diagram"></i>
              <h2>TRACK ALL PROJECTS</h2>
              <p>
                KEEP TRACK OF THE STATUS OF YOUR CURRENT PROJECTS, TAKE NOTES
                AND SEE YOUR PROFOLIO GROW.
              </p>
            </div>
          </div>
          <div className="feature-mid">
            <div className="FM-upper">
              <i class="fas fa-book"></i>
              <h2>WRITE YOUR STORIES</h2>
              <p>
                JUST LIKE BOOKS EVERY PART OF YOUR LIFE HAS CHAPTERS, WHEN
                INSPIRED WRITE IT DOWN.
              </p>
            </div>
            <div className="FM-bottom">
              <i class="fas fa-tasks"></i>
              <h2>COMPLETE TASKS</h2>
              <p>
                JOT DOWN TASK DAILY, MONTHLY,YEARLY. MARK COMPLETE WHEN
                FINISHED.
              </p>
            </div>
          </div>
          <div className="feature-right">
            <div className="FR-upper">
              <i class="fas fa-link"></i>
              <h2>YOUR LINKS IN ONE PLACE</h2>
              <p>ONE PLACE TO NAVIGATE TO EVERYTHING ABOUT YOU.</p>
            </div>
            <div className="FR-bottom">
              <i class="far fa-address-card"></i>
              <h2>SHARE YOUR HABITS</h2>
              <p>
                INSPIRE OTHERS TO FOLLOW YOUR HABITS. DISCOVER NEW METHODS THAT
                IMPROVE YOURS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
