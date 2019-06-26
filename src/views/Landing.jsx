import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import LandingAbout from '@src/components/LandingAbout';
import LandingNews from '@src/components/LandingNews';
import Background from '@src/components/Background';
import Footer from '@src/components/Footer';
import Icon from '@src/components/Icon';
import backgroundImg from '@src/assets/image/background.jpg';

import {
  A, H1, H2, Hr, Header, Section,
} from '@src/css/elements';

const Landing = ({ DIC }) => (
  <Section>
    <Helmet
      title="Welcome to futurecard.com"
      meta={[
        { name: 'description', content: `${DIC.APP_DESCRIPTION}` },
        { property: 'og:title', content: 'welcome to futurecard.com' },
      ]}
    />

    <Background image={backgroundImg}>
      <Header background>
        <H1 invertColor sansSerif upperCase>
          {DIC.LANDING_TITLE}
        </H1>
        <Hr withSize="50%" withMargin="0 0 2rem" />
        <H2 sansSerif invertColor tiny withMargin="1rem 0 3.5rem">
          {DIC.LANDING_SUBTITLE}
        </H2>
        <A role="button" to="/about-us">
          {DIC.LEARN_MORE}
          <Icon>
            <FiArrowRightCircle />
          </Icon>
        </A>
      </Header>
    </Background>
    <LandingAbout DIC={DIC} />
    <LandingNews DIC={DIC} />
    <Footer />
  </Section>
);

Landing.propTypes = {
  DIC: PropTypes.shape({
    APP_DESCRIPTION: PropTypes.string.isRequired,
    LANDING_TITLE: PropTypes.string.isRequired,
    LANDING_SUBTITLE: PropTypes.string.isRequired,
    LEARN_MORE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(Landing);
