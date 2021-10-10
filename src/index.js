import React from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
