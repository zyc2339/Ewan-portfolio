import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Countdown from "./portfolio/countdown/countdown";
import FadeIn from "react-fade-in";

export default function Portfolio() {
  return (
    <FadeIn className="portfolio">
      {" "}
      <h1>PROJECTS</h1>
      <hr></hr>
      <FadeIn className="container" delay="500" transitionDuration="4000">
        <div className="box">
          <div className="card">
            <img className="img" src="/image/intern-project.png" alt="" />
            <div className="mask">
              <h3>Internship Project</h3>
              <p className="technology">React JS/Express/MongoDB/Heroku</p>
              <p className="description">
                This is the MVP project I am working on now. Currently, we
                almost finished front-end and working on backend and database.
              </p>
              {/* <button className="btn">
                <a
                  href="https://vexplore-mvp.netlify.app/"
                  target="_blank"
                  title="vexplore"
                  rel="noreferrer"
                >
                  VIEW SITE
                </a>
              </button> */}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="card">
            <img className="img" src="/image/airbnb.png" alt="" />
            <div className="mask">
              <h3>Airbnb Project</h3>
              <p className="technology">React JS/Mui/MongoDB</p>
              <div className="description-with-btn">
                <p>One week project with UX designer.</p>
                <div>
                  <button className="btn1">
                    <a
                      href="https://github.com/zyc2339/Airbnb-mission7"
                      target="_blank"
                      title="airbnb"
                      rel="noreferrer"
                    >
                      <FaGithub /> Front-end
                    </a>
                  </button>
                  <button className="btn1">
                    <a
                      href="https://github.com/zyc2339/Airbnb-backend"
                      target="_blank"
                      title="airbnb"
                      rel="noreferrer"
                    >
                      <FaGithub /> Back-end{" "}
                    </a>
                  </button>
                </div>
              </div>
              <button className="btn">
                <a
                  href="https://mission7-seeya.netlify.app"
                  target="_blank"
                  title="airbnb"
                  rel="noreferrer"
                >
                  VIEW SITE
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="card">
            <img className="img" src="/image/ewan-shop-mobile.png" alt="" />
            <div className="mask">
              <h3>Online shop practice</h3>
              <p className="technology">React JS/Stripe/Begin</p>
              <p className="description">
                Using Stripe create product API/complete checkout process.
              </p>
              <button className="btn">
                {" "}
                <a
                  href="https://sleepy-pare-597b55.netlify.app/"
                  target="_blank"
                  title="ewan-shop"
                  rel="noreferrer"
                >
                  VIEW SITE
                </a>
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
      <h1>other practice</h1>
      <hr></hr>
      <div className="container">
        <div className="box">
          <div className="card">
            <Countdown />
            <div className="mask">
              <h3>Countdown Clock</h3>
              <p className="technology">React JS</p>
              <p className="description">
                Using React Hooks create a countdown clock.
              </p>
              <button className="btn1">
                <a
                  href="https://github.com/zyc2339/react-countdown"
                  target="_blank"
                  title="countdown"
                  rel="noreferrer"
                >
                  <FaGithub /> GITHUB{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
