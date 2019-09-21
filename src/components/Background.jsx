import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Figure, BackgroundImage } from '@src/css/elements/index';

/**
 * Renders a background Image
 *
 * @param {Object} props
 * @param {string} props.image
 * @param {any} props.children
 */
const Background = ({ image, section, children }) => {
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
    <Figure background section={section}>
      <BackgroundImage
        section={section}
        style={{ backgroundImage: `url(${background})` }}
      />
      {children}
    </Figure>
  );
};

Background.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  section: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node,
};

export default Background;
