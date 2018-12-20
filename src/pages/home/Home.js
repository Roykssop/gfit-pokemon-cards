import React, { Component } from 'react'
import { Paper, withStyles, Button, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actionCreators from '../../store/actions/actions'
import firebase from '../../initializers/firebase'
import jsonData from '../../monsters.json'

import NavBar from '../../shared/navbar/Navbar'
import BoxReveal from '../../cards/BoxReveal'
import Layout from '../../ui/layout/Layout'


const styles = theme => ({
	container: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
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
		userDBref: firebase.database().ref('cards/'),
	}


	componentDidMount () {
		const { cpLoadSteps, cpLoadUser, cpLoadCollectedCards } = this.props
		const token = localStorage.getItem('accessToken')

		firebase.auth().onAuthStateChanged(user => {
			if (user && !this.props.user) {
				cpLoadSteps()
				cpLoadUser(user)
				cpLoadCollectedCards(user.uid)
			}
		})
	}

	handleClick = () => {
		const { cpRevealCards, cpSaveCards, user} = this.props
		const { userDBref } = this.state
		const aCards = [Math.round(Math.random() * 150), Math.round(Math.random() * 150), Math.round(Math.random() * 150)]

		jsonData.forEach(item => {
			const cardFound = aCards.indexOf(item.id)
			if (cardFound >= 0) {
				aCards[cardFound] = item
				cpSaveCards({ userId: user.uid, monsterId: item.id,  dateCreated: new Date() })
			}
		})

		cpRevealCards(aCards)
	}

	renderRevealCards = () => <Button color="secondary" variant="raised" onClick={this.handleClick} >Reveal 3 monster cards</Button>

	renderResultMessage = () => {
		const { steps, canPlay } = this.props
		let msg = (canPlay) ? `You need to walk ${ 2000 - steps } more to reveal cards!` : `You've already played today`

		return <Typography variant="caption">{ msg }</Typography>
	}

	goMyCards = () => {
		this.props.history.replace('/mycards')
	}

	render () {
		const { classes, steps, monsterCards, canPlay } = this.props

		return (
			<Layout section="Home" navLink={this.goMyCards}>
				<Paper className={classes.paper}>
					<Typography variant="headline"> Today you walked { steps } steps</Typography>
					{
						(steps >= 2000 && canPlay)
						? this.renderRevealCards()
						: this.renderResultMessage()
					}

					<BoxReveal monsters={monsterCards} />
				</Paper>
			</Layout>
		)
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
		user: state.user,
		cardsSaved: state.cardsSaved,
		canPlay: state.canPlay,
	})

const mapDispatchToProps = dispatch => ({
		cpLoadSteps: () => dispatch(actionCreators.loadSteps()),
		cpRevealCards: monsterCards => dispatch(actionCreators.revealCards(monsterCards)),
		cpAuthFbase: () => dispatch(actionCreators.authFirebase()),
		cpLoadUser: user => dispatch(actionCreators.loadUser(user)),
		cpSaveCards: card => dispatch(actionCreators.saveCards(card)),
		cpLoadCollectedCards: userId => dispatch(actionCreators.loadCollectedCards(userId)),
	})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))