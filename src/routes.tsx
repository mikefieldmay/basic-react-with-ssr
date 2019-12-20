
import React from 'react'
import Todos from "./Todos"
import Posts from './Posts';

const Routes = [
  {
    path: '/',
    exact: true,
    component: () => <div>Home</div>
  },
  {
    path: '/todos',
    ...Todos,
    routes: [
      {
        path: '/todos/posts',
        ...Posts
      }
    ]
  }
];

export default Routes;