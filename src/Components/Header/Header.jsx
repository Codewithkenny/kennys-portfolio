import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="hero-container">
      <div className="home__content">
        <div className="home__meta">
          <h1 className="home__text pz__10">Hi, I'm Kenny Agbomeji</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">Back End Developer</div>
              <div className="i-title-item">MERN Stack Developer</div>
              <div className="i-title-item">Chef</div>
              <div className="i-title-item">Mixologist</div>
            </div>
          </div>
          <h4 className="home__text pz__10">based in Nigeria</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
