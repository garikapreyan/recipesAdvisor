import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routers from './routes';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
