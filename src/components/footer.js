import React from "react";
import icon1 from "../assests/facebookicon.svg";
import icon2 from "../assests/twittericon.svg";
import icon3 from "../assests/linkedin.svg";
import icon4 from "../assests/googleicon.svg";
import icon5 from "../assests/pinterest.svg";
import logo from "../assests/whitelogo.png";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <img src={logo} className="mt-3 footer-logo" alt="" />
        <p className="mt-5">© 2023 All Rights Reserved AssetRack</p>
        <div className="social-links">
          <a href="#" className="twitter">
            <img src={icon1} alt="" />
          </a>
          <a href="#" className="facebook">
            <img src={icon2} />
          </a>
          <a href="#" className="instagram">
            <img src={icon3} alt="" />
          </a>
          <a href="#" className="google-plus">
            <img src={icon4} />
          </a>
          <a href="#" className="linkedin">
            <img src={icon5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
