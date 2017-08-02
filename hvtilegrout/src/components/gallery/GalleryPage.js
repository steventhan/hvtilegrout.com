import React, { Component } from "react";
import Gallery from "./Gallery";
import SectionHeaderText from "../menus/SectionHeaderText";

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.images = [
      {src: "http://i.imgur.com/TdpiiC5.jpg"},
      {src: "http://i.imgur.com/vcChO7L.jpg"},
      {src: "http://i.imgur.com/8BXqdTY.jpg"},
      {src: "http://i.imgur.com/2VupPkK.png"},
      {src: "http://i.imgur.com/WkpnLy7.png"},
      {src: "http://i.imgur.com/xgeG4ew.png"},
      {src: "http://i.imgur.com/o9jBibu.png"},
      {src: "http://i.imgur.com/NDhlDIZ.png"},
    ];
  }

  render() {
    return (
      <main id="gallery-page">
        <section>
          <div className="container" style={{textAlign: "center"}}>
            <SectionHeaderText text="Gallery" center />
            <h3>We are still in the process of updating our gallery, stay tuned for more exciting projects.</h3>
            <Gallery images={this.images} />
          </div>
        </section>
      </main>
    );
  }
}

export default GalleryPage;
