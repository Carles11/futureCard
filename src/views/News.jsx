import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import {
  Section,
} from '@src/css/elements';
import Footer from '@src/components/Footer';

const News = ({ DIC }) => (
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

News.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NEWS_TITLE: PropTypes.string.isRequired,
    NEWS_SUBTITLE: PropTypes.string.isRequired,
    NEWS_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(News);
