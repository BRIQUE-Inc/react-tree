import React from 'react';
import PropTypes from 'prop-types';

/* ======= Components ======= */

/* === Main === */

const NodeItem = ({ depth, children }) => (
  <div>
    <span style={{ paddingLeft: `${depth * 10}px` }}>{children}</span>
  </div>
);

NodeItem.defaultProps = {
  depth: 0,
  children: null,
};

NodeItem.propTypes = {
  depth: PropTypes.number,
  children: PropTypes.node,
};

export default NodeItem;
