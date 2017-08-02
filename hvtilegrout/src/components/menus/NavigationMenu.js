import React, { Component } from "react";
import { FloatingActionButton } from "material-ui";
import ArrowUp from "material-ui/svg-icons/navigation/arrow-upward";

import NavigationBar from "./NavigationBar";
import NavigationDrawer from "./NavigationDrawer";

const menuLinks = [
  {text: "Home", url: "/"},
  {text: "About", url: "/about"},
  {text: "Gallery", url: "/gallery"},
  {text: "Contact", url: "/contact"},
];

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
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
        <NavigationBar onHamburgerTouchTap={this.handleHamburgerTouchTap} menuLinks={menuLinks} />
        <NavigationDrawer drawerOpen={this.state.drawerOpen} closeDrawer={this.closeDrawer} menuLinks={menuLinks}/>
        <FloatingActionButton
          style={{position: "fixed", bottom: 20, right: 20, zIndex: 99}}
          onTouchTap={e => window.scrollTo(0, 0)}>
          <ArrowUp />
        </FloatingActionButton>
      </div>
    );
  }
}

export default NavigationMenu;
export { menuLinks };
