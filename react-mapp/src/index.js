/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import store from './store';
import { store } from './js/stores/ReduxStore';
//import { createBrowserHistory } from "history";
//import { Router, Route, Switch, Redirect } from "react-router-dom";
//import { Router, Route, IndexRedirect, hashHistory} from 'react-router';

import './css/index.css';
import './css/App.css';
import './css/adminlte.min.css';
import './css/fontawesome-free/css/all.min.css';

import $ from "jquery";


    //<!-- jQuery -->
    //import './js/lib/plugins/jquery/jquery.min.js';
    //<!-- Bootstrap 4 -->
    //import './js/lib/plugins/bootstrap/js/bootstrap.bundle.min.js';
    //<!-- AdminLTE App -->
    //import './js/lib/adminlte.min.js';
    //<!-- AdminLTE for demo purposes -->
    //import './js/lib/demo.js';

import App from './js/App';
//import Home from './js/components/view/App';
//import Layout from './js/components/layout/Default';
//import * as serviceWorker from './js/serviceWorker';

//const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
