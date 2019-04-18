import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider as MobxProvider } from 'mobx-react';
import '@alifd/next/reset.scss';

import MainLayout from './layouts/MainLayout';
import stores from './stores';
import LocaleProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';

const locale = getLocale();
const ICE_CONTAINER = document.getElementById('ice-container');

ReactDOM.render(
  <MobxProvider {...stores}>
    <LocaleProvider locale={locale}>
      <Router>
        <Route path="/" component={MainLayout} />
      </Router>
    </LocaleProvider>
  </MobxProvider>,
  ICE_CONTAINER,
);
