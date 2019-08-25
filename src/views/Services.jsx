import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderSection from '@src/components/HeaderSection';
import { Section } from '@src/css/elements';
import Footer from '@src/components/Footer';
import useLocation from '@src/hooks/useLocation';

import { getLocation } from '@src/actions/location/actions';

const Services = ({
  DIC, path, location, handleLocation,
}) => {
  useLocation(path, location, handleLocation);

  return (
    <Section>
      <Helmet
        title={DIC.NAV_LABEL_SERVICES}
        meta={[
          { name: 'description', content: `${DIC.SERVICES_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection
        title={DIC.SERVICES_TITLE}
        subtitle={DIC.SERVICES_SUBTITLE}
      />
      <Footer />
    </Section>
  );
};

Services.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    SERVICES_TITLE: PropTypes.string.isRequired,
    SERVICES_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_DESCRIPTION: PropTypes.string.isRequired,
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
)(Services);
