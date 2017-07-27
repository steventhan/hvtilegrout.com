import React, { Component } from "react";

import Contact from "./Contact";
import Location from "./Location";

class ContactPage extends Component {
  render() {
    return (
      <main id="contact-page">
        <Contact />
        <Location />
      </main>
    );
  }
}

export default ContactPage;
