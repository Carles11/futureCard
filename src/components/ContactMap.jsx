
import React from 'react';
import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { ADDRESSES } from '@src/utils/constants';
import Logo from '@src/assets/image/logo.png';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
   
  @media only screen and(max-width: 649px){
    min-width: 649px;
  }
  @media only screen and(max-width: 813px{
    min-width: 813px;
    
  })
  
`;
const futureCardIcon = L.icon({
  iconUrl: `${Logo}`,
  iconSize: [75, 75],
  popupAnchor: [0, -15],
});
// GPS REFERENCE COORDINATES:
// MADRID:                          40°25′    N, 03°42′      E
// PARIS:                           48°51′    N, 02°21′      O
// JOHANNESBURG:                    26°12′16″ S, 28°02′44″   E
// DUBAI:                           25°15′47″ N, 55°17′50″   E


export default class ContactMap extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [39, 45],
      detectRetina: true,
      zoom: 4,
      zoomControl: false,
      minZoom: 2,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.map.once('focus', () => { this.map.scrollWheelZoom.enable(); }));

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
    return <Wrapper width="100%" height="70vh" id="map" />;
  }
}
