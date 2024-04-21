import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer_main"><div className="online fbox">
        <h3>ONLINE STORE</h3>
        <ul>
          <li><a href="">MEN CLOTHING</a></li>
          <li><a href="">WOMEN CLOTHING</a></li>
          <li><a href="">MEN ACCESSORIES</a></li>
          <li><a href="">WOMEN ACCESSORIES</a></li>
        </ul>
      </div>
      <div className="links fbox">
        <h3>HELPFUL LINKS</h3>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
      <div className="partners fbox">
        <h3>PARTNERS</h3>
        <ul>
          <li><a href="">ZARA</a></li>
          <li><a href="">PANTALOONS</a></li>
          <li><a href="">LEVIS</a></li>
          <li><a href="">UCB</a></li>
          <li><a href="">+ MANY MORE</a></li>
        </ul>
      </div>
      <div className="address fbox">
        <h3>ADDRESS</h3>
        <ul>
          <li>BUILDING 101</li>
          <li>CENTRAL AVENUE</li>
          <li>LA - 902722</li>
          <li>UNITED STATES</li>
        </ul>
      </div>
      </div>
      <div className="founder">
        <a href="https://www.linkedin.com/404/">© Priyanka Sharma</a><span>|</span>
        <a href="https://www.edyoda.com/">EDYODA</a>
      </div>
    </div>
  );
};

export default Footer;
