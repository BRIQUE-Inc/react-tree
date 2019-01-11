"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ======= Components ======= */

/* === Main === */
var NodeItem = function NodeItem(_ref) {
  var depth = _ref.depth,
      children = _ref.children;
  return _react.default.createElement("div", null, _react.default.createElement("span", {
    style: {
      paddingLeft: "".concat(depth * 10, "px")
    }
  }, children));
};

NodeItem.defaultProps = {
  depth: 0,
  children: null
};
NodeItem.propTypes = {
  depth: _propTypes.default.number,
  children: _propTypes.default.node
};
var _default = NodeItem;
exports.default = _default;