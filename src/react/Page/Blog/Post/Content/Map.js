import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MapsLoader from 'google-maps';
import Language from '../../../../Language/Language';

class MapContent extends Component {
  constructor(props) {
    super(props);

    MapsLoader.KEY = 'AIzaSyA5M0ChH7z265Ypy6LLg8NIloj2ZHiADms';
    MapsLoader.LIBRARIES = ['geometry'];
    MapsLoader.LANGUAGE = Language.locale();

    this.mapDiv = null;
  }

  loadMap() {
    let self = this;

    let options = {
      minZoom: 2,
      scrollwheel: false,
      streetViewControl: false
    };

    MapsLoader.load((google) => {
      let map = new google.maps.Map(self.mapDiv, options);

      var bounds = new google.maps.LatLngBounds();

      if (this.props.marker) {
        self.props.locations.forEach((location) => {
          const color = location.color || 'blue';
          let marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.lng},
            map: map,
            title: location.text,
            link: location.link,
            icon: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`
          });

          google.maps.event.addListener(marker, 'click', () => {
            if (marker.link) {
              browserHistory.push(marker.link);
            }
          });

          // TODO detect bounds if markers are disabled
          bounds.extend(marker.position);
        });

        map.fitBounds(bounds);
      }

      if (this.props.line) {
        let path = new google.maps.Polyline({
          path: self.props.locations,
          geodesic: true,
          strokeColor: '#67b9c4',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });

        path.setMap(map);
      }
    });
  }

  componentDidMount() {
    this.loadMap();
  }

  render() {
    let locations = [<div lat={48.11} lng={49.11} text="test" />];

    let content = (
      <div
        style={{height: '20rem'}}
        ref={(div) => { this.mapDiv = div; }}
      />
    );

    if (!this.props.full) {
      content = (
        <div className="row">
          {content}
        </div>
      );
    }

    return content;
  }
}

export default MapContent;
