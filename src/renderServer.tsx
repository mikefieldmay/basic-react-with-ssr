import { matchRoutes } from "react-router-config";
import Routes from "./routes";
import React from "react";
import { App } from "./App";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

export const renderServerApp = req => {
  const matchingRoutes = matchRoutes(Routes, req.url);

  let promises = [];

  matchingRoutes.forEach(({ route }) => {
    if (route.loadData) {
      promises.push(route.loadData());
    } else {
      promises.push(Promise.resolve(null));
    }
  });

  return Promise.all(promises).then(data => {
    const context = data.reduce((map, obj) => {
      const newObj = { ...map, ...obj };
      return newObj;
    }, {});

    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    return {app, context}
  });
};
