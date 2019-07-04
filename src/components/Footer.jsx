import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ADDRESSES, NAVIGATION } from '@src/utils/constants';

import Layout from '@src/css/blocks/Layout';
import { Address, Footer, Grid, H3, H4, Hr, P } from '@src/css/elements';

function footerReducer(state, action) {
  switch (action.type) {
    case 'ALL':
      return {
        ...state,
        language: action.language,
        navigation: [...action.navigation],
      };
    default:
      return {
        ...state,
      };
  }
}

const FooterComponent = ({ LANG: language, DIC }) => {
  const initialState = { language, navigation: NAVIGATION };
  const [state, dispatch] = useReducer(footerReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'ALL', language, navigation: NAVIGATION });
  }, [language]);

  return (
    <Footer>
      <Grid column>
        <Grid withPadding='2rem 5%' queryColumn>
          <Grid column flex={1}>
            <Grid column>
              <H3 invertColor withSize='24px' withMargin='1rem 0 0'>
                Company Offices
              </H3>
              <Hr withSize='100px' />
            </Grid>
            <Grid withMargin='1rem 0' wrapping>
              {ADDRESSES.map(item => (
                <Address key={item.id} wrapping>
                  <H4 invertColor withSize='18px' withMargin='1rem 0 0'>
                    {item.title}
                  </H4>
                  <P bold small highlight withMargin='0.15rem 0 0.75rem'>
                    {item.subtitle}
                  </P>
                  <P invertColor tiny withMargin='0.25rem 0 0.1rem'>
                    {item.address}
                  </P>
                  <P invertColor tiny bold withMargin='0 0 0.1rem'>
                    {item.location}
                  </P>
                  <P invertColor tiny withMargin='0 0 0.1rem'>
                    {item.phone}
                  </P>
                  {!!item.fax && (
                    <P invertColor tiny withMargin='0 0 0.2rem'>
                      {item.fax}
                    </P>
                  )}
                </Address>
              ))}
            </Grid>
          </Grid>
          <Grid column withMargin='0'>
            <Grid column>
              <H3 invertColor withSize='24px' withMargin='1rem 0 0'>
                Company Info
              </H3>
              <Hr withSize='100px' />
            </Grid>
            <Grid withMargin='1rem 0' wrapping>
              <Layout.Footer>
                {state.navigation.map(item => {
                  const LABEL = `NAV_LABEL_${item.label}`;

                  return (
                    <Layout.Footer.Link key={item.key} to={item.link}>
                      {DIC[LABEL]}
                    </Layout.Footer.Link>
                  );
                })}
              </Layout.Footer>
            </Grid>
          </Grid>
        </Grid>
        <Grid darker withMargin='0' withPadding='2rem 5%'>
          footer
        </Grid>
      </Grid>
    </Footer>
  );
};

FooterComponent.propTypes = {
  LANG: PropTypes.string.isRequired,
  DIC: PropTypes.shape({
    NAV_LABEL_HOME: PropTypes.string.isRequired,
    NAV_LABEL_LANGUAGE: PropTypes.string.isRequired,
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  LANG: dictionary.language,
  DIC: dictionary.data,
});

// const mapDispatchToProps = dispatch => ({
//   handleSetDictionary: lang => dispatch(setDictionary(lang)),
// });

export default connect(
  mapStateToProps,
  null,
)(FooterComponent);
