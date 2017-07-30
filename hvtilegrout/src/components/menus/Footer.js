import React, { Component } from "react";
import { BottomNavigation } from "material-ui/BottomNavigation";

class Footer extends Component {
  render() {
    return (
      <BottomNavigation>
        <section className="copyright">
          <p>&copy; HV Tile Grout 2017</p>
        </section>
      </BottomNavigation>
    );
  }
}

export default Footer;
