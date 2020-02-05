/* eslint-disable */
import React, { Component } from 'react';
//import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";
//import { Router, Route, browserHistory} from 'react-router';
//import moment from "moment";
//import App from "./components/view/App";
import Default from "./components/layout/Default";
import Home from "./components/view/Home";

import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
const DashboardRoutes = ({ layout: Layout, component: Component, ...rest }) => {
  return (
      <Route {...rest} render={props => (
          <Layout>
              <Component {...props} />
          </Layout>
      )} />
  )
}

  function App () 
  {
      console.log("default layout"+JSON.stringify(hist.location));
    return (
     <Router history={hist}>
         <Switch> 
         <Route exact path={"/"} component={App} /> 
         
         <DashboardRoutes exact path="/listings" layout={Default} component={Home} />
         <Route path={"/home"} component={Home} />
         
         </Switch>      
     </Router>
    );
  }


export default App;

/*export default connect((state) => {
  return ({
      data: "testing",
  })
})(Default);*/































