import React, { Component } from 'react'
import styled  from 'styled-components'
import { connect } from 'react-redux'
import { Paper, withStyles, Typography } from '@material-ui/core'

import jsonData from '../../monsters.json'
import Layout from '../../ui/layout/Layout'

const CardMonster = styled.div`
border: 1px solid gray;
width: 80px;
height: 80px;
padding: 10px;
margin: 10px;
box-shadow: 0px 5px 5px  0 rgba(0,0,0,0.4);
`

const ImgMonster = styled.img` 
  max-width: 100%;
  max-height: 100%;
`

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '25%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
})


class MyCards extends Component {
  renderMonsterList = () => {
    const { cpCollectedCards } = this.props

		return jsonData.filter(item => Object.values(cpCollectedCards).some(card =>  card.monsterId == item.id))
            .map((monster, index) => (
              <CardMonster key={index}>
                <ImgMonster src={monster.img} />
              </CardMonster>
            ))
  }

  goHome = () => {
		this.props.history.replace('/home')
  }

  render () {
    const { classes } = this.props

    return (
			<Layout section="MyCards" navLink={this.goHome}>
        <Typography variant="subtitle1" >Cards Collected</Typography>
        <Paper className={classes.root} elevation={1}>
          { this.renderMonsterList() }
        </Paper>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  cpCollectedCards: state.collectedCards,
})

export default withStyles(styles)(connect(mapStateToProps)(MyCards))