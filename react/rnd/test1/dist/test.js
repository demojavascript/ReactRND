"use strict";

var user = "hjsfa sfg asfja";
var imgloc = "https://cdn.scotch.io/1/SAANU86XRUmEgCVWDs6R_Okta-sidebar-ad.png";
var element = React.createElement("img", { src: imgloc });
var heading = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
ReactDOM.render(heading, document.getElementById('root'));

function tick() {
  var element = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Hello, world!"
    ),
    React.createElement(
      "h2",
      null,
      "It is ",
      new Date().toLocaleTimeString(),
      "."
    )
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);