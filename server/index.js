import path from "path";
import fs from "fs";
import express from "express";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";

import Routes from "../src/routes";
import serialize from "serialize-javascript";

import { App } from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();
app.use(express.static("./dist"));

app.get("/*", (req, res) => {
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
  const promise = currentRoute.loadData
    ? currentRoute.loadData()
    : Promise.resolve(null);

  promise.then(data => {
    const context = { data };

    const reactApp = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    const indexFile = path.resolve("./dist/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (context.status === 404) {
        res.status(404).send("Oops, 404 Not Found!");
      }
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }
      // not sure what this does....
      if (context.url) {
        return res.redirect(301, context.url);
      }
      return res.send(
        data
          .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
          .replace(
            "</body>",
            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
          )
      );
    });
  });
});
app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
