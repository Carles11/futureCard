import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Section } from '@src/css/elements';
import Header from '@src/components/layout/Header';
import Layout from '@src/css/blocks/Layout';


const Services = ({ dictionary }) => {
  const { data: DIC } = dictionary;
  return (
    <Section>
      <Layout.InternPage>
        <Header />
        <h1>{DIC.SERVICES_TITLE}</h1>
      </Layout.InternPage>
    </Section>
  );
};

Services.propTypes = {
  dictionary: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  dictionary,
});

export default connect(
  mapStateToProps,
  null,
)(Services);
