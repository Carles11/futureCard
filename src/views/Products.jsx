import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '@src/components/layout/Header';


import { Section } from '@src/css/elements';
import Layout from '@src/css/blocks/Layout';

const Products = ({ dictionary }) => {
  const { data: DIC } = dictionary;

  return (
    <Section>
      <Layout.Component>
        <Header />
        <h1>{DIC.PRODUCTS_TITLE}</h1>
      </Layout.Component>
    </Section>
  );
};

Products.propTypes = {
  dictionary: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  dictionary,
});

export default connect(
  mapStateToProps,
  null,
)(Products);
