import path from 'path';
import fs from 'fs';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderServerApp } from '../src/renderServer';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  renderServerApp(req).then(({app, context}) => {
    const indexFile = path.resolve('./dist/index.html');
    fs.readFile(indexFile, 'utf8', (err, indexData) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      if (context.status === 404) {
        res.status(404);
      }
      if (context.url) {
        return res.redirect(301, context.url);
      }
      
      return res.send(
        indexData
          .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          .replace(
            '</body>',
            `<script>window.__ROUTE_DATA__ = ${serialize(context)}</script></body>`
          )
      );
    });
  })
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});