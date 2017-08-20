import React from 'react';
import styles from './ProjectPage.css';

import { Row, Col, PageHeader } from 'react-bootstrap';

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <Col md={10} mdOffset={1}>
          <PageHeader>Projects</PageHeader>
        </Col>
      </div>
    )
  }
}
