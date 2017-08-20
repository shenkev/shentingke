import React from 'react';
import styles from './HomePage.css';

import { Image, Row, Col, Button, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class HomePage extends React.Component {
	render () {
		return (
      <div>
				<Image src="background2.jpg" className={styles.backgroundImage} responsive/>
				<Col md={10} mdOffset={1}>
					<div className={styles.sectionSpacing}></div>
					<Row>
						<Col md={4} mdOffset={0}>
							<Row>
								<Col md={7}>
									<Image src="kevin.jpg" className={styles.profileImage} responsive />
								</Col>
							</Row>
							<Row>
								<h1 className={styles.name}><b>Kevin Shen</b></h1>
								<LinkContainer to="/projects" className={styles.nameProjectLink}>
									<Button className={styles.button}>Projects</Button>
								</LinkContainer>
								<Button className={styles.button} href="https://github.com/shenkev" target="_blank">Github</Button>
							</Row>
		      	</Col>
					</Row>
					<div className={styles.sectionSpacing}></div>
					<LinkContainer to="/ship-of-theseus">
						<PageHeader role="button">Ship of Theseus <br/><small>A Voyage to Understanding Identity</small></PageHeader>
					</LinkContainer>
					<Row>
						<Col md={8}>
							<LinkContainer to="/ship-of-theseus">
								<Image src="ship.jpg" className={styles.image} role="button" responsive/>
							</LinkContainer>
						</Col>
						<div className={styles.container}>
							<h4>August 19, 2017</h4>
		          This is the preview. This is the preview. This is the preview. This is the preview. This is the preview.
							This is the preview. This is the preview. This is the preview. This is the preview. This is the preview.
							This is the preview. This is the preview. This is the preview. This is the preview. This is the preview.
							This is the preview. This is the preview. This is the preview. This is the preview. This is the preview.
							This is the preview. This is the preview. This is the preview. This is the preview. This is the preview.
							This is the preview. This is the preview. This is the preview. This is the preview. This is the preview.
		        </div>
					</Row>
					<div className={styles.sectionSpacing}></div>
				</Col>
      </div>
		);
	}
}
