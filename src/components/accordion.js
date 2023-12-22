import React, { useState } from 'react';
import userIcon from '../assests/usericon.svg';
import emailIcon from '../assests/email-icon.svg';
import {faqItems} from './data/faqData'
const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq">
      <div className="half-circle-bg"></div>
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="content px-xl-5">
            <h3>Frequently Asked <strong>Questions</strong></h3>
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="accordion accordion-flush px-xl-5" id="faqlist">

              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{
                    borderLeft: activeAccordion === index ? '4px solid orange' : 'none',
                  }}
                >
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-content-${index + 1}`}
                      onClick={() => handleAccordionToggle(index)}
                    >
                      <i className="bi bi-question-circle question-icon"></i>
                      {item.question}
                    </button>
                  </h3>
                  <div
                    id={`faq-content-${index + 1}`}
                    className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-3 order-1 order-lg-2 contact-form p-4">
            <h5>Contact Us</h5>
            <form>
              <div className="form-group">
                <label htmlFor="name"></label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Your name" required />
                <img src={userIcon} className="icon" alt="" />
              </div>

              <div className="form-group">
                <label htmlFor="email"></label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Your email" required />
                <img src={emailIcon} className="icon" alt="" />
              </div>

              <div className="form-group custom-placeholder">
                <textarea
                  rows="5"
                  cols="30"
                  id="msg"
                  name="msg"
                  placeholder="Your message"
                  style={{ width: '100%' }}
                ></textarea>
              </div>

              <div className="col-sm-12 text-end">
                <button className="btn btn-warning btn-contact">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;