import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import LandingAbout from '@src/components/LandingAbout';
import LandingNews from '@src/components/LandingNews';
import LandingMarkets from '@src/components/LandingMarkets';
import Background from '@src/components/Background';
import Footer from '@src/components/Footer';
import backgroundImg from '@src/assets/image/background.jpg';
import useLocation from '@src/hooks/useLocation';
import useScroll from '@src/hooks/useScroll';
import useWindowSize from '@src/hooks/useWindowSize';
import { BACKGROUND_IMG } from '@src/utils/constants';

import {
  A,
  Container,
  H1,
  H2,
  Hr,
  Header,
  Section,
  Span,
  Figure,
  BackgroundImage,
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
  const [animate, setAnimate] = useState(false);
  const [initial, setInitial] = useState(false);
  const position = useScroll(true);
  const { h: height } = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!animate && position < 300) {
      setAnimate(true);
      setInitial(false);
    }
    if (!initial && position > 300) {
      setInitial(true);
      setAnimate(false);
    }
  }, [position]);

  return (
    <Section>
      <Helmet
        title={DIC.WELLCOME_TITLE}
        meta={[
          { name: 'description', content: `${DIC.APP_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <Background image={backgroundImg} fixed>
        <Fragment>
          <Header background animate={animate} initial={initial}>
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
            <Hr
              withMargin="3rem 0"
              animation
              animate={!!animate && '50%'}
              initial={initial}
            />
            <H2 sansSerif invertColor tiny withMargin="1rem 0 1rem 0 ">
              {DIC.LANDING_SUBTITLE}
            </H2>
            <A withmargin="2rem 0" icon role="button" to="/about-futurecard/">
              {`${DIC.LEARN_MORE} ${DIC.ABOUT_US}`}
              <Span icon>
                <FiArrowRightCircle />
              </Span>
            </A>
          </Header>
        </Fragment>
      </Background>
      <Container position={height} background>
        <LandingAbout DIC={DIC} />
      </Container>
      <Container nopadding>
        <Figure background body>
          <BackgroundImage
            position={Math.floor(position / 10)}
            style={{
              backgroundImage: `url(${BACKGROUND_IMG.CONTACT_MAP_IN_CARLES_CLOUDINARY})`,
            }}
          />
        </Figure>
      </Container>
      <Container background>
        <LandingMarkets DIC={DIC} />
      </Container>
      <Container>
        <LandingNews DIC={DIC} />
      </Container>
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
