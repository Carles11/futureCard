import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderSection from '@src/components/HeaderSection';

import { Article, Section, P } from '@src/css/elements';
import Footer from '@src/components/Footer';
import useLocation from '@src/hooks/useLocation';

import { getLocation } from '@src/actions/location/actions';
import { getProducts } from '@src/actions/products/actionsSideEffects';

const Products = ({
  DIC,
  path,
  location,
  products,
  handleLocation,
  handleGetProducts,
}) => {
  useLocation(path, location, handleLocation);

  useEffect(() => {
    if (!products.success && !products.error) {
      handleGetProducts();
    }
    // @todo - xvila - Handling errors
  }, [products]);

  return (
    <Section>
      <Helmet
        title={DIC.PRODUCT_TITLE}
        meta={[
          { name: 'description', content: `${DIC.PRODUCT_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection
        title={DIC.PRODUCT_TITLE}
        subtitle={DIC.PRODUCT_SUBTITLE}
      />
      <Article centered>
        <P>{DIC.PRODUCTS_CONTENT_0}</P>
        <P>{DIC.PRODUCTS_CONTENT_1}</P>
      </Article>
      <Footer />
    </Section>
  );
};

Products.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    PRODUCTS_CONTENT_0: PropTypes.string.isRequired,
    PRODUCTS_CONTENT_1: PropTypes.string.isRequired,
    PRODUCT_TITLE: PropTypes.string.isRequired,
    PRODUCT_SUBTITLE: PropTypes.string.isRequired,
    PRODUCT_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  products: PropTypes.shape({
    success: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
  }),
  handleLocation: PropTypes.func.isRequired,
  handleGetProducts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, location, products }) => ({
  DIC: dictionary.data,
  path: location.path,
  products,
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
  handleGetProducts: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
