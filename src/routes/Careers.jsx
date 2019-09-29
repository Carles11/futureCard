import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';

import Loader from '@src/components/Loader';
import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { BACKGROUND_IMG } from '@src/utils/constants';
import { formatDate } from '@src/utils/helpers';
import Icon from '@src/components/Icon';

import Box from '@src/css/blocks/Box';
import {
  Article, P, Grid, H4, Hr, A,
} from '@src/css/elements';

import { getLocation } from '@src/actions/location/actions';
import { getCareers } from '@src/actions/careers/actionsSideEffects';

const Careers = ({ DIC, careers, handleGetCareers }) => {
  const [loading, setLoading] = useState(false);
  const [title, ...content] = DIC.ABOUT_US_CAREERS_DESCRIPTION.split('.');

  useEffect(() => {
    if (!careers.success && !loading) {
      setLoading(true);
      handleGetCareers();
    }
  }, [careers]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_CAREERS}`}
      description={`${title}`}
      image={BACKGROUND_IMG.CAREERS}
    >
      <HeaderSection title={DIC.NAV_LABEL_CAREERS} subtitle={`${title}`} />
      <Article centered>
        <P>{content.join('.')}</P>
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
};

const mapStateToProps = ({ dictionary, location, careers }) => ({
  DIC: dictionary.data,
  path: location.path,
  careers: careers.data,
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
  handleGetCareers: () => dispatch(getCareers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Careers);
