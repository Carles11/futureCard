import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
// @ts-ignore
import { FiArrowRightCircle } from 'react-icons/fi';

import LandingAbout from '@src/components/LandingAbout';
import LandingNews from '@src/components/LandingNews';
import LandingMarkets from '@src/components/LandingMarkets';
import Background from '@src/components/Background';
import Footer from '@src/components/Footer';
import Icon from '@src/components/Icon';
import backgroundImg from '@src/assets/image/background.jpg';
import useLocation from '@src/hooks/useLocation';
import useScroll from '@src/hooks/useScroll';

import {
  A, H1, H2, Hr, Header, Section, Span,
} from '@src/css/elements';
import { getLocation } from '@src/actions/location/actions';

/**
 * Landing Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 * @param {string} props.path
 * @param {string} props.location
 * @param {function} props.handleLocation
 */

const Landing = ({
  DIC, path, location, handleLocation,
}) => {
  useLocation(path, location, handleLocation);
  const position = useScroll(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (position && position > 200) {
      setVisible(false);
    }
    if (position && position <= 200) {
      setVisible(true);
    }
    return () => {};
  }, [position]);

  /** Handles scroll position to manage big logo visibility */
  const styleLogo = {
    height: 'auto',
    width: 'auto',
    visibility: 'visible',
  };
  if (!visible) styleLogo.visibility = 'hidden';

  return (
    <Section>
      <Helmet
        title={DIC.WELLCOME_TITLE}
        meta={[
          { name: 'description', content: `${DIC.APP_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <Background image={backgroundImg}>
        <Header background>
          <H1
            invertColor
            sansSerif
            firstCapital
            withMargin="8rem auto auto auto"
          >
            <Span invert>FutureCard, </Span>
            <br />
            {DIC.LANDING_TITLE}
          </H1>
          <Hr withSize="50%" withMargin="1rem 0 1rem" />
          <H2 sansSerif invertColor tiny withMargin="1rem 0 1rem 0 ">
            {DIC.LANDING_SUBTITLE}
          </H2>
          <A withmargin="1rem 0 2rem 0" role="button" to="/about-futurecard/">
            {`${DIC.LEARN_MORE} ${DIC.ABOUT_US}`}
            <Icon>
              <FiArrowRightCircle />
            </Icon>
          </A>
        </Header>
      </Background>
      <LandingAbout DIC={DIC} />
      <LandingMarkets DIC={DIC} />
      <LandingNews DIC={DIC} />
      <Footer />
    </Section>
  );
};

Landing.propTypes = {
  DIC: PropTypes.shape({
    APP_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US: PropTypes.string.isRequired,
    LANDING_TITLE: PropTypes.string.isRequired,
    LANDING_SUBTITLE: PropTypes.string.isRequired,
    LEARN_MORE: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({ dictionary, location }) => ({
  DIC: dictionary.data,
  path: location.path,
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
