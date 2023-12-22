import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/package.json";
import SwiperCore from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import pic1 from "../assests/testimonial-profile-1.png";
import pic2 from "../assests/testimonial-profile-2.png";
import arrow from "../assests/arrow.svg";
import "../../node_modules/swiper/swiper-bundle.css";
import Pagination from "../../node_modules/swiper/modules/pagination.min.mjs";
SwiperCore.use([Pagination]);
const Testimonial = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-sm-12 d-lg-flex mg review-content">
            <header className="section-header">
              <p className="review">Reviews</p>
              <p className="text-testimon">Clients words</p>
              <p className="text-testimonial mt-4">About us</p>
              <button className="btn border border-2 btnPos">
                Check All Reviews
              </button>
              <div className="bullets">
                <div className="swiper-pagination"></div>
              </div>
            </header>

            <section className="main"></section>

            <Swiper
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="200"
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              centeredSlides={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
              breakpoints={breakpoints}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index} className={`swiper-slide`}>
                  <div className="testimonial-item">
                    <div className="profile mt-auto">
                      <img
                        src={index % 2 === 0 ? pic1 : pic2}
                        className="testimonial-img"
                        alt="profile-photo"
                      />
                      <h3>
                        {index % 2 === 0 ? "Sara Wilsson" : "John Larson"}
                      </h3>
                      <p className="dateset">Written on March 25, 2019</p>
                      <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        {index % 2 === 0
                          ? "Export tempor illum tamen noster fugiat irure amet legam anim culpa."
                          : "Quis quorumm nulla illum cillum fugiat legam esse veniam Quis quorumm nulla illum cillum fugiat legam esse veniam Quis quorumm nulla illum cillum fugiat legam esse veniam Quis quorumm nulla illum cillum fugiat legam esse veniam Quis quorumm nulla illum cillum fugiat legam esse veniam ."}
                      </p>
                    </div>
                    <div className="arrow-img">
                      <img src={arrow} className="text-end" alt="arrowImg" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
