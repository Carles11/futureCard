import React from 'react';

import { ADDRESSES } from '@src/utils/constants';

import {
  Address, Footer, Grid, H3, H4, Hr, P,
} from '@src/css/elements';

const FooterComponent = () => (
  <Footer>
    <Grid column>
      <Grid withMargin="0" queryColumn>
        <Grid column flex={1}>
          <Grid column>
            <H3 invertColor withSize="24px" withMargin="1rem 0 0">
              Company Offices
            </H3>
            <Hr withSize="100px" />
          </Grid>
          <Grid withMargin="1rem 0" wrapping>
            {ADDRESSES.map(item => (
              <Address key={item.id} wrapping>
                <H4 invertColor withSize="18px" withMargin="1rem 0 0">
                  {item.title}
                </H4>
                <P bold small highlight withMargin="0.15rem 0 0.75rem">
                  {item.subtitle}
                </P>
                <P invertColor tiny withMargin="0.25rem 0 0.1rem">
                  {item.address}
                </P>
                <P invertColor tiny bold withMargin="0 0 0.1rem">
                  {item.location}
                </P>
                <P invertColor tiny withMargin="0 0 0.1rem">
                  {item.phone}
                </P>
                {!!item.fax && (
                  <P invertColor tiny withMargin="0 0 0.2rem">
                    {item.fax}
                  </P>
                )}
              </Address>
            ))}
          </Grid>
        </Grid>
        <Grid column withMargin="0">
          <H3 invertColor withSize="24px" withMargin="1rem 0 0">
            Company Info
          </H3>
          <Hr withSize="100px" />
        </Grid>
      </Grid>
      <Grid darker>footer</Grid>
    </Grid>
  </Footer>
);

export default FooterComponent;
