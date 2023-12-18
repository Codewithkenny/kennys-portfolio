import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"

function FooterComp() {
  return (
    <div className="footer__text">
      <p className="p__text">&copy; 2022 Kenny Agbomeji. All rights reserved</p>
      <p className="p__text">Developed by Kenny .P. Agbomeji</p>
      <Link to="scroll-top d-flex align-items-center justify-content-center text-light"><i className="bi bi-arrow-up-short"></i></Link>
    </div >
    

  );
}

export default FooterComp;
