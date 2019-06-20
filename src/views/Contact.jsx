import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Section } from '@src/css/elements';
import Layout from '@src/css/blocks/Layout';

const Contact = ({ dictionary }) => {
  const { data: DIC } = dictionary;
  return (
    <Section>
      <Layout.InternPage>
        <Layout.ContactBG>
          <h1>{DIC.CONTACT_TITLE}</h1>
        </Layout.ContactBG>
      </Layout.InternPage>
    </Section>
  );
};

Contact.propTypes = {
  dictionary: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  dictionary,
});

export default connect(
  mapStateToProps,
  null,
)(Contact);
