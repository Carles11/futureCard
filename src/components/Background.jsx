import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Figure, BackgroundImage } from '@src/css/elements/index';
import useScroll from '@src/hooks/useScroll';

/**
 * Renders a background Image
 *
 * @param {Object} props
 * @param {string} props.image
 * @param {any} props.children
 * @param {boolean} props.effect
 */
const Background = ({
  image, section, effect, children,
}) => {
  const position = useScroll();
  const [background, setBackground] = useState(
    Array.isArray(image) ? image[0] : image,
  );
  const [blur, setBlur] = useState(0);

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

  useEffect(() => {
    if (effect && position > 0 && position < 300) {
      const currentBlur = Math.floor((position / 50) * 1);
      setBlur(currentBlur);
    }
  }, [position]);

  return (
    <Figure background section={section}>
      <BackgroundImage
        blur={blur}
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
  effect: PropTypes.bool,
};

export default Background;
