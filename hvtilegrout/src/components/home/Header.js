import React, { Component } from "react";
import { RaisedButton } from "material-ui";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="container">
          <h1>HV Tile Grout</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex quam, suscipit ut ipsum ultrices,
          mattis tempor nisl. Nulla tempor, nisi vitae sagittis vulputate, mi nisi bibendum magna, id bibendum odio elit
          ac ante. Donec euismod, ante ut varius vulputate, nisi velit sollicitudin ligula, commodo auctor justo felis
          sit amet dolor.</h3>
          <RaisedButton label="Featured Works" secondary={true} />
        </div>
      </section>
    );
  }
}

export default Header;
