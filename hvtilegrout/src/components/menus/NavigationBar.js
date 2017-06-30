import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, FlatButton, MenuItem } from "material-ui";

import logo from "../../hv-logo.png";

class NavigationItems extends Component {
  constructor(props) {
    super(props);
    this.menuLinks = [
      {text: "Home", url: "/"},
      {text: "About", url: "/about"},
      {text: "Gallery", url: "/gallery"},
      {text: "Contact", url: "/contact"},
    ];
  }

  render() {
    let style = {
      marginTop: "7px"
    };

    return (
      <div style={style} className="nav-items">
        {this.menuLinks.map(item => {
          return (
            <FlatButton
              key={item.text}
              label={item.text}
              containerElement={
                <NavLink
                  exact to={item.url}
                  activeStyle={{backgroundColor: "rgba(153, 153, 153, 0.2)"}}>
                  {item.text}
                </NavLink>
              }
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
