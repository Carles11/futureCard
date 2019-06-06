import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { Section } from '@src/css/elements';
import Layout from '@src/css/blocks/Layout';

import LandingNews from '@src/components/layout/LandingNews';


const Landing = ({ dictionary }) => {
  const { data: DIC } = dictionary;

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

Landing.propTypes = {
  dictionary: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  dictionary,
});

export default connect(
  mapStateToProps,
  null,
)(Landing);
