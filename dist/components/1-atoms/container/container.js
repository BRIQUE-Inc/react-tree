"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ======= Constants ======= */

/* === Style === */
var CONTAINER_STYLE = {
  display: 'flex',
  flexDirection: 'column'
};
/* ======= Components ======= */

/* === Main === */

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    style: CONTAINER_STYLE
  }, children);
};

Container.defaultProps = {
  children: null
};
Container.propTypes = {
  children: _propTypes.default.node
};
var _default = Container;
exports.default = _default;