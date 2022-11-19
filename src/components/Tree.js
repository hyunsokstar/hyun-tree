import React from 'react';
import TreeMenu from 'react-simple-tree-menu';
import '../../node_modules/react-simple-tree-menu/dist/main.css';
const treeData = [
    {
      key: 'mammal',
      label: 'Mammal',
      url: 'https://www.google.com/search?q=mammal',
      nodes: [
        {
          key: 'canidae',
          label: 'Canidae',
          url: 'https://www.google.com/search?q=canidae',
          nodes: [
            {
              key: 'dog',
              label: 'Dog',
              url: 'https://www.google.com/search?q=dog',
              nodes: [],
            },
            {
              key: 'fox',
              label: 'Fox',
              url: 'https://www.google.com/search?q=fox',
              nodes: [],
            },
            {
              key: 'wolf',
              label: 'Wolf',
              url: 'https://www.google.com/search?q=wolf',
              nodes: [],
            },
          ],
        },
      ],
    },
    {
      key: 'reptile',
      label: 'Reptile',
      url: 'https://www.google.com/search?q=reptile',
      nodes: [
        {
          key: 'squamata',
          label: 'Squamata',
          url: 'https://www.google.com/search?q=squamata',
          nodes: [
            {
              key: 'lizard',
              label: 'Lizard',
              url: 'https://www.google.com/search?q=lizard',
            },
            {
              key: 'snake',
              label: 'Snake',
              url: 'https://www.google.com/search?q=snake',
            },
            {
              key: 'gekko',
              label: 'Gekko',
              url: 'https://www.google.com/search?q=gekko',
            },
          ],
        },
      ],
    },
  ];

function Tree() {
    return (
      <TreeMenu data={treeData} hasSearch={false}/>
    );
}
  
export default Tree;