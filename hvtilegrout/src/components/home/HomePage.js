import React, { Component } from "react";
import Header from "./Header";
import FeaturedWork from "./FeaturedWork";
import OurTeam from "./OurTeam";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {featuredWorkSection: {}};
  }

  componentDidMount() {
    this.setState({featuredWorkSection: this.refs.featuredWork.refs.featuredWorkSection});
  }
  render() {
    return (
      <main className="home-page">
        <Header featuredWorkSection={this.state.featuredWorkSection}/>
        <FeaturedWork ref="featuredWork"/>
        <OurTeam />
      </main>
    );
  }
}

export default HomePage;
