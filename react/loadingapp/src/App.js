import React, { Component } from 'react';
import Loader from './component/loader.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>The border property specifies the border size and the border color of the loader. The border-radius property transforms the loader into a circle.

The blue thing that spins around inside the border is specified with the border-top property. You can also include border-bottom, border-left and/or border-right if you want more "spinners" (see example below).

The size of the loader is specified with the width and height properties.

At last, we add an animation that makes the blue thing spin forever with a 2 second animation speed.

Note: You should also include -webkit- and -ms- prefixes for browsers that do not support animation and transform properties. Click on the example to see how.</p>
          <Loader />
      </div>
    );
  }
}

export default App;
