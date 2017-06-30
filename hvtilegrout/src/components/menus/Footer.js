import React, { Component } from "react";
import { BottomNavigation, BottomNavigationItem } from "material-ui/BottomNavigation";

class Footer extends Component {
  render() {
    return (
      <BottomNavigation>
        <p>&copy; HV Tile Grout 2017</p>
      </BottomNavigation>
    );
  }
}

export default Footer;
