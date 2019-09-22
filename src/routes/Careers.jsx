import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { BACKGROUND_IMG } from '@src/utils/constants';

import { Article, P } from '@src/css/elements';

import { getLocation } from '@src/actions/location/actions';

// @todo xvila - add redux logic for careers

const Careers = ({ DIC }) => {
  const [title, ...content] = DIC.ABOUT_US_CAREERS_DESCRIPTION.split('.');

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_CAREERS}`}
      description={`${title}.`}
      image={BACKGROUND_IMG.CAREERS}
    >
      <HeaderSection title={DIC.NAV_LABEL_CAREERS} subtitle={`${title}.`} />
      <Article centered>
        <P>{content.join('.')}</P>
        <P message>
          Unfortunately FutureCard does not have any open position at the
          moment.
        </P>
      </Article>
    </ViewLayout>
  );
};

Careers.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    NAV_LABEL_CAREERS: PropTypes.string.isRequired,
    ABOUT_US_CAREERS_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
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
