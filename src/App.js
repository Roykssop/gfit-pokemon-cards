import React, { Component } from 'react'
import { withStyles }  from '@material-ui/core'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register.jsx'
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
          <Route path="/logged" exact component={Register} />
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(App);
