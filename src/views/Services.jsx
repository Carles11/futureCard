import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Section, Header, H1, H2,
} from '@src/css/elements';

const Services = ({ DIC }) => (
  <Section>
    <Helmet
      title={DIC.NAV_LABEL_SERVICES}
      meta={[
        { name: 'description', content: `${DIC.SERVICES_DESCRIPTION}` },
        { property: 'og:title', content: 'welcome to futurecard.com' },
      ]}
    />
    <Header>
      <H1>{DIC.SERVICES_TITLE}</H1>
      <H2>{DIC.SERVICES_SUBTITLE}</H2>
    </Header>
  </Section>
);

Services.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    SERVICES_TITLE: PropTypes.string.isRequired,
    SERVICES_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(Services);
