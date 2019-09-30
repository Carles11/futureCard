import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import Icon from '@src/components/Icon';
import Loader from '@src/components/Loader';
import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { NAVIGATION, BACKGROUND_IMG } from '@src/utils/constants';

import { formatDate } from '@src/utils/helpers';

import Box from '@src/css/blocks/Box';
import {
  A, Article, Grid, Button, H4, Hr, P,
} from '@src/css/elements';

import { getLocation } from '@src/actions/location/actions';
import { getCareers } from '@src/actions/careers/actionsSideEffects';

const Careers = ({
  DIC, careers, count, handleGetCareers,
}) => {
  const [loading, setLoading] = useState(false);
  const [title, ...content] = DIC.ABOUT_US_CAREERS_DESCRIPTION.split('.');

  useEffect(() => {
    if (!careers.success && !loading) {
      setLoading(true);
      handleGetCareers();
    }
  }, [careers]);
  const SECTIONS = NAVIGATION.find(nav => nav.label === 'ABOUT');
  const FILTERED_SECTIONS = SECTIONS.child.filter(
    item => item.label !== 'CAREERS',
  );
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_CAREERS}`}
      description={`${title}`}
      image={BACKGROUND_IMG.CAREERS}
    >
      <HeaderSection title={DIC.NAV_LABEL_CAREERS} subtitle={`${title}`} />
      <Article centered>
        <P withMargin="0 0 4rem">{content.join('.')}</P>
        <Grid column>
          <Grid middle>
            <Grid flex="1">
              <H4 withMargin="1rem 0">{`Found ${count} job Offer/s.`}</H4>
            </Grid>
            <Grid heightProp="50px">
              <Grid withMargin="0">
                <A role="button" to="/admin/careers">
                  Upload your CV
                </A>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hr invertColor />
        {!careers.length ? (
          <Grid withMargin="17rem" middle vertical="center">
            <Loader />
          </Grid>
        ) : (
          <Box wrap="true">
            {careers.map(item => (
              <Box.Link
                to="#"
                key={item._id}
                with_scale="true"
                with_background="true"
                wrap="true"
              >
                <Box.Figure>
                  <Box.Figure.Image src={item.image} alt={item.title} />
                </Box.Figure>
                <Grid vertical="center">
                  <P tiny withMargin="1.5rem 0 0.25rem" highlight>
                    {`${DIC.NEWS_PUBLISHED_THE} ${formatDate(item.updatedAt)}`}
                  </P>
                </Grid>

                <H4 withMargin="0 1rem 0.5rem" centered>
                  {item.title}
                </H4>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P withPadding="0 1rem 0.75rem">{item.text}</P>
                {!!item.link && (
                  <Grid withMargin="0 0 1.5rem" vertical="center">
                    <A role="button" to={item.link}>
                      {DIC.LEARN_MORE}
                      <Icon>
                        <FiArrowRightCircle />
                      </Icon>
                    </A>
                  </Grid>
                )}
              </Box.Link>
            ))}
          </Box>
        )}
        <Box>
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
        </Box>
        <Button.Centered>
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

Careers.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    NAV_LABEL_CAREERS: PropTypes.string.isRequired,
    ABOUT_US_CAREERS_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
  careers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ),
  handleGetCareers: PropTypes.func.isRequired,
  count: PropTypes.number,
};

const mapStateToProps = ({ dictionary, location, careers }) => ({
  DIC: dictionary.data,
  path: location.path,
  careers: careers.data,
  count: careers.count,
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
  handleGetCareers: () => dispatch(getCareers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Careers);
