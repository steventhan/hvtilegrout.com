import React, { Component } from "react";
import Lightbox from "react-images";
import "./Gallery.css";


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {lightboxIsOpen: false, currentImage: 0};
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
    this.setState({currentImage: (this.state.currentImage + 1) % this.props.images.length});
  }

  handlePrev() {
    this.setState({currentImage: (this.state.currentImage - 1) % this.props.images.length});
  }

  render() {
    return (
      <div className="gallery">
        {this.props.images.map((img, indx) => {
          return (
            <a className="preview"
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
              <img alt="" src={img.src}/>
            </a>
          );
        })}

        <Lightbox
          images={this.props.images}
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

export default Gallery;
