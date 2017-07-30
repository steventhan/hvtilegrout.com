import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import NavigationDrawer from "./NavigationDrawer";


class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.menuLinks = [
      {text: "Home", url: "/"},
      {text: "About", url: "/about"},
      {text: "Gallery", url: "/gallery"},
      {text: "Contact", url: "/contact"},
    ];
    this.state = {drawerOpen: false};
    this.handleHamburgerTouchTap = this.handleHamburgerTouchTap.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  handleHamburgerTouchTap(e) {
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  closeDrawer(e) {
    this.setState({drawerOpen: false});
  }

  render() {
    return (
      <div>
        <NavigationBar onHamburgerTouchTap={this.handleHamburgerTouchTap} menuLinks={this.menuLinks} />
        <NavigationDrawer drawerOpen={this.state.drawerOpen} closeDrawer={this.closeDrawer} menuLinks={this.menuLinks}/>
      </div>
    );
  }
}

export default NavigationMenu;
