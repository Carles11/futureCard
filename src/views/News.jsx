import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import { Section } from '@src/css/elements';
import Footer from '@src/components/Footer';
import useLocation from '@src/hooks/useLocation';

import { getLocation } from '@src/actions/location/actions';

const News = ({
  DIC, path, location, handleLocation,
}) => {
  useLocation(path, location, handleLocation);

  return (
    <Section>
      <Helmet
        title={DIC.NAV_LABEL_NEWS}
        meta={[
          { name: 'description', content: `${DIC.NEWS_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection title={DIC.NEWS_TITLE} subtitle={DIC.NEWS_SUBTITLE} />
      <Footer />
    </Section>
  );
};

News.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NEWS_TITLE: PropTypes.string.isRequired,
    NEWS_SUBTITLE: PropTypes.string.isRequired,
    NEWS_DESCRIPTION: PropTypes.string.isRequired,
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
)(News);
