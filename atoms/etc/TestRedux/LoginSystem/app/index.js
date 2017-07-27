import { render } from 'react-dom';
import React from 'react';
import {Provider}  from 'react-redux';
import {createStore} from 'redux';
import App from './Components/App'
import Reducer from './Reducers/All'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const store = createStore(Reducer);
render(
  <Provider store={store}>
    <App/>
  </Provider> , document.getElementById('app'));
