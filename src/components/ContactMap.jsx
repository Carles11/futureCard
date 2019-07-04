
import React from 'react';
import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { OFFICES } from '@src/utils/constants';
import Logo from '@src/assets/image/logo.png';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;
const futureCardIcon = L.icon({
  iconUrl: `${Logo}`,
  iconSize: [75, 75],
  popupAnchor: [0, -15],
});

export default class ContactMap extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [15, 11],
      detectRetina: true,
      zoom: 4,
      zoomControl: false,
      minZoom: 4,
      maxZoom: 4,
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.map);
    L.marker([40.4166667, -3.7000000], { icon: futureCardIcon }, { title: 'Madrid' }).addTo(this.map)
      .bindPopup(`${OFFICES[3].name}<br>${OFFICES[3].description}<br>${OFFICES[3].address}<br>${OFFICES[3].city}<br>${OFFICES[3].telephone}`);
    L.circle([40.4166667, -3.7000000], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);
    L.marker([48.7500000, 2.4500000], { icon: futureCardIcon }, { title: 'Paris' }).addTo(this.map)
      .bindPopup(`${OFFICES[2].name}<br>${OFFICES[2].description}<br>${OFFICES[2].address}<br>${OFFICES[2].city}<br>${OFFICES[2].telephone}`);
    L.circle([48.7500000, 2.4500000], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);
    L.marker([-25.2044444, 30.0455556], { icon: futureCardIcon }, { title: 'Johannesburg' }).addTo(this.map)
      .bindPopup(`${OFFICES[4].name}<br>${OFFICES[4].description}<br>${OFFICES[4].address}<br>${OFFICES[4].city}<br>${OFFICES[4].telephone}`);
    L.circle([-25.2044444, 30.0455556], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);
    L.marker([25.2630556, 55.2972222], { icon: futureCardIcon }, { title: 'Dubai' }).addTo(this.map)
      .bindPopup(`${OFFICES[1].name}<br>${OFFICES[1].description}<br>${OFFICES[1].address}<br>${OFFICES[1].subAddress}<br>${OFFICES[1].city}<br>${OFFICES[1].telephone}`);
    L.circle([25.2630556, 55.2972222], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);
  }

  render() {
    return <Wrapper width="100%" height="100%" id="map" />;
  }
}
