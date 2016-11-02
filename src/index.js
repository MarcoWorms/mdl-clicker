import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Entry } from './components'
import './index.css'

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Entry}>
    </Route>
  </Router>,
  document.getElementById('root')
);
