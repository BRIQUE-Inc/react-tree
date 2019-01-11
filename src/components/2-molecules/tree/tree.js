import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '../../1-atoms/container/container';
import NodeItem from '../../1-atoms/node-item/node-item';

/* ======= Components ======= */

/* === Sub === */

const RecursiveNode = ({
  list,
  openIds,
  node,
  depth,
  idKey,
  parentKey,
  rootKey,
  leafKey,
  renderNode,
}) => {
  const children = node[leafKey]
    ? []
    : list.filter(_node => _node[parentKey] === node[idKey]);
  const isOpen = openIds.includes(node[idKey]);
  return (
    <Fragment>
      {renderNode(node, depth)}
      {isOpen &&
        children.map(child => (
          <RecursiveNode
            key={child[idKey]}
            list={list}
            openIds={openIds}
            node={child}
            depth={depth + 1}
            idKey={idKey}
            parentKey={parentKey}
            rootKey={rootKey}
            leafKey={leafKey}
            renderNode={renderNode}
          />
        ))}
    </Fragment>
  );
};

/* === Main === */

const Tree = ({
  list,
  openIds: _openIds,
  idKey,
  parentKey,
  rootKey,
  leafKey,
  renderContainer,
  renderNode,
}) => {
  const roots = list.filter(node => node[rootKey]);
  const openIds = Array.isArray(_openIds)
    ? _openIds
    : list.map(node => node[idKey]);
  return renderContainer(
    <Fragment>
      {roots.map(node => (
        <RecursiveNode
          key={node[idKey]}
          list={list}
          openIds={openIds}
          node={node}
          depth={0}
          idKey={idKey}
          parentKey={parentKey}
          rootKey={rootKey}
          leafKey={leafKey}
          renderNode={renderNode}
        />
      ))}
    </Fragment>,
  );
};

Tree.defaultProps = {
  list: [],
  openIds: null,
  idKey: 'id',
  parentKey: 'parent',
  rootKey: 'root',
  leafKey: 'leaf',
  renderContainer: children => <Container>{children}</Container>,
  renderNode: (node, depth) => (
    <NodeItem depth={depth}>{node.display}</NodeItem>
  ),
};

Tree.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  openIds: PropTypes.array,
  idKey: PropTypes.string,
  parentKey: PropTypes.string,
  rootKey: PropTypes.string,
  leafKey: PropTypes.string,
  renderContainer: PropTypes.func,
  renderNode: PropTypes.func,
};

export default Tree;
