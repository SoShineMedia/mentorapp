/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";

class Aside extends Component {
  render() {
      return (
          
                <aside class="control-sidebar control-sidebar-dark">
                    <!-- Control sidebar content goes here -->
                    <div class="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                    </div>
                </aside>

        );
    }
}

export default Aside;