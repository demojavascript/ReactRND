import { renderToString } from 'react-dom/server';
import React from 'react';
export default (renderMe) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Demo</title>
        <style>
            body {
                font-family: Helvetica Neue, Arial, sans-serif;
                margin: 0;
            }
            html { box-sizing: border-box; }
            *, *:before, *:after { box-sizing: inherit; }
        </style>
        <link rel="stylesheet" href="/static/styles.css">
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        <script src="/static/client.js"></script>
    </body>
</html>`;
