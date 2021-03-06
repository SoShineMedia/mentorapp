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
import Faq from "./components/view/Faq";
import Questions from "./components/view/Questions";
import Inbox from "./components/view/Inbox";
import Profile from "./components/view/Profile";
import Projects from "./components/view/ProjectList";
import AddProject from "./components/view/ProjectCreate";
import Mentors from "./components/view/MentorList";

import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
const AppRoutes = ({ layout: Layout, component: Component, ...rest }) => {
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
    return (
     <Router history={hist}>
         <Switch> 
         
         <AppRoutes exact path="/" layout={Default} component={Home} />
         <AppRoutes exact path="/faq" layout={Default} component={Faq} />
         <AppRoutes exact path="/aboutus" layout={Default} component={Faq} />
         <AppRoutes exact path="/contactus" layout={Default} component={Faq} />

         <AppRoutes exact path="/questions" layout={Default} component={Questions} />
         <AppRoutes exact path="/questions/add" layout={Default} component={Questions} />
         <AppRoutes exact path="/questions" layout={Default} component={Questions} />

         <AppRoutes exact path="/notifications" layout={Default} component={Inbox} />
         <AppRoutes exact path="/profile" layout={Default} component={Profile} />
         <AppRoutes exact path="/mentors" layout={Default} component={Mentors} />
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
































