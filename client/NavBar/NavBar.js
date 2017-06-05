import React from 'react';
import styles from './Navbar.css';
// --------------------------------------
// Bootstrap imports
// --------------------------------------

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class NavBar extends React.Component {
	render () {
		return (
			<Navbar fluid className={styles.navbar}>
				<Nav className={styles.navbarNav}>
					<Nav className={styles.navButtonGroup}>
						<LinkContainer to="/" className={styles.button}>
							<NavItem href="#">
								<span>Home</span>
							</NavItem>
						</LinkContainer>
					</Nav>
				</Nav>
			</Navbar>
		);
	}
}
