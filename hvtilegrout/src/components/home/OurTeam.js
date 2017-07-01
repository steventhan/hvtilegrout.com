import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import "./OurTeam.css";

class People extends Component {
  constructor(props) {
    super(props);
    this.people = [
      {
        name: "Dexter Gilbert",
        position: "Owner",
        email: "email@example.com",
        img: "http://via.placeholder.com/250x250"
      },
      {
        name: "Mary Collier",
        position: "Operation manager",
        email: "email@example.com",
        img: "http://via.placeholder.com/250x250"
      },
      {
        name: "Stefan Morrison",
        position: "Receptionist",
        email: "email@example.com",
        img: "http://via.placeholder.com/250x250"
      },
      {
        name: "Bill Smith",
        position: "Lead contractor",
        email: "email@example.com",
        img: "http://via.placeholder.com/250x250"
      },
    ];
  }

  render() {
    return (
      <div className="people">
        {this.people.map(p => {
          return (
            <div className="person" key={p.name}>
              <div className="avartar">
                <img src={p.img} />
                <div className="overlay">
                  <div className="bio">{p.position}</div>
                </div>
              </div>
              <div className="info">
                <h3>{p.name}</h3>
                <a href={`mailto:${p.email}`}><FontAwesome className="fa fa-envelope-o"/> Email</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

class OurTeam extends Component {
  render() {
    return (
      <section className="our-team">
        <div className="container">
          <h1>Our Team</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex quam, suscipit ut ipsum ultrices,
          mattis tempor nisl. </h3>
          <People />
        </div>
      </section>
    );
  }
}

export default OurTeam;
