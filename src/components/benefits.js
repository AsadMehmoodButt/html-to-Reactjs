import React from "react";
import { benefitsData } from "./data/benefitsData";

const Benefits = () => {
  return (
    <section id="menu" className="menu-wrapper">
      <h1>Benefits</h1>
      <p className="text-center"></p>
      <div className="container">
        <div className="row text-transform text-center">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-center position-relative">
                  <dotlottie-player
                    src="https://lottie.host/3af17bec-7563-4101-9fd3-c897beee405d/H8L5mUqBQK.json"
                    background="transparent"
                    speed="1"
                    class="dotlottie-player"
                    loop
                    autoplay
                  ></dotlottie-player>

                  {benefit.image && <img src={benefit.image} alt="" />}
                  <h3>{benefit.title}</h3>
                  <p className="fst-italic">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
