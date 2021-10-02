import React, { useState } from "react";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    contactEmail: "",
    subject: "",
    message: "",
  });

  function handleFormChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    console.log(formValue);
  }

  return (
    <section id="contact" className="page-section">
      <div className="get-in-touch">
        <h1 className="owner" id="section-title">
          &lt; get in touch /&gt;
        </h1>

        <form
          action="https://formspree.io/f/xdoypozv"
          method="POST"
          className="contact-form"
        >
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            value={formValue.firstName}
            minLength="2"
            required=""
            aria-required="true"
            className="contact-form-name"
            onChange={handleFormChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last name"
            value={formValue.lastName}
            minLength="2"
            required=""
            aria-required="true"
            className="contact-form-name"
            onChange={handleFormChange}
          />
          <input
            name="contactEmail"
            type="email"
            id="contactEmail"
            placeholder="email"
            value={formValue.contactEmail}
            required=""
            aria-required="true"
            className="contact-form-text"
            onChange={handleFormChange}
          />
          <input
            name="subject"
            type="text"
            id="contactSubject"
            placeholder="Subject"
            value={formValue.subject}
            className="contact-form-text"
            onChange={handleFormChange}
            required
          />
          <textarea
            name="message"
            id="contactMessage"
            placeholder="message"
            rows="10"
            cols="50"
            required=""
            aria-required="true"
            className="contact-form-text"
            styles="resize: none"
            value={formValue.message}
            onChange={handleFormChange}
          ></textarea>
          <button className="button-contact" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
