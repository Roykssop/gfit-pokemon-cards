/* eslint-disable no-trailing-spaces */
import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css'
//import * as serviceWorker from './serviceWorker'
import theme from './ui/theme'
import Root from './App'
import rootReducer from './store/reducers/reducer'
import { logger } from './store/middlewares/logger'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))



const App = () => (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Root />
        </Provider>
      </MuiThemeProvider>        
    )

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister()
