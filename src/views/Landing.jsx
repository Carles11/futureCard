import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { Section } from '@src/css/elements';

const Landing = ({ DIC }) => (
  <Section>
    <Helmet
      title="Welcome to futurecard.com"
      meta={[
        { name: 'description', content: `${DIC.APP_DESCRIPTION}` },
        { property: 'og:title', content: 'welcome to futurecard.com' },
      ]}
    />
    <h1>{DIC.LANDING_TITLE}</h1>
  </Section>
);

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
