import React, { Component } from "react";
import Header from "./Header";
import FeaturedWork from "./FeaturedWork";

class HomePage extends Component {
  render() {
    return (
      <main className="home-page">
        <Header />
        <FeaturedWork />
      </main>
    );
  }
}

export default HomePage;
