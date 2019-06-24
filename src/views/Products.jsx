import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import {
  Section, H1, H2, Header,
} from '@src/css/elements';
=======
import { Section, H1, H2, Header } from '@src/css/elements';
>>>>>>> contact routing & header working

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
<<<<<<< HEAD
      <H1 sansSerif upperCase>{DIC.PRODUCT_TITLE}</H1>
=======
      <H1>{DIC.PRODUCT_TITLE}</H1>
>>>>>>> contact routing & header working
      <H2 invertColor>{DIC.PRODUCT_SUBTITLE}</H2>
    </Header>
  </Section>
);

Products.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    PRODUCT_TITLE: PropTypes.string.isRequired,
    PRODUCT_SUBTITLE: PropTypes.string.isRequired,
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
