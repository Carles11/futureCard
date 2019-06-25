import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WorldMapBackground from '@src/components/WorldMapBackground';
import worldMapImg from '@src/assets/image/worldMapBackgroundWhite.jpg';

import { Section } from '@src/css/elements';

const Contact = ({ DIC }) => (
  <Section>
    <Helmet
      title={DIC.NAV_LABEL_CONTACT}
      meta={[
        { name: 'description', content: `${DIC.CONTACT_DECRIPTION}` },
        { property: 'og:title', content: 'Contact page of FutureCard Industries' },
      ]}
    />
    <WorldMapBackground
      image={worldMapImg}
      title={DIC.CONTACT_TITLE}
      subtitle={DIC.CONTACT_SUBTITLE}
    />
  </Section>
);


Contact.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CONTACT: PropTypes.string.isRequired,
    CONTACT_TITLE: PropTypes.string.isRequired,
    CONTACT_SUBTITLE: PropTypes.string.isRequired,
    CONTACT_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(Contact);
