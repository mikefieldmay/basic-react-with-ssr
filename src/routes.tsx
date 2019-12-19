
import React from 'react'
import Todos from "./Todos"
import loadData from './loadData';
import Posts from './Posts';

const Routes = [
  {
    path: '/',
    exact: true,
    component: () => <div>Home</div>
  },
  {
    path: '/todos',
    component: Todos,
    loadData: () => loadData('todos'),
    routes: [
      {
        path: '/todos/posts',
        component: Posts,
        loadData: () => loadData('posts')
      }
    ]
  }
];

export default Routes;