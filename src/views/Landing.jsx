import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

<<<<<<< HEAD
import { Section } from '@src/css/elements';
import Layout from '@src/css/blocks/Layout';

import LandingNews from '@src/components/layout/LandingNews';

=======
import Background from '@src/components/Background';
import backgroundImg from '@src/assets/image/background.jpg';
>>>>>>> master

import { Section } from '@src/css/elements';

<<<<<<< HEAD
  return (
    <Section>
      <Helmet
        title="Welcome to futurecard.com"
        meta={[
          { name: 'description', content: 'description' },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <Layout.LandingBG>
        <Layout.Landing>
          <h1>{DIC.LANDING_TITLE}</h1>
          <h3>{DIC.LANDING_SUBTITLE}</h3>
        </Layout.Landing>
      </Layout.LandingBG>
      <LandingNews />
    </Section>
  );
};
=======
const Landing = ({ DIC }) => (
  <Section>
    <Helmet
      title="Welcome to futurecard.com"
      meta={[
        { name: 'description', content: `${DIC.APP_DESCRIPTION}` },
        { property: 'og:title', content: 'welcome to futurecard.com' },
      ]}
    />
    <Background image={backgroundImg} />
  </Section>
);
>>>>>>> master

Landing.propTypes = {
  DIC: PropTypes.shape({
    APP_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(Landing);
