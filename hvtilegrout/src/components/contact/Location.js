import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import SectionHeaderText from "../menus/SectionHeaderText";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultOptions={{scrollwheel: false}}
    defaultZoom={15}
    defaultCenter={{ lat: 37.774684, lng: -122.435652 }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 37.7746842,
          lng: -122.435652,
        },
        key: "Location",
        defaultAnimation: 2,
      }],
    };
  }

  render() {
    return (
      <div style={{height: "500px", marginTop: "2em"}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: "500px" }} />
          }
          mapElement={
            <div style={{ height: "500px" }} />
          }
          markers={this.state.markers}
        />
      </div>
    );
  }
}

class Location extends Component {
  render() {
    return (
      <section style={{display: "block"}}>
        <SectionHeaderText text="Location" center />
        <Map />
      </section>
    );
  }
}

export default Location;
