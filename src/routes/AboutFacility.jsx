import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { BACKGROUND_IMG } from '@src/utils/constants';

import List from '@src/css/blocks/List';
import { Article, P } from '@src/css/elements';

const AboutFacility = ({ DIC }) => {
  const [title, ...content] = DIC.ABOUT_US_FACILITY_DESCRIPTION.split('.');
  const list = DIC.ABOUT_US_FACILITY_LIST;

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_FACILITY}`}
      description={`${title}.`}
      image={BACKGROUND_IMG.ABOUT_FACILITY}
    >
      <HeaderSection title={DIC.NAV_LABEL_FACILITY} subtitle={`${title}.`} />
      <Article centered>
        <P>{content.join('.')}</P>
        <List>
          {list.map(item => (
            <List.Item key={item.id}>{item.text}</List.Item>
          ))}
        </List>
      </Article>
    </ViewLayout>
  );
};

AboutFacility.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    NAV_LABEL_FACILITY: PropTypes.string.isRequired,
    ABOUT_US_FACILITY_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_FACILITY_LIST: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(AboutFacility);
