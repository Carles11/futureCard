import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { Section } from '@src/css/elements';

const Products = ({ dictionary }) => {
  const { data: DIC } = dictionary;

  return (
    <Section>
      <h1>{DIC.PRODUCTS_TITLE}</h1>
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
