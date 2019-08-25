
import React from 'react';
import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

import { ADDRESSES } from '@src/utils/constants';
import Logo from '@src/assets/image/logo.png';
import MapWrapper from '@src/css/blocks/Layout/MapWrapper';
import { P } from '@src/css/elements';

const futureCardIcon = L.icon({
  iconUrl: `${Logo}`,
  iconSize: [45, 45],
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
      center: [40, 25], // [39, 45],
      detectRetina: true,
      zoom: 2,
      zoomControl: false,
      minZoom: 2,
      scrollWheelZoom: false,
      riseOnHover: true,
      riseOffset: 100,
      bubblingMouseEvents: true,
    });
    // THE MAP:
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.map.once('focus', () => { this.map.scrollWheelZoom.enable(); }));
    // MARKER MADRID
    L.marker([40.4166667, -3.7000000], { icon: futureCardIcon }, { title: 'Madrid' }, { alt: 'Future Card' }).addTo(this.map)
      .bindTooltip(`<P>${ADDRESSES[3].subtitle}<br>${ADDRESSES[3].title}<br>${ADDRESSES[3].address}<br><b>${ADDRESSES[3].location}</b><br>${ADDRESSES[3].phone}</P>`).closeTooltip();
    // MARKER PARIS
    L.marker([48.7500000, 2.4500000], { icon: futureCardIcon }, { title: 'Paris' }, { alt: 'Future Card' }).addTo(this.map)
      .bindTooltip(`<P>${ADDRESSES[2].subtitle}<br>${ADDRESSES[2].title}<br>${ADDRESSES[2].address}<br><b>${ADDRESSES[2].location}</b><br>${ADDRESSES[2].phone}</P>`).closeTooltip();
    // MARKER JOHANNESBURG
    L.marker([-25.2044444, 30.0455556], { icon: futureCardIcon }, { title: 'Johannesburg' }, { alt: 'Future Card' }).addTo(this.map)
      .bindTooltip(`<P>${ADDRESSES[4].subtitle}<br>${ADDRESSES[4].title}<br>${ADDRESSES[4].address}<br><b>${ADDRESSES[4].location}</b><br>${ADDRESSES[4].phone}</P>`).closeTooltip();
    // MARKER DUBAI
    L.marker([25.2630556, 55.2972222], { icon: futureCardIcon }, { title: 'Dubai' }, { alt: 'Future Card' }).addTo(this.map)
      .bindTooltip(`<P>${ADDRESSES[1].subtitle}<br>${ADDRESSES[1].title}<br>${ADDRESSES[1].address}<br>${ADDRESSES[1].subaddress}<br><b>${ADDRESSES[1].location}</b><br>${ADDRESSES[1].phone}</P>`).closeTooltip();
  }

  render() {
    return <MapWrapper width="100%" height="70vh" id="map" />;
  }
}
