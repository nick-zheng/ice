import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreContext } from 'redux-react-hook';
import '@alifd/next/reset.scss';

import MainLayout from './layouts/MainLayout';
import LocaleProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';
import makeStore from './store';

const store = makeStore();
const locale = getLocale();
const ICE_CONTAINER = document.getElementById('ice-container');

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <LocaleProvider locale={locale}>
      <Router>
        <Route path="/" component={MainLayout} />
      </Router>
    </LocaleProvider>
  </StoreContext.Provider>,
  ICE_CONTAINER,
);
