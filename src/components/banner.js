import React from "react";
import subtraction2 from "../assests/Subtraction 2.svg";
import arrow from "../assests/cycle-arrow.svg";
import bannerimg from "../assests/bannerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <section id="home" className="banner-wrapper">
      <img src={subtraction2} className="pattern" alt="subtractionImgage" />
      <div className="container banner-content">
        <div className="row align-items-center flex-sm-column flex-md-row flex-lg-row content-row">
          <div className="col-md-12 col-lg-5 my-5 mt-md-5 my-md-0 text-center ">
            <p className="banner-subtitle">Over 25,000 Active</p>
            <h1 className="banner-title">Accounts .</h1>
            <p className="banner-title-text text-white">
              Manage up to 250+ assets for Free * Guaranteed best practices for
              cloud-based assets management!
            </p>
            <div className="learn-more-btn-section">
              <a
                className="nav-link learn-more-btn btn-header text-white"
                href="#about"
              >
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} className="me-2"/>
                Rate 5 stars by independent users
              </a>
            </div>
          </div>
          <div className="col-xl-1 col-lg-2 col-md-3 mt-md-5 header-img-section">
            <img src={arrow} className="arrow" alt="arrow" />
          </div>
          <div className="col-xl-5 col-lg-4 col-md-7 mt-md-5 offset-md-0 me-md-5  header-img-section">
            <div className="position-relative">
              <img
                src={bannerimg}
                className="img-fluid bannerimg"
                alt="Banner"
              />
              <div className="lottie-wrapper position-absolute top-0 start-0 end-0 bottom-0 ">
                <lottie-player
                  src="https://lottie.host/7883bec9-7157-46e2-ad79-2d96a2664e5c/hBJjsIsjm8.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
