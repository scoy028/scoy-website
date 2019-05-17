import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class About extends Component {
  render() {
    return (
      <Container id="about">
        <Row fluid className="full-width">
          <Col>
            <h2>A little bit about me.</h2>
          </Col>
        </Row>
        <Row fluid className="full-width">
          <Col md={6}>
            <p>Originally from Massachusetts, I made the leap to Brooklyn, New York for the variety of experiences on offer. After completing a Masters Degree in Library and Information Science in Archives Management, I explored the crazy world of data analysis and management as a records manager, information architecture as a taxonomist, and organization of media as an archivist. With this variety of experiences, I realized that what I have always been interested in is creation, management, and user interaction with information.</p>
          </Col>
          <Col md={6}>
            <p>That eureka moment pushed me in a direction I hadn't considered before: software development. When I learned how to build my first website, I realized I found something that gave me the freedom & versatility I was looking for in my work. The Grace Hopper Program at Fullstack Academy of Code allowed me to fully make a commitment to learning fullstack software development, where I can use my organization skills and eye for detail to write clean, creative code.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
