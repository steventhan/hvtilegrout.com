import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import SectionHeaderText from "../menus/SectionHeaderText";
import "./Services.css";

class Service extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="service">
        <h2>{this.props.service.name}</h2>
        <div className="row">
          <div className="description">
            <p>{this.props.service.description}</p>
          </div>
          <div className="gallery">
            <ImageGallery
              items={this.props.service.images.map(i => {
                return {original: i.src, thumbnail: i.src};
              })}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Services extends Component {
  constructor(props) {
    super(props);
    this.services = [
      {
        name: "Full Walls & Floors Tiling",
        images:[
          {src: "http://i.imgur.com/F9uBiUY.jpg"},
        ],
        description: "Integer ultrices orci consectetur, tincidunt eros quis, porttitor ligula. Quisque id tortor est. "
        + "Phasellus pellentesque mattis rhoncus. Ut metus quam, fermentum vel fermentum et, finibus sit amet nunc. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex."
      },
      {
        name: "Painting & Decorating",
        images:[
          {src: "http://i.imgur.com/F9uBiUY.jpg"},
        ],
        description: "Integer ultrices orci consectetur, tincidunt eros quis, porttitor ligula. Quisque id tortor est. "
        + "Phasellus pellentesque mattis rhoncus. Ut metus quam, fermentum vel fermentum et, finibus sit amet nunc. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex."
      },
      {
        name: "Re-grouting",
        images:[
          {src: "http://i.imgur.com/kwNKVWc.jpg"},
        ],
        description: "Integer ultrices orci consectetur, tincidunt eros quis, porttitor ligula. Quisque id tortor est. "
        + "Phasellus pellentesque mattis rhoncus. Ut metus quam, fermentum vel fermentum et, finibus sit amet nunc. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex."
      },
      {
        name: "Bathroom Installation",
        images:[
          {src: "http://i.imgur.com/wDi6zYv.jpg"},
          {src: "http://i.imgur.com/MFjDnru.jpg"}
        ],
        description: "Integer ultrices orci consectetur, tincidunt eros quis, porttitor ligula. Quisque id tortor est. "
        + "Phasellus pellentesque mattis rhoncus. Ut metus quam, fermentum vel fermentum et, finibus sit amet nunc. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex. "
        + "Phasellus porttitor magna sit amet metus tempus iaculis. Curabitur eget mollis sem, eu porta ex."
      },
    ];
  }

  render() {
    return (
      <section className="services-offered">
        <div className="container">
          <SectionHeaderText text="Services Offered" center />
          {this.services.map((s, indx) => <Service key={indx} service={s} />)}
        </div>
      </section>
    );
  }
}

export default Services;
