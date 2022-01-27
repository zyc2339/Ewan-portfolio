import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="portfolio">
      {" "}
      <h1>PROJECTS</h1>
      <hr></hr>
      <div className="box">
        <div className="card">
          <img className="img" src="/image/intern-project.png" alt="" />
          <div className="mask">
            <h3>Internship Project</h3>
            <p className="technology">React JS/Express/MongoDB/Heroku</p>
            <p className="description">
              This is the project I am working on now. So far we have built
              login and sign-up system with both front-end and back-end. Other
              components will be added soon.
            </p>

            <button className="btn">
              <a
                href="https://vexplore-mvp.netlify.app/"
                target="_blank"
                title="vexplore"
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
    </div>
  );
}
