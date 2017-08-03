import React, { Component } from "react";
import { RaisedButton, TextField, CircularProgress, Dialog } from "material-ui";
import Send from "material-ui/svg-icons/content/send";
import { blueGrey800 } from "material-ui/styles/colors";
import Recaptcha from "react-recaptcha";
import validate from "validate.js";
import axios from "axios";

import cred from "../../credentials";

import SectionHeaderText from "../menus/SectionHeaderText";

const white = "#fdfdfd";

class SendButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: this.props.sending || !this.props.human
    };
  }

  componentWillReceiveProps(props) {
    this.setState({disabled: props.sending || !props.human});
  }

  render() {
    return (
      <RaisedButton
        type={this.props.type}
        icon={this.props.sending ? <CircularProgress color={blueGrey800} size={20} thickness={2} /> : <Send />}
        label={this.props.sending ? "" : "Send"}
        labelPosition="before"
        labelStyle={this.state.disabled ? {color: blueGrey800} : {}}
        disabled={this.state.disabled}
        primary
        fullWidth
        onTouchTap={this.props.onTouchTap}
      />
    );
  }
}


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: "",
        email: "",
        message: "",
      },
      human: false,
      sending: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  handleDialogClose(e) {
    this.setState({sent: undefined});
  }

  handleSubmit(e) {
    e.preventDefault();
    let constraints = {
      email: {
        presence: true,
        email: true
      },
      name: {
        presence: true
      },
      message: {
        presence: true
      }
    };
    let errors = validate({
      name: this.name,
      email: this.email,
      message: this.message
    }, constraints);

    if (errors && Object.keys(errors).length > 0) {
      Object.keys(errors).forEach((k, indx) => errors[k] = errors[k][0]);
      this.setState({errors: errors});
      return;
    }

    this.setState({errors: {}, sending: true});
    axios.post("/api/email", {
      name: this.name,
      email: this.email,
      message: this.message
    }).then((res) => {
      this.setState({sent: res.data.sent, sending: false});
    }).catch((error) => {
      this.setState({sent: false, sending: false});
    });
  }

  render() {
    return (
      <div className="contact-form" style={{paddingLeft: "0.5em"}}>
        <form onSubmit={this.handleSubmit}>
          <SectionHeaderText text="Contact form" />
          <TextField
            name="name"
            fullWidth
            floatingLabelText="Name *"
            floatingLabelStyle={{color: white}}
            errorText={this.state.errors.name}
            onChange={this.handleChange}
          />
          <TextField
            name="email"
            fullWidth
            floatingLabelText="Email *"
            floatingLabelStyle={{color: white}}
            errorText={this.state.errors.email}
            onChange={this.handleChange}
          />
          <TextField
            name="message"
            fullWidth
            floatingLabelText="Message *"
            floatingLabelStyle={{color: white}}
            multiLine
            rows={5}
            errorText={this.state.errors.message}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Recaptcha
            sitekey={cred.recaptcha.sitekey}
            render="explicit"
            theme="dark"
            onloadCallback={() => {}}
            verifyCallback={() => this.setState({human: true})}
            expiredCallback={() => this.setState({human: false})}
          />
          <br />
          <SendButton
            type="submit"
            human={this.state.human}
            sending={this.state.sending}
          />
        </form>
        <Dialog
          open={typeof(this.state.sent) === "boolean"}
          actions={[<RaisedButton label="OK" secondary onTouchTap={this.handleDialogClose} />]}
          onRequestClose={this.handleDialogClose}
        >
          Message {this.state.sent ? "sent!" : "did not send, try again."}
        </Dialog>
      </div>
    );
  }
}

export default ContactForm;
