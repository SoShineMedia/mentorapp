/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";

class Aside extends Component {
  render() {
      return (
   
        <nav  className="main-header navbar navbar-fixed-top navbar-expand-md navbar-light navbar-white">
            <div className="container">
            <a href="/" className="navbar-brand">
                <img src="../dist/img/AdminLTELogo.png" alt="home" className="brand-image img-circle elevation-3"
                    />
                <span className="brand-text font-weight-light">Mentorship Platform</span>
            </a>
            
            <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                {/*-- Left navbar links -*/}
                <ul className="navbar-nav">
                
                <li className="nav-item">
                    <a href="#" className="nav-link"></a>
                </li>
                <li className="nav-item dropdown">
                    <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Knowledge Base</a>
                    <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                    <li><a href="/questions" className="dropdown-item">My Questions </a></li>
                    <li><a href="/mentors" className="dropdown-item">My Mentors </a></li> 
                    <li className="dropdown-divider"></li>
                    <li><a href="/faq" className="dropdown-item">FAQ</a></li> 
                    {/*-- Level two dropdown-*/}
                    <li className="dropdown-submenu dropdown-hover">
                        <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Industries</a>
                        <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                        <li>
                            <a tabIndex="-1" href="industry.html" className="dropdown-item">level 2</a>
                        </li>
                        <li><a href="#" className="dropdown-item">level 2</a></li>
                        <li><a href="#" className="dropdown-item">level 2</a></li>
                        </ul>
                    </li>
                    {/*-- End Level two -*/}
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Projects</a>
                    <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                    <li><a href="/projects/add" className="dropdown-item">Add New </a></li>
                    

                    <li className="dropdown-divider"></li>

                    {/*-- Level two dropdown-*/}
                    <li className="dropdown-submenu dropdown-hover">
                        <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">My Projects</a>
                        <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                        <li><a href="/projects" className="dropdown-item">View All</a></li>
                        <li>
                            <a tabIndex="-1" href="#" className="dropdown-item">level 2</a>
                        </li>
                        
                        <li><a href="#" className="dropdown-item">level 2</a></li>
                        <li><a href="#" className="dropdown-item">level 2</a></li>
                        </ul>
                    </li>
                    {/*-- End Level two -*/}
                    </ul>
                </li>
                </ul>

                {/*-- SEARCH FORM -*/}
                <form className="form-inline ml-0 ml-md-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                        <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                        </div>
                    </div>
                </form>
            </div>

            
            </div>
        </nav>
        
       

  );
    }
}

export default Aside;