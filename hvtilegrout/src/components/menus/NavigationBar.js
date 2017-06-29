import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, FlatButton, MenuItem } from "material-ui";


import logo from "../../hv-logo.png";

const menuLinks = {
  "Home": "/",
  "About": "/about",
  "Gallery": "/gallery",
  "Contact": "/contact"
};

              // <NavLink to={menuLinks[item]} />
        // iconElementRight={<FlatButton labelStyle={{margin: 0}} style={{height:"100%", margin: 0}} label="home" />}
const menuTexts = ["Home", "About", "Gallery", "Contact"];

class NavigationItems extends Component {

  render() {
    let style = {
      marginTop: "7px"
    };

    return (
      <div style={style} className="nav-items">
        {menuTexts.map(item => {
          return (
            <FlatButton key={item} label={item} containerElement={<NavLink to={menuLinks[item]}>{item}</NavLink>} />
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
