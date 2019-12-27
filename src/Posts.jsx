import React from 'react';
import dataService from './loadData';
import { renderRoutes } from 'react-router-config'

const Posts = (props) => {
  const collection = dataService.readCache('posts');

  return (
    <div>
      <ul>{collection.map(post => <li key={post.id}>{post.title}</li>)}</ul>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default {
  component: Posts,
  loadData: () => loadData("posts")
};;
