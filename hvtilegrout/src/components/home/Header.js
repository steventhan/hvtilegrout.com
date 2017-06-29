import React, { Component } from "react";
import { RaisedButton } from "material-ui";

class Header extends Component {
  render() {
    let headerStyle = {
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "center",
    };

    let headerItem = {
      selfAlign: "auto",
      maxWidth: "70%",
      textAlign: "center",
    };

    return (
      <section style={headerStyle} className="header">
        <div style={headerItem}>
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
