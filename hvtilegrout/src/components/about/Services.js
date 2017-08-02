import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import SectionHeaderText from "../menus/SectionHeaderText";
import "./Services.css";

class Service extends Component {
  render() {
    return (
      <div className="service">
        <h2>{this.props.service.name}</h2>
        <div className="row">
          <div className="description">
            <p dangerouslySetInnerHTML={{__html: this.props.service.description}}></p>
          </div>
          <div className="gallery">
            <ImageGallery
              showFullscreenButton={false}
              showPlayButton={false}
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
        name: "TILES: Clean & Restore",
        images:[
          {src: "http://i.imgur.com/Gwj9O2g.jpg?1"},
          {src: "http://i.imgur.com/MFjDnru.jpg"},
        ],
        description: "HV's technicians are experienced professionals who can help with any size job, from fixing a "
        + "few loose tiles through to retiling a whole bathroom and fitting wall-mounted bathroom accessories. For "
        + "tiling on walls and floors, in kitchens or bathrooms, they are on hand to help. "
      },
      {
        name: "GROUT: Re-color & Re-grout",
        images:[
          {src: "http://i.imgur.com/kwNKVWc.jpg"},
          {src: "http://i.imgur.com/INiAGtG.png?1"},
        ],
        description: "Old or damaged grout makes the most beautiful tile look ugly. It can also cause structural "
        + "damage to your home. Grout is porous and absorbs everyday spills and dirt.  If not cared for, over "
        + "time, grout becomes stained, damaged, and loose.<br /><br />Regrouting is the process of removing the old grout "
        + "and installing new grout and caulk in an installation. Regrouting is a process used on non-sanded grout "
        + "installations. In most cases, it is not recommended for sanded grout."
      },
      {
        name: "FLOOR: Deep clean & Seal",
        images:[
          {src: "http://i.imgur.com/ON8mVah.png?2"},
          {src: "http://i.imgur.com/wDi6zYv.jpg"},
        ],
        description: "Tile and stone are not immune to the unhealthy elements that are in and around your home. "
        + "Over time, dirt and grime build up in the porous surfaces of your stone, tile and grout flooring, turning "
        + "them into a breeding ground for disease-causing bacteria. Especially in areas like the bathroom and "
        + "kitchen, where germs can run rampant, it’s important to do everything you can to cut down on the spread "
        + "of bacteria. While regular sweeping and mopping are helpful at keeping excessive build-up at bay, "
        + "those don’t deliver the deep cleaning that your floors really need. <br /><br />"
        + "HV Tile Grout provides professonal floor deep cleaning service that help reduces the dirt and bacteria "
        + "that can spread germs, so your surfaces and your home will sparkle and be safer for your family and pets."
      },
      {
        name: "WINDOW BLINDS: Clean (home & office)",
        images:[
          {src: "http://i.imgur.com/Bz5Hs5V.jpg"},
          {src: "http://i.imgur.com/Pj8ea6Z.jpg"}
        ],
        description: "Window blinds are everywhere. From homes and office buildings, to restaurants, hospitals, "
        + "universities, military bases, boats and more, practically any structure that has windows also has window "
        + "blinds. The reason is simple; in addition to being beautiful, window blinds can also be a very inexpensive "
        + "solution for someone who needs to cover their windows. <br /><br />"
        + "However, over time, dirt build-up can degrade and damage blinds. This creates a costly problem as the blind "
        + "will need to be replaced. Additionally, window blinds can get so dirty that they don’t just look ugly, "
        + "they can become a breeding ground for bacteria and allergens.<br /><br />"
        + "HV's technicians are equipped with the right tools and technologies to tackle various blind types. We can "
        + "make your blinds cleaning process go as smoothly as possible."
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
