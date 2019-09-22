import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@src/css/blocks/Box';
import List from '@src/css/blocks/List';

import {
  A, Article, P, H3, Hr,
} from '@src/css/elements';

const CardsListOptions = memo(
  ({ options }) => (
    <Article centered>
      <Box>
        {options.map(option => (
          <Box.Item key={option.id} with_background="true">
            <H3 withMargin="1.5rem 0.5rem 1rem" centered>
              {option.label}
            </H3>
            <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
            <P small>{option.description}</P>
            {option.child ? (
              <List>
                {option.child.map(link => (
                  <List.Item link key={link.id}>
                    <A role="link" to={link.link}>
                      {link.label}
                    </A>
                  </List.Item>
                ))}
              </List>
            ) : null}
          </Box.Item>
        ))}
      </Box>
    </Article>
  ),
  areEqual,
);

CardsListOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    }),
  ).isRequired,
};

function areEqual(prevProps, nextProps) {
  return prevProps.options === nextProps.options;
}

export default CardsListOptions;
