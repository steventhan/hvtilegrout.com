import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import style from "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section style={style} id="contact">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    );
  }
}

export default Contact;
