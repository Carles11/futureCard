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
      description={`${title}`}
      image={BACKGROUND_IMG.ABOUT_FACILITY}
    >
      <HeaderSection title={DIC.NAV_LABEL_FACILITY} subtitle={`${title}`} />
      <Article centered>
        {content.map(item => (
          <P>
            {item}
.
          </P>
        ))}
        <List>
          {list.map(item => (
            <List.Item withDecoration key={item.id}>
              {item.text}
            </List.Item>
          ))}
        </List>
        <P>{DIC.ABOUT_US_FACILITY_DESCRIPTION_1}</P>
      </Article>
    </ViewLayout>
  );
};

AboutFacility.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    ABOUT_US_FACILITY_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_FACILITY_DESCRIPTION_1: PropTypes.string.isRequired,
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
