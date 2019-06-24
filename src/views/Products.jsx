import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Section, H1, Header } from '@src/css/elements';

const Products = ({ DIC }) => (
  <Section>
    <Helmet
      title={DIC.NAV_LABEL_PRODUCTS}
      meta={[
        { name: 'description', content: `${DIC.PRODUCT_DESCRIPTION}` },
        { property: 'og:title', content: 'welcome to futurecard.com' },
      ]}
    />
    <Header>
      <H1>Products</H1>
    </Header>
  </Section>
);

Products.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    PRODUCT_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(Products);
