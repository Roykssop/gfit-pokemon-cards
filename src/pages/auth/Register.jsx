import React, { Component } from 'react'
import { Paper, withStyles, TextField, Grid } from '@material-ui/core'
import axios from 'axios'
import moment from 'moment'

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

class Register extends Component {
	state = {
		email: '',
		password: '',
	}

	componentDidMount () {

	}

	handleChange = (type, event) => {
		console.log(type)
		this.setState({ [type]: event.target.value })
	}


	render () {
		const { classes, location } = this.props
    const params = new URLSearchParams(location.hash)
		const token = params.get('access_token')

		axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
		  {
			aggregateBy: [{
			  dataTypeName: 'com.google.step_count.delta',
			  dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps',
			}],
			bucketByTime: { durationMillis: 86400000 },
			startTimeMillis: moment().startOf('day').valueOf(),
			endTimeMillis: moment().valueOf(),
		  },
		  { headers: { Authorization: `Bearer ${ token }` } },)
		  .then(response => {
			console.log(response)
		  })
		  .catch(error => {
			console.log(error)
			})

		return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
                Registration
			</Paper>
		</div>)
	}
}

export default withStyles(styles)(Register)