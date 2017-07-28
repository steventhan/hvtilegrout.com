import React, { Component } from "react";
import { RaisedButton, TextField } from "material-ui";
import { fullWhite } from "material-ui/styles/colors";
import Recaptcha from "react-recaptcha";

import SectionHeaderText from "../menus/SectionHeaderText";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {errorText: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value === "") {
      this.setState({errorText: "This field is required"});
    }
  }

  handleLoadCallback(res) {
    console.log(res);
  }

  render() {
    return (
      <div className="contact-form">
        <form>
          <SectionHeaderText text="Contact form" />
          <TextField
            name="name"
            fullWidth
            floatingLabelText="Name *"
            floatingLabelStyle={{color: fullWhite}}
            errorText={this.state.errorText}
            onChange={this.handleChange}
          />
          <TextField
            name="email"
            fullWidth
            floatingLabelText="Email *"
            floatingLabelStyle={{color: fullWhite}}
            errorText={this.state.errorText}
            onChange={this.handleChange}
          />
          <TextField
            name="message"
            fullWidth
            floatingLabelText="Message *"
            floatingLabelStyle={{color: fullWhite}}
            multiLine={true}
            rows={5}
            errorText={this.state.errorText}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Recaptcha
            sitekey="6LfgxSoUAAAAAPdWf64YEfzdImU1Je3ZFO0W-rV0"
            onloadCallback={this.handleLoadCallback}
            theme="dark"
          />
          <br />
          <RaisedButton
            label="Send"
            primary
            fullWidth
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
