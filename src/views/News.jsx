import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Section } from '@src/css/elements';

const News = ({ dictionary }) => {
  const { data: DIC } = dictionary;
  return (
      <Section>
          <h1>{DIC.NEWS_TITLE}</h1>
        </Section>
  );
};

News.propTypes = {
  dictionary: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  dictionary,
});
export default connect(
  mapStateToProps,
  null,
)(News);
