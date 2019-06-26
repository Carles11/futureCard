import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import Background from '@src/components/Background';
import Footer from '@src/components/Footer';
import Icon from '@src/components/Icon';
import backgroundImg from '@src/assets/image/background.jpg';

import {
  A, Article, H1, H2, Hr, Header, Section,
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
<<<<<<< HEAD
    <Background image={backgroundImg}>
      <Header background>
        <H1 invertColor sansSerif upperCase>
          {DIC.LANDING_TITLE}
        </H1>
        <Hr withSize="50%" withMargin="0 0 2rem" />
        <H2 invertColor tiny withMargin="1rem 0 2.5rem">
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
    <Article>
      <H2 withMargin="0">{DIC.ABOUT_US}</H2>
      <Hr withSize="100px" withMargin="0 0 2rem" />
    </Article>
    <Footer />
=======
    <Background image={backgroundImg} />
    <Header background>
      <H1 invertColor sansSerif upperCase>{DIC.LANDING_TITLE}</H1>
      <H2>{DIC.LANDING_SUBTITLE}</H2>
    </Header>
>>>>>>> contact header position
  </Section>
);

Landing.propTypes = {
  DIC: PropTypes.shape({
    ABOUT_US: PropTypes.string.isRequired,
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
