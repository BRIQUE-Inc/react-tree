import React from 'react';
import PropTypes from 'prop-types';

const NodeItem = ({
  depth,
  children
}) => React.createElement("div", null, React.createElement("span", {
  style: {
    paddingLeft: `${depth * 10}px`
  }
}, children));

NodeItem.defaultProps = {
  depth: 0,
  children: null
};
NodeItem.propTypes = {
  depth: PropTypes.number,
  children: PropTypes.node
};
export default NodeItem;