import React, { Component } from "react";
import About from "./About";
import Services from "./Services";

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
