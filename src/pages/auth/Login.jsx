import React, { Component } from 'react'
import { Paper, WithStyles, withStyles, TextField, Grid } from '@material-ui/core'

const styles = theme => ({
	container: {
		margin: 'auto',
	},
})

class Login extends Component {
	state = {
		email: null,
		password: null,
	}

	handleChange = (email,event) => {
		console.log(event, email)
		// this.setState({ })
	}


	render () {
		const { classes } = this.props

		return (
		<section>
			<Paper>
			<form className={classes.container} noValidate autoComplete="off">
        <Grid container>
					<Grid item xs={12}>
						<TextField
						id="standard-name"
						label="Name"
						value={this.state.email}
						onChange={ (e ) =>  this.handleChange('email', e) } 
						margin="normal"
					/>
					</Grid>
					<Grid item xs={12}>
						<TextField
						id="standard-name"
						label="Name"
						className={classes.textField}
						value={this.state.name}
						onChange={ (e ) => this.handleChange('password', e)  }
						margin="normal"
						/>
					</Grid>
				</Grid>
				</form>
			</Paper>
		</section>)
	}
}

export default withStyles(styles)(Login)