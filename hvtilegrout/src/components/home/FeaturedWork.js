import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { RaisedButton } from "material-ui";

import SectionHeaderText from "../menus/SectionHeaderText";
import Gallery from "../gallery/Gallery";
import "./FeaturedWork.css";

class FeaturedWork extends Component {
  constructor(props) {
    super(props);
    this.images = [
      {src: "http://i.imgur.com/kwNKVWc.jpg"},
      {src: "http://i.imgur.com/wDi6zYv.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/MFjDnru.jpg"}
    ];
  }

  render() {
    return (
      <section ref="featuredWorkSection" className="featured-work">
        <div className="container">
          <SectionHeaderText text="Featured Works" center />
          <h3>Check out some of our best projects. Visit our gallery page for more.</h3>
          <Gallery images={this.images} />
          <RaisedButton label="Visit Our Gallery" secondary containerElement={<NavLink to="/gallery"/>}/>
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
