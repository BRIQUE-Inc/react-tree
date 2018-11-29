import React from 'react';
import { storiesOf } from '@storybook/react';
import Tree from '../src';

const LIST = [
  // depth 0
  { id: '1', parent: '0', root: true, leaf: false, display: 'root1' },
  { id: '2', parent: '0', root: true, leaf: false, display: 'root2' },
  { id: '3', parent: '0', root: true, leaf: false, display: 'root3' },
  // depth 1
  { id: '4', parent: '1', root: false, leaf: false, display: 'middle14' },
  { id: '5', parent: '1', root: false, leaf: false, display: 'middle15' },
  { id: '6', parent: '2', root: false, leaf: false, display: 'middle26' },
  { id: '7', parent: '2', root: false, leaf: false, display: 'middle27' },
  { id: '8', parent: '3', root: false, leaf: false, display: 'middle38' },
  { id: '9', parent: '3', root: false, leaf: false, display: 'middle39' },
  // depth 3
  { id: '10', parent: '4', root: false, leaf: true, display: 'leaf410' },
  { id: '11', parent: '4', root: false, leaf: true, display: 'leaf411' },
  { id: '12', parent: '5', root: false, leaf: true, display: 'leaf512' },
  { id: '13', parent: '5', root: false, leaf: true, display: 'leaf513' },
  { id: '14', parent: '6', root: false, leaf: true, display: 'leaf614' },
  { id: '15', parent: '6', root: false, leaf: true, display: 'leaf615' },
  { id: '16', parent: '7', root: false, leaf: true, display: 'leaf716' },
  { id: '17', parent: '7', root: false, leaf: true, display: 'leaf717' },
  { id: '18', parent: '8', root: false, leaf: true, display: 'leaf818' },
  { id: '19', parent: '8', root: false, leaf: true, display: 'leaf819' },
  { id: '20', parent: '9', root: false, leaf: true, display: 'leaf920' },
  { id: '21', parent: '9', root: false, leaf: true, display: 'leaf921' },
];

storiesOf('Basic', module).add('default tree', () => <Tree list={LIST} />);
