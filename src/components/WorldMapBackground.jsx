import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Section, BackgroundImage, H1, H2, Header,
} from '@src/css/elements';

const WorldMapBackground = ({ image, title, subtitle }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, [render]);

  return (
    <Section>
      <BackgroundImage
        render={render}
        style={{ backgroundImage: `url(${image})` }}
      />
      <Header backgroundTop>
        <H1 sansSerif upperCase>{title}</H1>
        <H2 invertColor serif>{subtitle}</H2>
      </Header>
    </Section>
  );
};


WorldMapBackground.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default WorldMapBackground;
