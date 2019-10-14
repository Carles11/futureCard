import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useScroll from '@src/hooks/useScroll';

import {
  Header, H2, H3, Hr,
} from '@src/css/elements';

const HeaderSection = ({ title, subtitle }) => {
  const position = useScroll(true);
  const [animate, setAnimate] = useState(false);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    if (!animate && position < 500) {
      setAnimate(true);
      setInitial(false);
    }
  }, [position]);

  return (
    <Header centered animate={animate} initial={initial}>
      <H2 secundaryColor withMargin="1rem 0 0.75rem" withAlign="center">
        {title}
      </H2>
      {!!subtitle && (
        <H3 withMargin="0" centered tiny>
          {subtitle}
        </H3>
      )}
      <Hr
        withMargin="1.5rem 0 2rem"
        withAlign="center"
        animation
        animate={!!animate && '180px'}
        initial={initial}
      />
    </Header>
  );
};

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default HeaderSection;
