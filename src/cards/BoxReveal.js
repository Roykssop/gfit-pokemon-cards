import React from 'react'
import styled from 'styled-components'

const BoxCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const CardMonster = styled.div`
border: 1px solid gray;
width: 80px;
height: 80px;
padding: 10px;
box-shadow: 0px 5px 5px  0 rgba(0,0,0,0.4);
`;

const ImgMonster = styled.img` 
	max-width: 100%;
	max-height: 100%;
`;

const BoxReveal = props => {
	const { monsters } = props

	return (
		<BoxCard>
				{
					monsters.map( (monster, index) => (
						<CardMonster key={index}>
							<ImgMonster src={monster.img} />
						</CardMonster>
					))
				}
		</BoxCard>
	)
}

export default BoxReveal