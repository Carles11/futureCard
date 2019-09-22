import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from '@src/css/blocks/Breadcrumb';
import { H2, Button } from '@src/css/elements';
import { FiChevronDown } from 'react-icons/fi';

const BreadcrumbComponent = ({ items, DIC }) => {
  const [visible, setVisible] = useState(false);
  const [title, ...data] = items;
  const TITLE = `NAV_LABEL_${title.label}`;

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <Breadcrumb onClick={handleVisibility}>
      <Breadcrumb.Header>
        <H2 tiny flex="1">
          {DIC[TITLE]}
        </H2>
        <Button transparent>
          <FiChevronDown />
        </Button>
      </Breadcrumb.Header>

      <Breadcrumb.List visible={visible}>
        {data.map((item) => {
          const LABEL = `NAV_LABEL_${item.label}`;

          return (
            <Breadcrumb.Item key={item.key}>
              <Breadcrumb.Item.Link to={item.link}>
                {DIC[LABEL].toUpperCase()}
              </Breadcrumb.Item.Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb.List>
    </Breadcrumb>
  );
};

const areEqual = (prevProps, nextProps) => prevProps.items === nextProps.items;

BreadcrumbComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  DIC: PropTypes.shape({}),
};

export default memo(BreadcrumbComponent, areEqual);
