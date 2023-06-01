import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/">How it works</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">TikTok</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
