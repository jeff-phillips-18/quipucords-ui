import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'patternfly/dist/css/rcue.css';
import 'patternfly/dist/css/rcue-additions.css';
import './styles/.css/index.css'; // eslint-disable-line import/no-unresolved

import App from './components/app';
import { baseName } from './routes';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router basename={baseName}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
