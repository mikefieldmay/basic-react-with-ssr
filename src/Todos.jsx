import React from 'react';
import dataService from './loadData';
import { renderRoutes } from 'react-router-config'

const Todos = (props) => {
  const collection = dataService.readCache('todos');
  return (
    <div>
      <ul>{collection.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default {
  component: Todos,
  loadData: () => loadData("todos")
};