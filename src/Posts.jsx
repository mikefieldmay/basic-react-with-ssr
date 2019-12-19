import React, {useState, useEffect} from 'react';
import loadData from './loadData';
import { renderRoutes } from 'react-router-config'

const Mike = (props) => {
  const theData = props.staticContext && props.staticContext.posts ? props.staticContext.posts : []

  const [data, setData] = useState(theData)

  useEffect(() => {
    if (window.__ROUTE_DATA__.posts) {
      setData(window.__ROUTE_DATA__.posts)
    } else {
      loadData('todos').then(data => {
        setData(data);
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

export default Mike;
