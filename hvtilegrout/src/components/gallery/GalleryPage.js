import React, { Component } from "react";
import Gallery from "./Gallery";
import SectionHeaderText from "../menus/SectionHeaderText";

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.images = [
      {src: "http://i.imgur.com/kwNKVWc.jpg"},
      {src: "http://i.imgur.com/wDi6zYv.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/MFjDnru.jpg"}
    ];
  }

  render() {
    return (
      <main id="gallery-page">
        <section>
          <div className="container">
            <SectionHeaderText text="Gallery" center />
            <Gallery images={this.images} />
          </div>
        </section>
      </main>
    );
  }
}

export default GalleryPage;
