import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/components/container/App';
import { Provider } from 'react-redux';
import configureStore from "./state/store";

const reduxStore = configureStore( {} );

ReactDOM.render(
  <Provider store={reduxStore}>
      <App />
  </Provider>
  , document.getElementById('root')
);  