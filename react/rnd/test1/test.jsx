const user = "hjsfa sfg asfja"
const imgloc = "https://cdn.scotch.io/1/SAANU86XRUmEgCVWDs6R_Okta-sidebar-ad.png"
const element = (
  <img src={imgloc} />
);
const heading = (
	<h1 className="greeting">
    	Hello, world!
  	</h1>
)
ReactDOM.render(
  heading,
  document.getElementById('root')
);


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
