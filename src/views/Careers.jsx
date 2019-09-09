import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import useLocation from '@src/hooks/useLocation';
import HeaderSection from '@src/components/HeaderSection';

import { Article, P } from '@src/css/elements';

import { getLocation } from '@src/actions/location/actions';

const Careers = ({
  DIC, path, location, handleLocation,
}) => {
  useLocation(path, location, handleLocation);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_CAREERS}`}
      description={DIC.ABOUT_US_CAREERS_DESCRIPTION}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_CAREERS}
        subtitle={DIC.ABOUT_US_CAREERS_SUBTITLE}
      />
      <Article centered>
        <P>NO CONTENT AVAILABLE</P>
        <P>HERE WILL APPEAR ALL CAREERS FROM THE DATABASE WHEN FEEDED</P>
      </Article>
    </ViewLayout>
  );
};

Careers.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CAREERS: PropTypes.string.isRequired,
    ABOUT_TITLE: PropTypes.string.isRequired,
    ABOUT_SUBTITLE: PropTypes.string.isRequired,
    ABOUT_US_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_CAREERS_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_CAREERS_SUBTITLE: PropTypes.string.isRequired,
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
)(Careers);
