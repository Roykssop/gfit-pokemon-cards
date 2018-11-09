import React, { Component } from 'react'
import { Paper, withStyles, TextField, Grid } from '@material-ui/core'

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

class Login extends Component {
	state = {
		email: "",
		password: "",
	}

	handleChange = (type, event) => {
		console.log(type)
		this.setState({ [type]: event.target.value })
	}


	render () {
		const { classes } = this.props


		return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				<form noValidate autoComplete="off">
					<Grid container>
						<Grid item xs={12} className={classes.centerText}>
							<TextField
							id="standard-email"
							label="Email"
							value={this.state.email}
							onChange={ e =>  this.handleChange('email', e) } 
							margin="normal"
						/>
						</Grid>
						<Grid item xs={12} className={classes.centerText}>
							<TextField
							id="standard-password"
							label="Password"
							className={classes.textField}
							value={this.state.password}
							onChange={ e => this.handleChange('password', e)  }
							margin="normal"
							/>
						</Grid>
						<a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.read&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogged&response_type=token&client_id=REPLACEWITHCLIENTID"> oAuth </a>
					</Grid>
				</form>				
			</Paper>
		</div>)
	}
}

export default withStyles(styles)(Login)

 /*

				*/