import React, { Component } from "react";

import SectionHeaderText from "../menus/SectionHeaderText";
import style from "./About.css";
import fullSizeLogo from "../../hv-logo-300.png";

class About extends Component {
  render() {
    return (
      <section style={style} className="about">
        <div className="container">
          <SectionHeaderText text="About Us" center />
          <div className="row">
            <div className="logo"><img src={fullSizeLogo} /></div>
            <div className="story">
              <p><strong>Our mission:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl,
               congue ut vestibulum quis, ultricies et mi. Etiam tempus tortor ac odio fringilla auctor. Etiam
               elementum eros vitae enim varius congue. Aliquam erat volutpat. Curabitur eu dapibus odio. Etiam
               imperdiet in magna eu commodo. Quisque maximus auctor augue. Praesent faucibus nulla id est facilisis
               fringilla.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl,
               congue ut vestibulum quis, ultricies et mi. Etiam tempus tortor ac odio fringilla auctor. Etiam
               elementum eros vitae enim varius congue. Aliquam erat volutpat. Curabitur eu dapibus odio. Etiam
               imperdiet in magna eu commodo. Quisque maximus auctor augue. Praesent faucibus nulla id est facilisis
               fringilla.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl,
               congue ut vestibulum quis, ultricies et mi. Etiam tempus tortor ac odio fringilla auctor. Etiam
               elementum eros vitae enim varius congue. Aliquam erat volutpat. Curabitur eu dapibus odio. Etiam
               imperdiet in magna eu commodo. Quisque maximus auctor augue. Praesent faucibus nulla id est facilisis
               fringilla.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
