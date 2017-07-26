import React, { Component } from "react";

import Contact from "./Contact";
import Map from "./Map";

class ContactPage extends Component {
  render() {
    return (
      <main id="contact-page">
        <Contact />
        <Map />
      </main>
    );
  }
}

export default ContactPage;
