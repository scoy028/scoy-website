import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from './history'
import Nav from './components/nav'
import Main from './main'

ReactDOM.render(
    <Router history={history}>
      <Nav />
      <Main />
    </Router>,
  document.getElementById('app')
)
