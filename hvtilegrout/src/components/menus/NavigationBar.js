import React, { Component } from "react";
import { AppBar, Tabs, Tab, FlatButton } from "material-ui";
import logo from "../../hv-logo.png";

const menuTexts = ["Home", "About", "Gallery", "Contact"];

class NavigationItems extends Component {

  render() {
    let style = {
      height: "100%",
      marginTop: "-5px",
      padding: "0"
    };

    return (
      <div style={style}>
        {menuTexts.map(item => <FlatButton style={{height:"100%"}} key={item} label={item} />)}
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
