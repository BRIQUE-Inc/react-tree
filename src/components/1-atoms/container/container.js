import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
);

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
