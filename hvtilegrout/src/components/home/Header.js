import React, { Component } from "react";
import { RaisedButton } from "material-ui";
import "./Header.css";
import background from "../../header-bg.jpg";

class Header extends Component {
  render() {
    return (
      <section style={{backgroundImage: `url(${background})`}} className="header">
        <div className="container">
          <h1>HV Tile Grout</h1>
          <h3>​HV Grout & Tile is the number one source in the Bay Area region and your first choice for all your
            Stone & Tile Restoration needs. Tile and Grout cleaning, Grout and Natural Stone Sealing, Shower
            Regrouting, and all other cleaning and restoration service.  We offer a complete line of cleaning and
            restoration solutions to for all types of tile, grout and stone.
          </h3>
          <RaisedButton
            style={{height: 50, width: 250}}
            label="Featured Works"
            labelStyle={{fontSize: 18}}
            secondary={true}
            onTouchTap={e => this.props.featuredWorkSection.scrollIntoView()}
          />
        </div>
      </section>
    );
  }
}

export default Header;
