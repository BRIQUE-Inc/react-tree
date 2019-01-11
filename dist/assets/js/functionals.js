"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.go = exports.callRight = exports.reduce = exports.takeAll = exports.take = exports.L = exports.curry = void 0;

/**
 * @function curry
 * @param {function} f
 * @return {function}
 * @description curry only one arguments
 */
var curry = function curry(f) {
  return function (a) {
    for (var _len = arguments.length, _ = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      _[_key - 1] = arguments[_key];
    }

    return _.length ? f.apply(void 0, [a].concat(_)) : function () {
      for (var _len2 = arguments.length, _ = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        _[_key2] = arguments[_key2];
      }

      return f.apply(void 0, [a].concat(_));
    };
  };
};
/**
 * @namespace L
 * @description lazy evaluated functions
 */


exports.curry = curry;
var L = {};
/**
 * @namespace L
 * @function map
 * @param {function} f
 * @param {iterable|iterator} iter
 * @return {generator}
 */

exports.L = L;
L.map = curry(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee(f, iter) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, a;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = iter[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 12;
            break;
          }

          a = _step.value;
          _context.next = 9;
          return f(a);

        case 9:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError) {
            _context.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}));
/**
 * @namespace L
 * @function filter
 * @param {function} f
 * @param {iterable|iterator} iter
 * @return {generator}
 */

L.filter = curry(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2(f, iter) {
  var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, a;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context2.prev = 3;
          _iterator2 = iter[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context2.next = 13;
            break;
          }

          a = _step2.value;

          if (!f(a)) {
            _context2.next = 10;
            break;
          }

          _context2.next = 10;
          return a;

        case 10:
          _iteratorNormalCompletion2 = true;
          _context2.next = 5;
          break;

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](3);
          _didIteratorError2 = true;
          _iteratorError2 = _context2.t0;

        case 19:
          _context2.prev = 19;
          _context2.prev = 20;

          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }

        case 22:
          _context2.prev = 22;

          if (!_didIteratorError2) {
            _context2.next = 25;
            break;
          }

          throw _iteratorError2;

        case 25:
          return _context2.finish(22);

        case 26:
          return _context2.finish(19);

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this, [[3, 15, 19, 27], [20,, 22, 26]]);
}));
/**
 * @namespace L
 * @function reject
 * @param {function} f
 * @param {iterable|iterator} iter
 * @return {generator}
 */

L.reject = curry(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee3(f, iter) {
  var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, a;

  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context3.prev = 3;
          _iterator3 = iter[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context3.next = 13;
            break;
          }

          a = _step3.value;

          if (f(a)) {
            _context3.next = 10;
            break;
          }

          _context3.next = 10;
          return a;

        case 10:
          _iteratorNormalCompletion3 = true;
          _context3.next = 5;
          break;

        case 13:
          _context3.next = 19;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](3);
          _didIteratorError3 = true;
          _iteratorError3 = _context3.t0;

        case 19:
          _context3.prev = 19;
          _context3.prev = 20;

          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }

        case 22:
          _context3.prev = 22;

          if (!_didIteratorError3) {
            _context3.next = 25;
            break;
          }

          throw _iteratorError3;

        case 25:
          return _context3.finish(22);

        case 26:
          return _context3.finish(19);

        case 27:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this, [[3, 15, 19, 27], [20,, 22, 26]]);
}));
/**
 * @function take
 * @param {number} l
 * @param {iterable|iterator} iter
 * @return {array}
 */

var take = curry(function (l, iter) {
  var res = [];
  if (l === 0) return res;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = iter[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var a = _step4.value;
      res.push(a);
      if (l === res.length) return res;
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return res;
});
/**
 * @function takeAll
 * @param {iterable|iterator}
 * @return {array}
 */

exports.take = take;
var takeAll = take(Infinity);
/**
 * @function reduce
 * @param {function} f
 * @param {any} acc
 * @param {iterable|iterator} iter
 * @return {any}
 */

exports.takeAll = takeAll;
var reduce = curry(function (f, acc, iter) {
  if (arguments.length === 2) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = iter[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var a = _step5.value;
      acc = f(acc, a);
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return acc;
});
/**
 * @function callRight
 * @param {any} v
 * @param {function} f
 * @return {any}
 */

exports.reduce = reduce;

var callRight = function callRight(v, f) {
  return f(v);
};
/**
 * @function go
 * @param {any} v
 * @param  {...function} fs
 * @return {any}
 */


exports.callRight = callRight;

var go = function go(v) {
  for (var _len3 = arguments.length, fs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    fs[_key3 - 1] = arguments[_key3];
  }

  return reduce(callRight, v, fs);
};

exports.go = go;