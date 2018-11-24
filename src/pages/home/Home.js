import React, { Component } from 'react'
import { Paper, withStyles, Button, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actionCreators from '../../store/actions/actions'
import jsonData from '../../monsters.json'

import BoxReveal from '../../monsters/BoxReveal'


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
		showRevealButton: false,
		showResultMsg: false,
	}


	componentDidMount () {
		const { cpLoadSteps } = this.props
		cpLoadSteps()
	}

	handleClick = () => {
		const { cpRevealCards } = this.props
		const aCards = [Math.round(Math.random() * 150), Math.round(Math.random() * 150), Math.round(Math.random() * 150)]

		jsonData.forEach(item => {
			const cardFound = aCards.indexOf(item.id)
			if (cardFound >= 0) {
				aCards[cardFound] = item
			}
		})

		cpRevealCards(aCards)
	}

	renderRevealCards = () => <Button color="secondary" variant="raised" onClick={this.handleClick} >Reveal 3 monster cards</Button>

	renderResultMessage = () => {
		const { steps } = this.props
		return <Typography variant="caption"> You need to walk { 2000 - steps } more to reveal cards! </Typography>
	}

	render () {
		const { classes, steps, monsterCards } = this.props

		return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				<Typography variant="headline"> Today you walked { steps } steps</Typography>
				{
					(steps >=  2000)
					? this.renderRevealCards()
					: this.renderResultMessage()
				}

				<BoxReveal monsters={monsterCards} />
			</Paper>
		</div>)
	}
}

Home.propTypes = {
	classes: PropTypes.Object,
	steps: PropTypes.number,
	monsterCards: PropTypes.arrayOf(PropTypes.Object),
}

Home.defaultProps = {
	classes: {},
	steps: 0,
	monsterCards: [],
}

const mapStateToProps = state => ({
		steps: state.steps,
		monsterCards: state.monsterCards,
	})

const mapDispatchToProps = dispatch => ({
		cpLoadSteps: () => dispatch(actionCreators.loadSteps()),
		cpRevealCards: monsterCards => dispatch(actionCreators.revealCards(monsterCards)),
 		cpAuthFbase: () => dispatch(actionCreators.authFirebase()),
	})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))