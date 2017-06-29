import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Tabs, Tab, FlatButton } from "material-ui";


import logo from "../../hv-logo.png";

const menuLinks = {
  "Home": "/",
  "About": "/about",
  "Gallery": "/gallery",
  "Contact": "/contact"
};

const menuTexts = ["Home", "About", "Gallery", "Contact"];

class NavigationItems extends Component {

  render() {
    let style = {
      height: "100%",
      marginTop: "-5px",
      padding: "0"
    };

    return (
      <div>
        {menuTexts.map(item => {
          return (
            <FlatButton
              key={item} label={item}
              containerElement={<NavLink to={menuLinks[item]} />}
            />
          );
        })}
      </div>
    );
  }
}

class NavigationBar extends Component {
  render() {
    return (
      <AppBar
        iconElementLeft={<img src={logo} />}
        iconElementRight={<NavigationItems />}
      >
      </AppBar>
    );
  }
}


export default NavigationBar;
