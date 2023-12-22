import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import pic1 from "../assests/brands-waste.png";
import pic2 from "../assests/brands-megmeet.png";
import pic3 from "../assests/brands-LG.png";
import pic4 from "../assests/brands-chimei.png";
import pic5 from "../assests/Component 26 – 1.png";
import pic6 from "../assests/Subtraction 3.svg";
import 'swiper/swiper-bundle.css';
import Autoplay from '../../node_modules/swiper/modules/autoplay.mjs';
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);

const OurPartner = () => {

  const breakpoints = {
    567: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  };
  return (
    <div className="our-partner-slider mt-5">
      <div className="patternimg">
        <img src={pic6} className="subtraction3" alt="" />
      </div>
      <div className="container text-center swiper our-partner text-lg-start ">
        <p className="mt-5 text-muted text-size ms-4">Who endorse our work</p>
        <div className="row shows m-0">
          <div className="col-sm-6 col-xl-3 col-lg-12 col-md-12">
            <h2 className="fw-bold font-set">Trusted By:</h2>
          </div>
          <div className="col-sm-6 offset-sm-1 offset-md-3 pb-md-3 offset-lg-1 offset-xl-0 col-md-12 col-xl-9 swiper-ourClients">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              breakpoints={breakpoints}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide className="top">
                <img src={pic1} alt="Partner Logo" />
              </SwiperSlide>
              <SwiperSlide className="top">
                <img src={pic2} alt="Partner Logo" />
              </SwiperSlide>
              <SwiperSlide className="top">
                <img src={pic3} alt="Partner Logo" />
              </SwiperSlide>
              <SwiperSlide className="top">
                <img src={pic4} alt="Partner Logo" />
              </SwiperSlide>
              <SwiperSlide className="top">
                <img src={pic5} alt="Partner Logo" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
