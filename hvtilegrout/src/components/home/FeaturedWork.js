import React, { Component } from "react";
import "./FeaturedWork.css";

class FeaturedWork extends Component {
  render() {
    return (
      <section className="featured-work">
        <div className="container">
          <h1>Featured Works</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex quam, suscipit ut ipsum ultrices,
          mattis tempor nisl. </h3>
          <div className="gallery">
            <img src="http://i.imgur.com/kwNKVWc.jpg"/>
            <img src="http://i.imgur.com/wDi6zYv.jpg"/>
            <img src="http://i.imgur.com/F9uBiUY.jpg"/>
            <img src="http://i.imgur.com/F9uBiUY.jpg"/>
            <img src="http://i.imgur.com/F9uBiUY.jpg"/>
            <img src="http://i.imgur.com/MFjDnru.jpg"/>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
