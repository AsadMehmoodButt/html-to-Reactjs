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
        <img src={logo} className="mt-3 footer-logo" alt="footerLogo" />
        <p className="mt-5">© 2023 All Rights Reserved AssetRack</p>
        <div className="social-links">
          <a href="#" className="facebook">
            <img src={icon1} alt="facebookIcon" />
          </a>
          <a href="#" className="twitter">
            <img src={icon2} alt="twitterIcon"/>
          </a>
          <a href="#" className="linkedin">
            <img src={icon3} alt="linkedinIcon" />
          </a>
          <a href="#" className="google-plus">
            <img src={icon4} alt="googleplusIcon" />
          </a>
          <a href="#" className="pinterest">
            <img src={icon5} alt="pinterestIcon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
