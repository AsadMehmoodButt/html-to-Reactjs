import React, { useEffect, useState } from "react";
import pic1 from "../assests/dashboard.png";
import pic2 from "../assests/Subtraction 5.svg";

const FeatureTab = ({ id, iconClass, title, content, isActive }) => (
  <div className={`tab-pane ${isActive ? "active show" : ""}`} id={`tab-${id}`}>
    <div className="row gy-4">
      <div className="col-lg-7 order-2 order-lg-1">
        <h3>{title}</h3>
        <p
          className="fst-italic"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
      <div
        className="col-lg-5 order-1 order-lg-2 text-center"
        style={{ position: "relative" }}
      >
        <img src={pic1} alt="featureImg1" className="img-fluid feature-img1" />
        <img src={pic2} alt="featureImg2" className="img-fluid feature-img2" />
      </div>
    </div>
  </div>
);
const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  const featureTabs = [
    {
      id: 1,
      iconClass: "bi bi-binoculars color-cyan",
      title: " Ultimate User",
      content:
        "Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone in your organization.<br/><br/> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas dolor et  iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate. ",
    },
    {
      id: 2,
      iconClass: "bi bi-box-seam color-indigo",
      title: "Unlimited Custom Reports",
      content:
        "Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone in your organization.<br><br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas dolor et  iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate. ",
    },
    {
      id: 3,
      iconClass: "bi bi-brightness-high color-teal",
      title: "Cloud-based",
      content:
        "Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone in your organization.<br><br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas dolor et  iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate. ",
    },
    {
      id: 4,
      iconClass: "bi bi-command color-red",
      title: "Barcode Scanning",
      content:
        "Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone in your organization.<br><br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas dolor et  iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate. ",
    },
    {
      id: 5,
      iconClass: "bi bi-easel color-blue",
      title: "Maintenance Scheduling",
      content:
        "Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone in your organization.<br><br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas dolor et  iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate. ",
    },
    {
      id: 6,
      iconClass: "bi bi-map color-orange",
      title: "Check-in & Check-out Features",
      content:
        "Unlimited users at no additional charge. Make your system as broad, or as narrow, as you need. Each user can have their own unique level of access ranging from limited viewing to full administrator. AssetTiger is designed as a convenient solution for everyone in your organization.<br><br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor egestas dolor et  iaculis. Suspendisse et ipsum consectetur, elementum enim et, dignissim risus. Phasellus id diam erat. Pellentesque hendrerit sem sit amet odio sodales, at placerat metus gravida. Duis venenatis quam eget ligula euismod vulputate. ",
    },
  ];
  useEffect(() => {
    setActiveTab(1);
  }, []);

  return (
    <section id="features" className="features">
      <h1 className="text-center">Features</h1>
      <p className="text-center mt-4 mb-4">
        Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices
        quis non mauris.
      </p>
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex tab-row">
          {featureTabs.map((tab) => (
            <li key={tab.id} className="nav-item col-6 col-md-4 col-lg-2">
              <a
                className={`nav-link ${
                  tab.id === activeTab ? "active show" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={tab.iconClass}></i>
                <h5>{tab.title}</h5>
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {featureTabs.map((tab) => (
            <FeatureTab key={tab.id} {...tab} isActive={tab.id === activeTab} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
