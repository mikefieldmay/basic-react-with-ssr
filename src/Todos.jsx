import React, {useState, useEffect} from 'react';
import loadData from './loadData';
import { renderRoutes } from 'react-router-config'

const Todos= (props) => {
  const theData = props.staticContext && props.staticContext.todos ? props.staticContext.todos : []

  const [data, setData] = useState(theData)

  useEffect(() => {
    if (window.__ROUTE_DATA__ && window.__ROUTE_DATA__.todos) {
      setData(window.__ROUTE_DATA__.todos)
      delete window.__ROUTE_DATA__.todos
    } else {
      loadData('todos').then(data => {
        setData(data.todos);
      });
    }
  }, [])

  return (
    <div>
      <ul>{data.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default {
  component: Todos,
  loadData: () => loadData("todos")
};