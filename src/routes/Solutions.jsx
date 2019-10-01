import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Icon from '@src/components/Icon';
import { NAVIGATION, BACKGROUND_IMG } from '@src/utils/constants';
import healthCard from '@src/assets/image/health_card.png';

import Box from '@src/css/blocks/Box';
import List from '@src/css/blocks/List';
import {
  A, Article, H3, Hr, P, Grid, Figure, Image,
} from '@src/css/elements';

/**
 * Solutions View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const Solutions = ({ DIC }) => {
  const sections = NAVIGATION.find(nav => nav.label === 'SOLUTIONS');
  const [title, ...first] = DIC.SOLUTIONS_CONTENT.split('.');
  const [para1, para2, ...second] = first;
  const [para3, para4, ...third] = second;

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS}`}
      description={DIC.SOLUTIONS_DESCRIPTION}
      image={BACKGROUND_IMG.OUR_SOLUTIONS}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_SOLUTIONS}
        subtitle={DIC.SOLUTIONS_DESCRIPTION}
      />

      <Article centered>
        <P>{`${title}. ${para1}. ${para2}.`}</P>
        <P>{`${para3}. ${para4}.`}</P>
        <P>{`${third}.`}</P>
        <Box>
          {sections.child.map((section) => {
            const TITLE = `NAV_LABEL_${section.label}`;
            const CONTENT = `SOLUTIONS_${section.label}_CONTENT`;

            return (
              <Box.Item key={section.key} with_background="true">
                <H3 withMargin="1.5rem 0.5rem 1rem" centered>
                  {DIC[TITLE]}
                </H3>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P small withPadding="0 2rem 0.5rem">
                  {`${DIC[CONTENT].split('.')[0]}.`}
                </P>
                {section.child ? (
                  <List>
                    {section.child.map((link) => {
                      const LINK_TITLE = `NAV_LABEL_${link.label}`;
                      return (
                        <List.Item link key={link.key}>
                          <A role="link" to={link.link}>
                            {DIC[LINK_TITLE]}
                          </A>
                        </List.Item>
                      );
                    })}
                  </List>
                ) : (
                  <Fragment>
                    {!!section.image && (
                      <Figure card>
                        <Image responsive src={healthCard} alt={DIC[TITLE]} />
                      </Figure>
                    )}
                    <Grid withMargin="2rem 0 1.5rem" vertical="center">
                      <A role="button" to={section.link}>
                        {DIC[TITLE]}
                        <Icon>
                          <FiArrowRightCircle />
                        </Icon>
                      </A>
                    </Grid>
                  </Fragment>
                )}
              </Box.Item>
            );
          })}
        </Box>
      </Article>
    </ViewLayout>
  );
};

Solutions.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    SOLUTIONS_CONTENT: PropTypes.string.isRequired,
    SOLUTIONS_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(Solutions);
