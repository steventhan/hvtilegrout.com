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
              <p>
                <strong>Our mission</strong> is to provide highest quality of services while saving your time
                and money. We strive relentlessly to make our customers feel welcomed and well taken care of with our
                promptness, reliability, and affordability.
              </p>
              <p>
                We clean all types of tile and grout from ceramic and porcelain to Saltillo, travertine, slate,
                marble, brick,  granite and all other types of man made and stone tiles. We clean various types of
                tiled surfaces from floors and walls to countertops, shower stalls, bathtub surrounds and any other
                surface that is covered with tile and grout.
              </p>
              <p>
                HV Grout & Tile utilizes professional quality sealers that are unsurpassed in the tile and grout
                industry. We have many options of sealer protection and we can explain the benefits of each of them
                to you. You can be assured that our clear sealer will not change or alter the color of your grout.
                We can seal your granite, marble or other stone surfaces with our professional long lasting sealers.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
