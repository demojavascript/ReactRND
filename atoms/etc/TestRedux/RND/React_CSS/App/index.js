import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AllReducer from './Reducers/All';
import App from './Components/App';

const store = createStore(AllReducer);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app'));
