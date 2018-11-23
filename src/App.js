import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
class App extends Component {
  render  () {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

export default App