import React from "react";
import { Header } from "../../components/Header/Header";
import { Landing } from "../../components/Landing/Landing";
import { Footer } from "../../components/Footer/Footer";

import "./contact_us.css";
import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { CustomTitle } from "../../components/CustomeTitle/CustomTitle";

export const ContactUs = () => {
  return (
    <>
      <Header />
      <Landing title={"Contact Us"} />
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col">
              <CustomTitle title={"Get in touch"} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <ContactForm />
            </div>
            <div className="col-sm-12 col-lg-4 part-two">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
