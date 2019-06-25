import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  BackgroundImage, H1, H2, Header,
} from '@src/css/elements';

const WorldMapBackground = ({ image, title, subtitle }) => (
  <Fragment>
    <BackgroundImage
      render
      style={{ backgroundImage: `url(${image})` }}
    />
    <Header>
      <H1 sansSerif upperCase toFront>{title}</H1>
      <H2 invertColor serif toFront>{subtitle}</H2>
    </Header>
  </Fragment>
);


WorldMapBackground.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default WorldMapBackground;
