import React, { Component } from 'react'
import { withStyles }  from '@material-ui/core'
import Login from './pages/auth/Login'

const styles = theme => ({
  root: {
    background: 'red',
  },
})

class App extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={ classes.root }>
        <Login />
      </div>
    );
  }
}

export default withStyles(styles)(App);
