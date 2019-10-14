import React from 'react';
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
  image, section, fixed, children,
}) => {
  const position = useScroll();

  return (
    <Figure background section={section} fixed={fixed}>
      <BackgroundImage
        position={Math.floor(position / 10)}
        section={section}
        style={{ backgroundImage: `url(${image})` }}
      />
      {children}
    </Figure>
  );
};

Background.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  section: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node,
  fixed: PropTypes.bool,
};

export default Background;
