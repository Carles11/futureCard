import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FiArrowRightCircle } from 'react-icons/fi';
import Icon from '@src/components/Icon';
import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { BACKGROUND_IMG } from '@src/utils/constants';

// import Box from '@src/css/blocks/Box';
import List from '@src/css/blocks/List';
import {
  A, Article, Button, P,
} from '@src/css/elements';

const AboutFacility = ({ DIC }) => {
  const [title, ...first] = DIC.ABOUT_US_FACILITY_DESCRIPTION.split('.');
  const [para1, para2, ...second] = first;
  const [para3, para4, ...third] = second;
  const [para5, para6] = third;

  const list = DIC.ABOUT_US_FACILITY_LIST;
  // const SECTIONS = NAVIGATION.find(nav => nav.label === 'ABOUT');
  // const FILTERED_SECTIONS = SECTIONS.child.filter(
  //   item => item.label !== 'FACILITY',
  // );

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_FACILITY}`}
      description={`${title}`}
      image={BACKGROUND_IMG.ABOUT_FACILITY}
    >
      <HeaderSection title={DIC.NAV_LABEL_FACILITY} subtitle={`${title}`} />
      <Article centered>
        <P>{`${para1}. ${para2}.`}</P>
        <P>{`${para3}. ${para4}.`}</P>
        <P>{`${para5}.`}</P>
        <P>{`${para6}`}</P>
        <List>
          {list.map(item => (
            <List.Item withDecoration key={item.id}>
              {item.text}
            </List.Item>
          ))}
        </List>
        <P>{DIC.ABOUT_US_FACILITY_DESCRIPTION_1}</P>
        {/* <Box>
          {FILTERED_SECTIONS.map((section) => {
            const TITLE = `NAV_LABEL_${section.label}`;
            const CONTENT = `ABOUT_US_${section.label}_DESCRIPTION`;

            return (
              <Box.Link
                to={section.link}
                key={section.key}
                with_scale="true"
                with_background="true"
              >
                <H4 withMargin="1.5rem 0.5rem 0.5rem" centered>
                  {DIC[TITLE]}
                </H4>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P small centered withPadding="0 1rem 0.5rem">
                  {`${DIC[CONTENT].split('.')[0]}.`}
                </P>
              </Box.Link>
            );
          })}
        </Box> */}
        <Button.Centered withMargin="3.3rem">
          <A role="button" to="/card-features">
            {`${DIC.BACK_HOME} ${DIC.NAV_LABEL_ABOUT}`}
            <Icon>
              <FiArrowRightCircle />
            </Icon>
          </A>
        </Button.Centered>
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
