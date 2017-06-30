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
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex quam, suscipit ut ipsum ultrices,
          mattis tempor nisl. Nulla tempor, nisi vitae sagittis vulputate, mi nisi bibendum magna, id bibendum odio elit
          ac ante. Donec euismod, ante ut varius vulputate, nisi velit sollicitudin ligula, commodo auctor justo felis
          sit amet dolor.</h3>
          <RaisedButton
            style={{height: 50, width: 250}}
            label="Featured Works"
            labelStyle={{fontSize: 18}}
            secondary={true} />
        </div>
      </section>
    );
  }
}

export default Header;
