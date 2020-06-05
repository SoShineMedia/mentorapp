/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Aside from "../common/Aside";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";



class Default extends Component {
    constructor(props) {
        super(props);
    }
  render() 
  {
    return (
        <div className="wrapper">

            <Navbar/>
            <div className="content-wrapper" >
                {/*Content Header (Page header)*/}
                <div className="content-header">
                
                </div>
                {/*-- /.content-header -*/}

                {/*-- Main content -*/}
                <div className="content">
                <div className="container">
                    {this.props.children}
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

































