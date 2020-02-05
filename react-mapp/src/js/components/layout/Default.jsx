/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import {Aside} from "./common/Aside";
import {Footer} from "./common/Footer";
import {Navbar} from "./common/Navbar";

class Default extends Component {
  render() 
  {
    return (
        <div className="wrapper">

            <Navbar/>
            <div class="content-wrapper" style="margin-top:40px;">
                {/*Content Header (Page header)*/}
                <div class="content-header">
                
                </div>
                {/*-- /.content-header -*/}

                {/*-- Main content -*/}
                <div class="content">
                <div class="container">
                
                </div>{/*-- /.container-fluid -*/}
                </div>
                {/*-- /.content -*/}
            </div>
            {/*-- /.content-wrapper -*/}
                <Aside />
                <Footer />  
        </div>

    );
  }
}

export default Default;

































