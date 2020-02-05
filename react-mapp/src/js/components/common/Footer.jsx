/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";

class Footer extends Component {
  render() {
      return (
          
            <footer class="main-footer">
                {/*-- To the right --*/}
                <div class="float-right d-none d-sm-inline">
                Anything you want
                </div>
                {/*-- Default to the left --*/}
                <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
            </footer>
         );
        }
    }
    
    export default Footer;