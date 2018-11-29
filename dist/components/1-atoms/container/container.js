import React from 'react';
import PropTypes from 'prop-types';

const Container = ({
  children
}) => React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column'
  }
}, children);

Container.defaultProps = {
  children: null
};
Container.propTypes = {
  children: PropTypes.node
};
export default Container;