import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n'
// import {addLocaleData} from 'react-intl';
//import en from 'react-intl/locale-data/en'
//import ja from 'react-intl/locale-data/ja'
//import cn from 'react-intl/locale-data/cn'

//addLocaleData(en);
//addLocaleData(ja);
//addLocaleData(cn);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
