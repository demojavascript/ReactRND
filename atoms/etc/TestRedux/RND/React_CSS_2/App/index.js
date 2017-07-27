import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers/Reducer';
import App from './components/App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './Resources/css/base.scss';

const store = createStore(Reducers);
//console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>  ,
  document.getElementById("app")
);
