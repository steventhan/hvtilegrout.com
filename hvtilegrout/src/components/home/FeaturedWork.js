import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { RaisedButton } from "material-ui";
import "./FeaturedWork.css";

class FeaturedWork extends Component {
  constructor() {
    super();
    this.images = [
      "http://i.imgur.com/kwNKVWc.jpg",
      "http://i.imgur.com/wDi6zYv.jpg",
      "http://i.imgur.com/F9uBiUY.jpg",
      "http://i.imgur.com/F9uBiUY.jpg",
      "http://i.imgur.com/F9uBiUY.jpg",
      "http://i.imgur.com/MFjDnru.jpg"
    ];
  }

  render() {
    return (
      <section className="featured-work">
        <div className="container">
          <h1>Featured Works</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex quam, suscipit ut ipsum ultrices,
          mattis tempor nisl. </h3>
          <div className="gallery">
            {this.images.map((i, key) => <img key={key} src={i} />)}
          </div>
          <RaisedButton label="Visit Our Gallery" secondary containerElement={<NavLink to="/gallery"/>}/>
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
