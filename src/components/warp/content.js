import React from 'react';

import './warp.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Shopping from '../shopping/shopping.js';
import Feedback from '../feedback/feedback.js';
import Menu from './menu';
import LoginLayout from '../loginForm/loginLayout';
import HomePage from '../warp/homePage';


export default function Content() {

  return (
    <>
      <Router>
        <div>
          <Menu />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginLayout} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/feedback" component={Feedback} />
          </Switch>
        </div>
      </Router>
    </>
  )
}
