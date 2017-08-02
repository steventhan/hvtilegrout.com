import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RaisedButton } from "material-ui";

import SectionHeaderText from "../menus/SectionHeaderText";
import Gallery from "../gallery/Gallery";
import "./FeaturedWork.css";

class FeaturedWork extends Component {
  constructor(props) {
    super(props);
    this.images = [
      {src: "http://i.imgur.com/TdpiiC5.jpg"},
      {src: "http://i.imgur.com/vcChO7L.jpg"},
      {src: "http://i.imgur.com/8BXqdTY.jpg"},
      {src: "http://i.imgur.com/2VupPkK.png"},
      {src: "http://i.imgur.com/WkpnLy7.png"},
      {src: "http://i.imgur.com/xgeG4ew.png"},
      {src: "http://i.imgur.com/o9jBibu.png"},
      {src: "http://i.imgur.com/NDhlDIZ.png"},
    ];
  }

  render() {
    return (
      <section ref="featuredWorkSection" className="featured-work">
        <div className="container">
          <SectionHeaderText text="Featured Works" center />
          <h3>Check out some of our best projects. Visit our gallery page for more.</h3>
          <Gallery images={this.images} />
          <RaisedButton
            label="Visit Our Gallery"
            secondary
            containerElement={<Link to="/gallery"/>}
          />
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
