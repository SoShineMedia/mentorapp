/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";

class Footer extends Component {
  render() {
      return (
          
            <footer className="main-footer">
                {/*-- To the right --*/}
                <div className="float-right d-none d-sm-inline">
                    Nuturing productivity!
                </div>
                {/*-- Default to the left --*/}
      <strong>Copyright &copy; {new Date().getFullYear()} <a href="https://soshinemedia.com">SoShine Media</a>.</strong> All rights reserved.
            </footer>
         );
        }
    }
    
    export default Footer;