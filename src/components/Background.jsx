import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Figure, BackgroundImage } from '@src/css/elements';

const Background = ({ image, children }) => {
  const [background, setBackground] = useState(
    Array.isArray(image) ? image[0] : image,
  );

  function renderBackground() {
    let index = 0;
    index = index < image.length - 1 ? index + 1 : 0;
    setBackground(image[index]);
  }

  useEffect(() => {
    let interval;

    if (Array.isArray(image)) {
      interval = setInterval(() => {
        renderBackground();
      }, 10000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <Figure background>
      <BackgroundImage style={{ backgroundImage: `url(${background})` }} />
      {children}
    </Figure>
  );
};

Background.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  children: PropTypes.node,
};

export default Background;
