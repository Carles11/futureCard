import React, { Fragment, useState, memo } from 'react';
import PropTypes from 'prop-types';

import { Grid, Figure, Image } from '@src/css/elements';

const CardCarousel = memo(({ images, name }) => {
  const [active, setActive] = useState(0);

  function handleClick(id) {
    setActive(id);
  }

  return (
    <Fragment>
      <Grid column>
        <Figure>
          <Image responsive loading="auto" src={images[active]} alt={name} />
        </Figure>
        <Grid withMargin="0 1rem">
          {images.map((image, index) => (
            <Figure carousel key={`image_${image}`}>
              <Image
                onClick={() => handleClick(index)}
                carousel
                active={active === index}
                src={image}
                alt={`${name}_${index}`}
              />
            </Figure>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
}, areEqual);

function areEqual(prepProps, nextProps) {
  return prepProps.images === nextProps.images;
}

CardCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};

export default CardCarousel;
