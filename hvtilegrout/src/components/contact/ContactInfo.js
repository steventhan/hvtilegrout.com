import React, { Component } from "react";


class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info">
        <h1>Contact Info</h1>
        <h4><strong>Phone:</strong> 888-888-8888</h4>
        <h4><strong>Email:</strong>  <a href="mailto:contact@hvtilegrout.com">contact@hvtilegrout.com</a></h4>
        <h4><strong>Address:</strong> 1234 Road st, San Francisco, CA 94110</h4>
      </div>
    );
  }
}

export default ContactInfo;
