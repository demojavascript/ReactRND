import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/combine-reducers.js'
import {timeIncremented} from './actions/actions.js'
import App from './components/app.js'

const store = createStore(allReducers);

store.subscribe(function(){
	//console.log(store.getState());
});
//console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('root')
);
