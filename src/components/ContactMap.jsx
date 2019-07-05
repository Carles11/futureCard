
import React from 'react';
import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { ADDRESSES } from '@src/utils/constants';
import Logo from '@src/assets/image/logo.png';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: sticky important!;
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
      .bindPopup(`${ADDRESSES[3].subtitle}<br>${ADDRESSES[3].title}<br>${ADDRESSES[3].address}<br>${ADDRESSES[3].location}<br>${ADDRESSES[3].phone}`);

    L.marker([48.7500000, 2.4500000], { icon: futureCardIcon }, { title: 'Paris' }).addTo(this.map)
      .bindPopup(`${ADDRESSES[2].subtitle}<br>${ADDRESSES[2].title}<br>${ADDRESSES[2].address}<br>${ADDRESSES[2].location}<br>${ADDRESSES[2].phone}`);

    L.marker([-25.2044444, 30.0455556], { icon: futureCardIcon }, { title: 'Johannesburg' }).addTo(this.map)
      .bindPopup(`${ADDRESSES[4].subtitle}<br>${ADDRESSES[4].title}<br>${ADDRESSES[4].address}<br>${ADDRESSES[4].location}<br>${ADDRESSES[4].phone}`);

    L.marker([25.2630556, 55.2972222], { icon: futureCardIcon }, { title: 'Dubai' }).addTo(this.map)
      .bindPopup(`${ADDRESSES[1].subtitle}<br>${ADDRESSES[1].title}<br>${ADDRESSES[1].address}<br>${ADDRESSES[1].subAddress}<br>${ADDRESSES[1].location}<br>${ADDRESSES[1].phone}`);

  }

  render() {
    return <Wrapper width="100%" height="100%" id="map" />;
  }
}
