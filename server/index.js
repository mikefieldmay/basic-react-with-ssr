import path from "path";
import fs from "fs";
import express from "express";
import { renderServerApp } from "../src/renderServer";

import "isomorphic-fetch";

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static("./dist"));

app.get("/*", (req, res) => {
  renderServerApp(req).then(({ app, context }) => {
    const indexFile = path.resolve("./dist/index.html");
    fs.readFile(indexFile, "utf8", (err, indexData) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }

      return res.send(
        indexData
          .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          .replace(
            "</head>",
            `<script>
              window.__APOLLO_STATE__ = ${JSON.stringify(context)};
            </script></head>`
          )
      );
    });
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
