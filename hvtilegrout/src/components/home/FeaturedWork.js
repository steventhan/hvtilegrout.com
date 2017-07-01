import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { RaisedButton } from "material-ui";
import Lightbox from "react-images";

import "./FeaturedWork.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {lightboxIsOpen: false, currentImage: 0};
    this.images = [
      {src: "http://i.imgur.com/kwNKVWc.jpg"},
      {src: "http://i.imgur.com/wDi6zYv.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/F9uBiUY.jpg"},
      {src: "http://i.imgur.com/MFjDnru.jpg"}
    ];

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleClick(indx) {
    this.setState({lightboxIsOpen: true, currentImage: indx});
  }

  handleClose() {
    this.setState({lightboxIsOpen: false, currentImage: 0});
  }

  handleNext() {
    this.setState({currentImage: (this.state.currentImage + 1) % this.images.length});
  }

  handlePrev() {
    this.setState({currentImage: (this.state.currentImage - 1) % this.images.length});
  }

  render() {
    return (
      <div className="gallery">
        {this.images.map((img, indx) => {
          return (
            <a
              href=""
              onTouchTap={e => {
                e.preventDefault();
                return this.handleClick(indx);
              }}
              onClick={e => {
                e.preventDefault();
                return this.handleClick(indx);
              }}
              key={indx}
              >
              <img src={img.src}/>
            </a>
          );
        })}

        <Lightbox
          images={this.images}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.handleClose}
          onClickNext={this.handleNext}
          onClickPrev={this.handlePrev}
          backdropClosesModal
        />
      </div>
    );
  }
}

class FeaturedWork extends Component {
  render() {
    return (
      <section className="featured-work">
        <div className="container">
          <h1>Featured Works</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex quam, suscipit ut ipsum ultrices,
          mattis tempor nisl. </h3>
          <Gallery />
          <RaisedButton label="Visit Our Gallery" secondary containerElement={<NavLink to="/gallery"/>}/>
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
