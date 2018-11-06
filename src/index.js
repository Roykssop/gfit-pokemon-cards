/* eslint-disable no-trailing-spaces */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './App'
import * as serviceWorker from './serviceWorker'
import theme from './ui/theme'
import { MuiThemeProvider } from '@material-ui/core'

const App = () => (
      <MuiThemeProvider theme={theme}>
        <Root />
      </MuiThemeProvider>        
    )

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
