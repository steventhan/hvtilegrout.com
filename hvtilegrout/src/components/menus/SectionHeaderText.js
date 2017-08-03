import React, { Component } from "react";

class SectionHeaderText extends Component {
  constructor(props) {
    super(props);
    this.style = {
      display: "flex",
      justifyContent: this.props.center ? "center" : "flex-start"
    };
    this.borderStyle = {
      marginLeft: this.props.center ? "15%" : "0"
    };
  }

  render() {
    return (
      <div style={this.style} className="header-text">
        <h1 style={this.props.textSize ? { fontSize: this.props.textSize } : {}}>
          {this.props.text}
          <div style={this.borderStyle} className="border"></div>
        </h1>
      </div>
    );
  }
}

export default SectionHeaderText;
