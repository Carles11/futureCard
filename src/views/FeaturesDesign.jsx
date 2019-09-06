import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import { Section, Article, P } from '@src/css/elements';
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
        title={DIC.NAV_LABEL_CARD_DESIGN}
        meta={[
          { name: 'description', content: `${DIC.CARDS_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection title={DIC.CARDS_DESIGN_TITLE} subtitle={DIC.CARDS_DESIGN_SUBTITLE} />
      <Article centered>
        <P>{DIC.CARDS_DESIGN_CONTENT_0}</P>
        <P>{DIC.CARDS_DESIGN_CONTENT_1}</P>
      </Article>
      <Footer />
    </Section>
  );
};

Features.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CARDS_DESIGN: PropTypes.string.isRequired,
    CARDS_DESIGN_CONTENT_0: PropTypes.string.isRequired,
    CARDS_DESIGN_CONTENT_1: PropTypes.string.isRequired,
    CARDS_DESIGN_DESCRIPTION: PropTypes.string.isRequired,
    CARDS_DESIGN_SUBTITLE: PropTypes.string.isRequired,
    CARDS_DESIGN_TITLE: PropTypes.string.isRequired,
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
