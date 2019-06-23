import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Figure, BackgroundImage } from '@src/css/elements';
import { useScrollPosition } from './Hooks';
// import Title from '../components/Title';

const Background = ({ image }) => {
  const [render, setRender] = useState(false);
  const [background, setBackground] = useState(
    Array.isArray(image) ? image[0] : image,
  );
  const scroll = useScrollPosition();
  const position = Math.floor(scroll / 10);
  let interval = 0;
  let index = 0;

  useEffect(() => {
    setRender(true);
  }, [render]);

  function renderBackground() {
    index = index < image.length - 1 ? index + 1 : 0;
    setBackground(image[index]);
  }

  useEffect(() => {
    if (Array.isArray(image)) {
      interval = setInterval(() => {
        renderBackground();
      }, 10000);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <Figure background>
        <BackgroundImage
          render={render}
          position={position}
          style={{ backgroundImage: `url(${background})` }}
        />
      </Figure>
    </Fragment>
  );
};

Background.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Background;
