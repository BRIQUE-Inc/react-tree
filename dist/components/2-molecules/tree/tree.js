"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeTree = exports.findChildren = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _functionals = require("../../../assets/js/functionals");

var _container = _interopRequireDefault(require("../../1-atoms/container/container"));

var _nodeItem = _interopRequireDefault(require("../../1-atoms/node-item/node-item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* ======= Functions ======= */

/* === Helper === */

/**
 * @function findChildren
 * @param {array} list
 * @param {function} checkOpen return true or false
 * @param {string} idKey
 * @param {string} parentKey
 * @param {string} leafKey
 * @param {string} parentNode
 * @param {number} depth
 * @return {generator} [node, depth]
 */
var findChildren =
/*#__PURE__*/
regeneratorRuntime.mark(function findChildren(list, checkOpen, idKey, parentKey, leafKey, parentNode, depth) {
  var children, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;

  return regeneratorRuntime.wrap(function findChildren$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!parentNode[leafKey]) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          if (checkOpen(parentNode)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return");

        case 4:
          children = _functionals.L.filter(function (node) {
            return node[parentKey] === parentNode[idKey];
          }, list);
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 8;
          _iterator = children[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          child = _step.value;
          _context.next = 14;
          return [child, depth];

        case 14:
          return _context.delegateYield(findChildren(list, checkOpen, idKey, parentKey, leafKey, child, depth + 1), "t0", 15);

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 10;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t1 = _context["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, findChildren, this, [[8, 20, 24, 32], [25,, 27, 31]]);
});
/**
 * @function makeTree
 * @param {array} list
 * @param {function} checkOpen return true or false
 * @param {string} idKey
 * @param {string} parentKey
 * @param {string} rootKey
 * @param {string} leafKey
 * @return {generator} [node, depth]
 */

exports.findChildren = findChildren;
var makeTree =
/*#__PURE__*/
regeneratorRuntime.mark(function makeTree(list, checkOpen, idKey, parentKey, rootKey, leafKey) {
  var roots, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, root;

  return regeneratorRuntime.wrap(function makeTree$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          roots = _functionals.L.filter(function (node) {
            return node[rootKey];
          }, list);
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context2.prev = 4;
          _iterator2 = roots[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context2.next = 14;
            break;
          }

          root = _step2.value;
          _context2.next = 10;
          return [root, 0];

        case 10:
          return _context2.delegateYield(findChildren(list, checkOpen, idKey, parentKey, leafKey, root, 1), "t0", 11);

        case 11:
          _iteratorNormalCompletion2 = true;
          _context2.next = 6;
          break;

        case 14:
          _context2.next = 20;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t1 = _context2["catch"](4);
          _didIteratorError2 = true;
          _iteratorError2 = _context2.t1;

        case 20:
          _context2.prev = 20;
          _context2.prev = 21;

          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }

        case 23:
          _context2.prev = 23;

          if (!_didIteratorError2) {
            _context2.next = 26;
            break;
          }

          throw _iteratorError2;

        case 26:
          return _context2.finish(23);

        case 27:
          return _context2.finish(20);

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  }, makeTree, this, [[4, 16, 20, 28], [21,, 23, 27]]);
});
/* ======= Components ======= */

/* === Main === */

exports.makeTree = makeTree;

var Tree = function Tree(_ref) {
  var list = _ref.list,
      openIds = _ref.openIds,
      idKey = _ref.idKey,
      parentKey = _ref.parentKey,
      rootKey = _ref.rootKey,
      leafKey = _ref.leafKey,
      openKey = _ref.openKey,
      renderContainer = _ref.renderContainer,
      renderNode = _ref.renderNode;
  var opensById = openKey == null && Array.isArray(openIds) && (0, _functionals.reduce)(function (acc, id) {
    acc[id] = true;
    return acc;
  }, {}, openIds);
  var checkOpen = openKey != null ? function (node) {
    return node[openKey];
  } : openIds == null ? function () {
    return true;
  } : Array.isArray(openIds) ? function (node) {
    return opensById[node[idKey]];
  } : function (node) {
    return openIds[node[idKey]];
  };
  var nodes = (0, _functionals.go)(makeTree(list, checkOpen, idKey, parentKey, rootKey, leafKey), _functionals.L.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        node = _ref3[0],
        depth = _ref3[1];

    return renderNode(node, depth, idKey);
  }), _functionals.takeAll);
  return renderContainer(nodes);
};

Tree.defaultProps = {
  list: [],
  openIds: null,
  idKey: 'id',
  parentKey: 'parent',
  rootKey: 'root',
  leafKey: 'leaf',
  openKey: null,
  renderContainer: function renderContainer(children) {
    return _react.default.createElement(_container.default, null, children);
  },
  renderNode: function renderNode(node, depth, idKey) {
    return _react.default.createElement(_nodeItem.default, {
      key: node[idKey],
      depth: depth
    }, node.display);
  }
};
Tree.propTypes = {
  list: _propTypes.default.arrayOf(_propTypes.default.object),
  openIds: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.objectOf(_propTypes.default.bool)]),
  idKey: _propTypes.default.string,
  parentKey: _propTypes.default.string,
  rootKey: _propTypes.default.string,
  leafKey: _propTypes.default.string,
  openKey: _propTypes.default.string,
  renderContainer: _propTypes.default.func,
  renderNode: _propTypes.default.func
};
var _default = Tree;
exports.default = _default;