import React, {useState, useEffect} from 'react';
import loadData from './loadData';
import { renderRoutes } from 'react-router-config'

const Mike = (props) => {
  const theData = props.staticContext && props.staticContext.posts ? props.staticContext.posts : []

  const [data, setData] = useState(theData)

  useEffect(() => {
    if (window.__ROUTE_DATA__ && window.__ROUTE_DATA__.posts) {
      setData(window.__ROUTE_DATA__.posts)
      delete window.__ROUTE_DATA__.posts
    } else {
      loadData('posts').then(data => {
        setData(data.posts);
      });
    }
  }, [])

  return (
    <div>
      <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default Mike;
