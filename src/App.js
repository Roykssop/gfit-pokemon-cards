import React, { Component } from 'react'
import { withStyles }  from '@material-ui/core'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Switch }  from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoutes'

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
          <Route path="/" exact component={Login} />
          <ProtectedRoutes>
            <Route exact path="/home" exact component={Home} />
          </ProtectedRoutes>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(App);
