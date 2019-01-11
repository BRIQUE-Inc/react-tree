import React from 'react';
import PropTypes from 'prop-types';

/* ======= Constants ======= */

/* === Style === */

const CONTAINER_STYLE = {
  display: 'flex',
  flexDirection: 'column',
};

/* ======= Components ======= */

/* === Main === */

const Container = ({ children }) => (
  <div style={CONTAINER_STYLE}>{children}</div>
);

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
