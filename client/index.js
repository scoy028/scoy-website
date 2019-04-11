import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import Nav from './components/nav'
import Main from './components/main'

ReactDOM.render(
  <Provider>
    <Router history={history}>
      <Nav />
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
)
