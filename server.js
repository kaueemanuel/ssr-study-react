import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";

import AppComponent from "./src/App";

const app = express();
const PORT = 3030;

app.use(express.static("dist/public"));

app.get("/", (req, res) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React no servidor</title>
  </head>
  <body>
    <div id="app">
      ${ReactDOM.renderToString(<AppComponent />)}
    </div>
    <scripts src="bundle_clients.js"></scripts>
  </body>
  </html>`;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando:  http://localhost:${PORT}`);
});
