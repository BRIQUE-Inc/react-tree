/**
 * @function curry
 * @param {function} f
 * @return {function}
 * @description curry only one arguments
 */
export const curry = f => (a, ..._) =>
  _.length ? f(a, ..._) : (..._) => f(a, ..._);

/**
 * @namespace L
 * @description lazy evaluated functions
 */
export const L = {};

/**
 * @namespace L
 * @function map
 * @param {function} f
 * @param {iterable|iterator} iter
 * @return {generator}
 */
L.map = curry(function*(f, iter) {
  for (const a of iter) yield f(a);
});

/**
 * @namespace L
 * @function filter
 * @param {function} f
 * @param {iterable|iterator} iter
 * @return {generator}
 */
L.filter = curry(function*(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

/**
 * @namespace L
 * @function reject
 * @param {function} f
 * @param {iterable|iterator} iter
 * @return {generator}
 */
L.reject = curry(function*(f, iter) {
  for (const a of iter) {
    if (!f(a)) yield a;
  }
});

/**
 * @function take
 * @param {number} l
 * @param {iterable|iterator} iter
 * @return {array}
 */
export const take = curry((l, iter) => {
  const res = [];

  if (l === 0) return res;

  for (const a of iter) {
    res.push(a);
    if (l === res.length) return res;
  }

  return res;
});

/**
 * @function takeAll
 * @param {iterable|iterator}
 * @return {array}
 */
export const takeAll = take(Infinity);

/**
 * @function reduce
 * @param {function} f
 * @param {any} acc
 * @param {iterable|iterator} iter
 * @return {any}
 */
export const reduce = curry(function(f, acc, iter) {
  if (arguments.length === 2) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
});

/**
 * @function callRight
 * @param {any} v
 * @param {function} f
 * @return {any}
 */
export const callRight = (v, f) => f(v);

/**
 * @function go
 * @param {any} v
 * @param  {...function} fs
 * @return {any}
 */
export const go = (v, ...fs) => reduce(callRight, v, fs);
