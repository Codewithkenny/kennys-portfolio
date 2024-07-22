import React from "react";
import "./AboutComp.css";
import img1 from "../img/kenny2.jpg";
import { Link } from "react-router-dom";
import MyDoc from "../img/poju-fe.pdf";

function AboutComp() {
  return (
    <div className="about_component_space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={img1} alt="img1" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color text-light fs-6">
                I am a highly motivated and detail-oriented software developer with over a year of experience in the industry. With a strong background in both front-end and back-end technologies, I have developed a diverse set of skills and a passion for creating intuitive and user-friendly software.
              </p>
              <p className="about__text p__color text-light fs-6">
                I have a proven track record of delivering projects on time and within budget, and I enjoy working with a team to find creative solutions to complex problems. I also believe in staying up to date with the latest technologies and industry trends to ensure that I am providing the best possible service to my clients
              </p>
              <p className="about__text p__color text-light fs-6">
                Whether working on a new application or improving an existing one, I am dedicated to delivering high-quality software that exceeds expectations. I look forward to the opportunity to bring my skills and experience to your project.
              </p>
              <div className="about__button d__flex align__items__center">
                <Link to={MyDoc} target="_blank" download={MyDoc}>
                  <button className="about btn pointer">Download CV</button>
                </Link>
                <a href="https://github.com/Codewithkenny" target="_blank" rel="noopener noreferrer">
                  <button className="about btn pointer">GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
