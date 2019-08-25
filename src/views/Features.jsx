import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import { Section } from '@src/css/elements';
import Footer from '@src/components/Footer';
import useLocation from '@src/hooks/useLocation';

import { getLocation } from '@src/actions/location/actions';

const Features = ({
  DIC, path, location, handleLocation,
}) => {
  useLocation(path, location, handleLocation);

  return (
    <Section>
      <Helmet
        title={DIC.NAV_LABEL_CARDS}
        meta={[
          { name: 'description', content: `${DIC.CARDS_DESCRIPTIONS}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection title={DIC.CARDS_TITLE} subtitle={DIC.CARDS_SUBTITLE} />
      <Footer />
    </Section>
  );
};

Features.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CARDS: PropTypes.string.isRequired,
    CARDS_TITLE: PropTypes.string.isRequired,
    CARDS_SUBTITLE: PropTypes.string.isRequired,
    CARDS_DESCRIPTION: PropTypes.string.isRequired,
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
)(Features);
