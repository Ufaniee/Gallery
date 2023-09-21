import React from 'react';
import Image from "./Image/download.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Image} alt="Logo" />
            <h2>Anietie Joseph</h2>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com/ufaniee"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.ufaniee"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.ufaniee"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anietie Joseph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
