import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '@src/components/Footer';
import useLocation from '@src/hooks/useLocation';
import HeaderSection from '@src/components/HeaderSection';

import { Article, Section, P } from '@src/css/elements';

import { getLocation } from '@src/actions/location/actions';

const AboutFCI = ({ DIC, path, location, handleLocation }) => {
  useLocation(path, location, handleLocation);

  return (
    <Section>
      <Helmet
        title={DIC.NAV_LABEL_ABOUT}
        meta={[
          { name: 'description', content: `${DIC.ABOUT_US_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection
        title={DIC.NAV_LABEL_WHO_WE_ARE}
        subtitle={DIC.ABOUT_SUBTITLE}
      />
      <Article centered>
        <P>{DIC.ABOUT_US_CONTENT_0}</P>
        <P>{DIC.ABOUT_US_CONTENT_1}</P>
      </Article>
      <Footer />
    </Section>
  );
};

AboutFCI.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    NAV_LABEL_WHO_WE_ARE: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_0: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_1: PropTypes.string.isRequired,
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
)(AboutFCI);
