import React, { Component } from 'react'
import styled  from 'styled-components'
import { connect } from 'react-redux'
import { Paper } from '@material-ui/core'

import jsonData from '../../monsters.json'

const CardMonster = styled.div`
border: 1px solid gray;
width: 80px;
height: 80px;
padding: 10px;
box-shadow: 0px 5px 5px  0 rgba(0,0,0,0.4);
`

const ImgMonster = styled.img` 
  max-width: 100%;
  max-height: 100%;
`

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

  render () {
    return (<Paper>
      { this.renderMonsterList() }
    </Paper>)
  }
}

const mapStateToProps = state => ({
  cpCollectedCards: state.collectedCards,
})

export default connect(mapStateToProps)(MyCards)