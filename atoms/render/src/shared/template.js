export default ({body}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title></title>
      </head>

      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
