import React from 'react';
import styles from './articles.css';

import { Row, Col, PageHeader, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class ShipOfTheseus extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.homeIconSpacing}></div>
        <Col md={4} mdOffset={1}>
          <LinkContainer to="/" >
            <Image src="homeIconSmall.png" role="button" responsive />
          </LinkContainer>
        </Col>
        <Col md={8} mdOffset={2}>
          <PageHeader>Ship of Theseus <br/><small>A Voyage to Understanding Identity</small></PageHeader>
          <div className={styles.image}>
            <Image src="ship.jpg" responsive/>
            <figcaption style={{textAlign: 'center', paddingTop: '8px' }}>
              Are these two ships the same? How are they different?</figcaption>
          </div>
          <div>
            <p>
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
              skfja;fjdsklfjaskdfj;s
            </p>
          </div>
        </Col>
      </div>
    )
  }
}
