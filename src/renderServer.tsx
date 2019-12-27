import React from "react";
import { App } from "./App";
import ReactDOMServer from "react-async-ssr";
import { StaticRouter } from "react-router-dom";

export const renderServerApp = async req => {
  const context = {};
  const app = await ReactDOMServer.renderToStringAsync(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  return { app, context };
};
