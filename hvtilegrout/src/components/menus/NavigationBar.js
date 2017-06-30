import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, FlatButton, MenuItem } from "material-ui";


import logo from "../../hv-logo.png";

const menuLinks = [
  {text: "Home", url: "/"},
  {text: "About", url: "/about"},
  {text: "Gallery", url: "/gallery"},
  {text: "Contact", url: "/contact"},
];

const menuTexts = ["Home", "About", "Gallery", "Contact"];

class NavigationItems extends Component {

  render() {
    let style = {
      marginTop: "7px"
    };

    return (
      <div style={style} className="nav-items">
        {menuLinks.map(item => {
          return (
            <FlatButton
              key={item.text}
              label={item.text}
              containerElement={<NavLink to={item.url}>{item.text}</NavLink>}
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
