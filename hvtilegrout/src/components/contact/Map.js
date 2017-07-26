import React, { Component } from "react";

import SectionHeaderText from "../menus/SectionHeaderText";

class Map extends Component {
  constructor(props) {
    super(props);
    this.location = {lat: 37.774684, long: -122.435652};
  }

  componentDidMount() {
    window.initMap = function() {
      this.map = new google.maps.Map(this.refs.map, {zoom: 4, center: this.location});
    };
  }

  render() {
    return (
      <section id="location">
        <SectionHeaderText text="Location" center />
        <div ref="map"></div>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeOtleSGDXxeZDwPiRKOwxZYLq7GogHvY&callback=initMap">
        </script>
      </section>
    );
  }
}

export default Map;
