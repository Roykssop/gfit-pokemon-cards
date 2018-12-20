import React from 'react'
import NavBar from '../../shared/navbar/Navbar'
import styled from 'styled-components'

const Container =  styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`


const Layout = props => {
	return (
		<div>
			<NavBar section={props.section} handleClick={props.navLink} />
			<Container>
				{props.children}
			</Container>	
		</div>
	)
} 

export default Layout