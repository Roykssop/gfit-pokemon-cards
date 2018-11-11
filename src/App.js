import React, { Component } from 'react'
import { withStyles }  from '@material-ui/core'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Switch }  from 'react-router-dom'

const styles = theme => ({
  root: {
    background: 'red',
  },
})

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/logged" exact component={Home} />
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(App);
