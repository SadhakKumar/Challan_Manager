import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <Link to="/">
                <img src="/logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="footer-text">
              <p>
                Lorem ipsum od chet diologi. Bell traheb, samuliget, ohebel
                utom diska. Jinesade bel har feras redorede i belegi. FAR
                paratyp i muaning, och pesak vysfiat. Viktiga podrađio
                har un mad och inde.
              </p>
            </div>
            <div className="footer-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-pages">
              <h3>Pages</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/demo">Demo</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-services">
              <h3>Service</h3>
              <ul>
                <li>
                  <Link to="/">Shopify</Link>
                </li>
                <li>
                  <Link to="/">Wordpress</Link>
                </li>
                <li>
                  <Link to="/">UI/UX Design</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;