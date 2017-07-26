import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    );
  }
}

export default Contact;
