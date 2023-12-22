import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row flex-sm-column-reverse flex-xl-row">
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 ">
            <div className="align-items-stretch video-box">
              <a
                href="https://www.youtube.com/watch?v=EHRvZXiBQxI"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a>
            </div>
          </div>

          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 d-flex p-4  justify-content-center">
            <div className="content">
              <h3>Who is Assets Rack?</h3>
              <p>
                Phasellus mollis tincidunt semper. Curabitur pharetra tortor
                nisi, ut consectetur risus faucibus in. Donec ac tortor luctus,
                condimentum neque in, congue diam. Morbi faucibus lorem et nunc
                consectetur sagittis. Donec in finibus sem, ac sodales quam.
                Aliquam varius libero vitae dui finibus faucibus. Mivamus
                aliquet maximus varius.
              </p>
              <p className="fst-italic">
                Morbi in est et tortor vulputate efficitur non placerat metus.
                Suspendisse lacinia, lacus non vestibulum porta, nisl eros
                egestas lorem, eget finibus magna arcu at odio. Etiam a blandit
                neque.
                Morbi in est et tortor vulputate efficitur non placerat metus.
                Suspendisse lacinia, lacus non vestibulum porta, nisl eros
              </p>
              <button className="btn btn-warning btn-contact">
                Contact with Experts
              </button>
              <button className="btn btn-join m-1">Join us Today</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
