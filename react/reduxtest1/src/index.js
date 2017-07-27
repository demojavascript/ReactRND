import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import Counter from './component/Counter'
import counter from './reducers'

const store = createStore(counter)

const render = function(){
	return ReactDOM.render(
			  <Counter
			    value={store.getState()}
			    onSquare={() => store.dispatch({ type: 'SQUARE' })}
			    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
			    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
			  />,
			  document.getElementById('root')
  			)
}
render()
store.subscribe(render)
registerServiceWorker();
