import React, { Component } from "react";
import About from "./About";
import Services from "./Services";
import { Divider } from "../menus";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.images = [
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
    ];
  }
        // <ImageGallery
        //   items={this.images.map(img => {
        //     return {original: img.src, thumbnail: img.src};
        //   })}
        // />

  render() {
    return (
      <main style={{backgroundColor: "#212121"}} className="about-page">
        <About />
        <Services />
      </main>
    );
  }
}

export default AboutPage;
