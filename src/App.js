import React, { Component } from 'react'
import { withStyles }  from '@material-ui/core'
import { BrowserRouter, Route, Switch }  from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import MyCards from './pages/mycards/Mycards'
import ProtectedRoutes from './routes/ProtectedRoutes'
import * as actionCreators from './store/actions/actions'

const styles = theme => ({
  root: {
    background: 'red',
  },
})

class App extends Component {
  componentDidMount () {
    const token = localStorage.getItem('accessToken')
    const { cpAuthFailed, cpAuthSucceed } = this.props

    if (!token) {
      cpAuthFailed()
      return false
    }

    axios.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${ token }`)
      .then(success => cpAuthSucceed())
      .catch(error => {
        console.log(error)
        cpAuthFailed()
      })
  }


  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoutes>
            <Route exact path="/home" exact component={Home} />
            <Route exact path="/mycards" exact component={MyCards} />
          </ProtectedRoutes>
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
 cpAuthFailed: () => {
 dispatch(actionCreators.authFailed())
},
 cpAuthSucceed: () => {
 dispatch(actionCreators.authSucceed())
},
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(App))
