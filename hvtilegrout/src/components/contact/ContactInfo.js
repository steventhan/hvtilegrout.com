import React, { Component } from "react";
import SectionHeaderText from "../menus/SectionHeaderText";
import info from "../../business-info.json";


class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info" style={{paddingRight: "0.5em"}}>
        <SectionHeaderText text="Contact Info" />
        <a
          href="https://goo.gl/maps/UrM9jxcPcPv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4><strong>Address:</strong> {info.address.value}</h4>
        </a>
        <h4><strong>Phone:</strong> {info.phone}</h4>
        <h4><strong>Email:</strong>  <a href={`mailto:${info.email}`}>{info.email}</a></h4>
      </div>
    );
  }
}

export default ContactInfo;
