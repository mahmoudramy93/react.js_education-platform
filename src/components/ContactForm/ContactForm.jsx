import React from "react";

export const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="sub-title">
        <h3>Send Message</h3>
        <p>We're open for any suggestion or just to have a chat</p>
      </div>
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Message...."
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Subject"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="send-button" type="submit" value="SEND">
            send
          </button>
        </div>
      </form>
    </div>
  );
};
