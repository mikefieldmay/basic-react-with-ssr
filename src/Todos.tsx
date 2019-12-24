import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { Route } from 'react-router-dom';
import { Posts } from './Posts'

const query = gql`
  query todos {
    todos @rest(type: "Todos", path: "todos") {
      id,
      title
    }
  }
`;

const Todos = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h1>Todos</h1>
      <ul>{data.todos.slice(0, 10).map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
      <Route path="/todos/posts" component={Posts}/>
    </div>
  );
}
export default Todos;