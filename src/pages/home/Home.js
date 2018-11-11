import React, { Component } from 'react'
import { Paper, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

import * as actionCreators from '../../store/actions/actions'
import { connect } from 'react-redux'

const styles = theme => ({
	container: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	paper: {
		padding: theme.spacing.unit * 3,
	},
	centerText: {
		textAlign: 'center',
	},

})

class Home extends Component {
	state = {
		steps: 0,
	}

	componentDidMount () {
		const { location, cpLoadSteps } = this.props
    const params = new URLSearchParams(location.hash)
		const token = params.get('access_token')

		cpLoadSteps(token)
	}


	render () {
		const { classes, steps } = this.props

		return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				{ `Today you walked ${ steps } steps` }		
			</Paper>
		</div>)
	}
}

Home.propTypes = {
	classes: PropTypes.Object,
	steps: PropTypes.number,
}

Home.defaultProps = {
	classes: {},
	steps: 0,
}

const mapStateToProps = state => ({
		steps: state.steps,
	})

const mapDispatchToProps = dispatch => ({
		cpLoadSteps: token => { dispatch(actionCreators.loadSteps(token)) }
	})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))