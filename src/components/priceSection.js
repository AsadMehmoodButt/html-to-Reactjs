import React from "react";
import logo from "../assests/logo.png";
import subtraction2 from "../assests/Subtraction 2.svg";
const PriceSection = () => {
  return (
    <>
      <section className="price" id="price">
        <div
          className="container-fluid price-container"
          style={{ position: "relative" }}
        >
          <img src={subtraction2} className="background-image" alt="" />

          <div className="row">
            <div className="price-content">
              <h2 className="mt-4">Pricing Comparison</h2>
              <p className="mb-5 mt-5">
                AssetsRack is the first fully functional asset management
                program, completely free for the first 300 assets.
                <br />
                The world’s biggest asset tag retailer, AssetsRack means no more
                paying for other websites’ expensive services. With AssetsRack,
                you’ll get <br /> quality, flexibility, and security.
              </p>
              <div className="pricing-cards m-3  flex-sm-wrap flex-lg-row">
                <div className="price1">
                  <div className="card p-4 ">
                    <div className="card-body text-center">
                      <h3 className="fw-bold">Competitor #1</h3>
                      <p>
                        Smartphone Compatible <br />
                        ($15 per device per month)
                        <br /> in addition to yearly price
                      </p>
                    </div>
                    <div className="subscription">
                      <h5 className="mt-5">Subscription</h5>
                      <div className="subscription-data">
                        <div className="data1">
                          <div className="border1">
                            <h5>5</h5>
                            <p>users</p>
                          </div>
                        </div>
                        <div className="data2">
                          <div className="border2">
                            <h5>10 GB</h5>
                            <p>
                              Cloud <br />
                              Storage
                            </p>
                          </div>
                        </div>
                      </div>
                      <h5 className="totalprice">$8,700/ per Year</h5>
                    </div>
                  </div>
                </div>
                <div className="price2">
                  <div className="card p-4">
                    <div className="card-body  text-center">
                      <img src={logo} width="200px" alt="" />
                      <p>
                        Smartphone Compatible <br /> (No Extra Charges)
                      </p>
                    </div>
                    <div className="subscription2">
                      <h5>Subscription</h5>
                      <div className="subscription-data">
                        <div className="data1">
                          <div className="border1">
                            <h5 className="Unlimited">Unlimited</h5>
                            <p>users</p>
                          </div>
                        </div>
                        <div className="data2">
                          <div className="border2">
                            <h5 className="Unlimited">Unlimited</h5>
                            <p>
                              Cloud <br />
                              Storage
                            </p>
                          </div>
                        </div>
                      </div>
                      <h5 className="freeassets">FREE* / for 250 Assets</h5>
                      <p className="subplan">
                        * See Subscription Plans for details
                      </p>
                    </div>
                  </div>
                </div>
                <div className="price3">
                  <div className="card p-4 ">
                    <div className="card-body text-center">
                      <h3>Competitor #2</h3>
                      <p>
                        Smartphone Compatible <br /> ($295/device)
                        <br /> in addition to yearly price
                      </p>
                    </div>
                    <div className="subscription">
                      <h5>Subscription</h5>
                      <div className="subscription-data">
                        <div className="data1">
                          <div className="border1">
                            <h5>5</h5>
                            <p>users</p>
                          </div>
                        </div>
                        <div className="data2">
                          <div className="border2">
                            <h5>10 GB</h5>
                            <p>Cloud Storage</p>
                          </div>
                        </div>
                      </div>
                      <h5 className="totalprice">$900/ per Year</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="subscription-plans">
            <h1 className="mt-3">Subscription Plans</h1>
            <p className="mb-5 mt-4">
              Effective January 1, 2022. Subscription is annual, fixed to the
              calendar year. Late Subscription will be prorated within the first
              year.
            </p>
            <div className="container">
              <div className="row text-center subscription-plans-row ">
                <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6 mb-4">
                  <div className="card cards">
                    <div className="card-body  text-center">
                      <div className="headtexts">
                        <p className="mt-4">UPTO</p>
                        <h4>300</h4>
                        <p className="mb-3">ASSETS</p>
                      </div>
                      <div className="subscription-texts">
                        <p>Subscription Plan</p>
                        <h5>ARS-Free</h5>
                        <h5>Free</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6  mb-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="headtext">
                        <p className="mt-4">UPTO</p>
                        <h4>500</h4>
                        <p className="mb-3">ASSETS</p>
                      </div>
                      <div className="subscription-text">
                        <p>Subscription Plan</p>
                        <h5>ARS-500</h5>
                        <h5>
                          <span className="fs-5">$120</span> / Year
                        </h5>
                        <div className="line-with-text">
                          <span>or</span>
                        </div>
                        <p className="assettags">Buy Asset Tags Worth</p>
                        <h5>
                          <span className="fs-5">$150</span> / Year
                        </h5>
                        <button className="btn-tags">Buy Tags</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6  mb-4">
                  <div className="card">
                    <div className="card-body  text-center">
                      <div className="headtext">
                        <p className="mt-4">UPTO</p>
                        <h4>2500</h4>
                        <p className="mb-3">ASSETS</p>
                      </div>
                      <div className="subscription-text">
                        <p>Subscription Plan</p>
                        <h5>ARS-2500</h5>
                        <h5>
                          <span className="fs-5">$230</span> / Year
                        </h5>
                        <div className="line-with-text">
                          <span>or</span>
                        </div>
                        <p className="assettags">Buy Asset Tags Worth</p>
                        <h5>
                          <span className="fs-5">$345</span> / Year
                        </h5>
                        <button className="btn-tags">Buy Tags</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6  mb-4">
                  <div className="card">
                    <div className="card-body  text-center">
                      <div className="headtext">
                        <p className="mt-4">UPTO</p>
                        <h4>10,000</h4>
                        <p className="mb-3">ASSETS</p>
                      </div>
                      <div className="subscription-text">
                        <p>Subscription Plan</p>
                        <h5>ARS-10k</h5>
                        <h5>
                          <span className="fs-5">$400</span> / Year
                        </h5>
                        <div className="line-with-text">
                          <span>or</span>
                        </div>
                        <p className="assettags">Buy Asset Tags Worth</p>
                        <h5>
                          <span className="fs-5">$600</span> / Year
                        </h5>
                        <button className="btn-tags">Buy Tags</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6  mb-4">
                  <div className="card">
                    <div className="card-body  text-center">
                      <div className="headtext">
                        <p className="mt-4">UPTO</p>
                        <h4>50000</h4>
                        <p className="mb-3">ASSETS</p>
                      </div>
                      <div className="subscription-text">
                        <p>Subscription Plan</p>
                        <h5>ARS-50k</h5>
                        <h5>
                          <span className="fs-5">$800</span> / Year
                        </h5>
                        <div className="line-with-text">
                          <span>or</span>
                        </div>
                        <p className="assettags">Buy Asset Tags Worth</p>
                        <h5>
                          <span className="fs-5">$1200</span> / Year
                        </h5>
                        <button className="btn-tags">Buy Tags</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6  mb-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="headtext">
                        <p className="mt-4">UPTO</p>
                        <h4>250000</h4>
                        <p className="mb-3">ASSETS</p>
                      </div>
                      <div className="subscription-text">
                        <p>Subscription Plan</p>
                        <h5>ARS-250k</h5>
                        <h5>
                          <span className="fs-5">$1600</span> / Year
                        </h5>
                        <div className="line-with-text">
                          <span>or</span>
                        </div>
                        <p className="assettags">Buy Asset Tags Worth</p>
                        <h5>
                          <span className="fs-5">$2400</span> / Year
                        </h5>
                        <button className="btn-tags">Buy Tags</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceSection;
