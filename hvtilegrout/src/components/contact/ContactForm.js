import React, { Component } from "react";
import { RaisedButton, TextField } from "material-ui";
import { fullWhite } from "material-ui/styles/colors";


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

  render() {
    return (
      <div className="contact-form">
        <form>
          <h1>Contact form</h1>
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
