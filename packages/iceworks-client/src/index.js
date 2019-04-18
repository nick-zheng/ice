import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import '@alifd/next/reset.scss';

import MainLayout from './layouts/MainLayout';
import LocaleProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';
import store from './store';

const locale = getLocale();
const ICE_CONTAINER = document.getElementById('ice-container');

ReactDOM.render(
  <ReduxProvider store={store}>
    <LocaleProvider locale={locale}>
      <Router>
        <Route path="/" component={MainLayout} />
      </Router>
    </LocaleProvider>
  </ReduxProvider>,
  ICE_CONTAINER,
);
