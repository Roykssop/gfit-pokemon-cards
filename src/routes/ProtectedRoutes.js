import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ProtectedRoutes extends Component {

  componentDidMount () {
    const { history, redirectTo } = this.props
    const token = localStorage.getItem('accessToken')

    if (!token) {
      history.push(redirectTo)
    }
  }

  render () {
    return (<Fragment>{ this.props.children }</Fragment>)
  }
}

ProtectedRoutes.propTypes = {
  redirectTo: PropTypes.string,
}

ProtectedRoutes.defaultProps = {
  redirectTo: '/',
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(ProtectedRoutes))