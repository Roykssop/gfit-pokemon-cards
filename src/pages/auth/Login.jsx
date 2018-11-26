import React, { Component } from 'react'
import { Paper, withStyles, TextField, Grid } from '@material-ui/core'
import { connect } from 'react-redux'

import btnGoogle from '../../assets/googlebtn.png'
import logoFit from '../../assets/fitLogo.png'
import * as actionCreators from '../../store/actions/actions'
import PropTypes from 'prop-types'

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
		email: '',
		password: '',
	}

  componentDidMount () {
		//this.redirectLogged()
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.auth !== this.props.auth) { 
			if (nextProps.auth) {
				this.props.history.push('/home')
			}
		}
	}

	handleChange = (type, event) => {
		console.log(type)
		this.setState({ [type]: event.target.value })
	}

	handleClick = () => {
		const { cpAuthFirebase } = this.props

		cpAuthFirebase()
	}

	redirectLogged = () => {
		const token = localStorage.getItem('accessToken')
		if (token) {
			this.props.history.push('/home')
		}
	}

	render () {
		const { classes } = this.props
		
		return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				<Grid container>
					<Grid item xs={12} className={classes.centerText}>				
						<img src={logoFit} alt="Gfit Pokemon cards" />						
					</Grid>
					<Grid item xs={12} className={classes.centerText}>
						<button onClick={this.handleClick}>
							<img src={btnGoogle} alt="Google sign in" />
						</button>	
					</Grid>
				</Grid>
			</Paper>
		</div>)
	}
}

Login.propTypes = {
	auth: PropTypes.bool,
}

const mapStateToProps = (state, props) =>({
	auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
	cpAuthFirebase: () => dispatch(actionCreators.authFirebase()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))

