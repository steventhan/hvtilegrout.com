import React, { Component } from "react";
import Header from "./Header";
import FeaturedWork from "./FeaturedWork";
import OurTeam from "./OurTeam";

class HomePage extends Component {
  render() {
    return (
      <main style={{backgroundColor: "#37474F"}} className="home-page">
        <Header />
        <FeaturedWork />
        <OurTeam />
      </main>
    );
  }
}

export default HomePage;
