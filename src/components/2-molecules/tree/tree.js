import React from 'react';
import PropTypes from 'prop-types';

import { L, takeAll, go, reduce } from '../../../assets/js/functionals';

import Container from '../../1-atoms/container/container';
import NodeItem from '../../1-atoms/node-item/node-item';

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
export const findChildren = function*(
  list,
  checkOpen,
  idKey,
  parentKey,
  leafKey,
  parentNode,
  depth,
) {
  if (parentNode[leafKey]) return;

  if (!checkOpen(parentNode)) return;

  const children = L.filter(
    node => node[parentKey] === parentNode[idKey],
    list,
  );

  for (const child of children) {
    yield [child, depth];
    yield* findChildren(
      list,
      checkOpen,
      idKey,
      parentKey,
      leafKey,
      child,
      depth + 1,
    );
  }
};

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
export const makeTree = function*(
  list,
  checkOpen,
  idKey,
  parentKey,
  rootKey,
  leafKey,
) {
  const roots = L.filter(node => node[rootKey], list);

  for (const root of roots) {
    yield [root, 0];

    yield* findChildren(list, checkOpen, idKey, parentKey, leafKey, root, 1);
  }
};

/* ======= Components ======= */

/* === Main === */

const Tree = ({
  list,
  openIds,
  idKey,
  parentKey,
  rootKey,
  leafKey,
  openKey,
  renderContainer,
  renderNode,
}) => {
  const opensById =
    openKey == null &&
    Array.isArray(openIds) &&
    reduce(
      (acc, id) => {
        acc[id] = true;
        return acc;
      },
      {},
      openIds,
    );

  const checkOpen =
    openKey != null
      ? node => node[openKey]
      : openIds == null
        ? () => true
        : Array.isArray(openIds)
          ? node => opensById[node[idKey]]
          : node => openIds[node[idKey]];

  const nodes = go(
    makeTree(list, checkOpen, idKey, parentKey, rootKey, leafKey),
    L.map(([node, depth]) => renderNode(node, depth, idKey)),
    takeAll,
  );

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
  renderContainer: children => <Container>{children}</Container>,
  renderNode: (node, depth, idKey) => (
    <NodeItem key={node[idKey]} depth={depth}>
      {node.display}
    </NodeItem>
  ),
};

Tree.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  openIds: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.objectOf(PropTypes.bool),
  ]),
  idKey: PropTypes.string,
  parentKey: PropTypes.string,
  rootKey: PropTypes.string,
  leafKey: PropTypes.string,
  openKey: PropTypes.string,
  renderContainer: PropTypes.func,
  renderNode: PropTypes.func,
};

export default Tree;
