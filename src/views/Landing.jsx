import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { Section } from '@src/css/elements';

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
      <h1>{DIC.LANDING_TITLE}</h1>
      <h1>Holakease</h1>
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
