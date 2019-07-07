import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderSection from '@src/components/HeaderSection';
import {
  Section,
} from '@src/css/elements';
import Footer from '@src/components/Footer';

const Services = ({ DIC }) => (
  <Section>
    <Helmet
      title={DIC.NAV_LABEL_SERVICES}
      meta={[
        { name: 'description', content: `${DIC.SERVICES_DESCRIPTION}` },
        { property: 'og:title', content: 'welcome to futurecard.com' },
      ]}
    />
    <HeaderSection title={DIC.SERVICES_TITLE} subtitle={DIC.SERVICES_SUBTITLE} />
    <Footer />
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
