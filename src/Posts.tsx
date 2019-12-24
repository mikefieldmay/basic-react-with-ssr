import React, { useState, useEffect } from "react";
import { loadData } from "../helpers/loadData";

const globalAny: any = global;

export const Posts = props => {
  const contextData =
    props.staticContext && props.staticContext.data
      ? props.staticContext.data
      : [];
  const [data, setData] = useState(contextData);

  useEffect(() => {
    setTimeout(() => {
      if (globalAny.window.__ROUTE_DATA__) {
        setData(globalAny.window.__ROUTE_DATA__);
        delete globalAny.window.__ROUTE_DATA__;
      } else {
        loadData("posts").then(data => {
          setData(data);
        });
      }
    }, 0);
  }, []);

  return (
    <ul>
      {data.map(posts => (
        <li key={posts.id}>{posts.title}</li>
      ))}
    </ul>
  );
};
