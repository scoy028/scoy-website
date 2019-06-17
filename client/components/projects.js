import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class Projects extends Component {
  render() {
    return (
      <Container fluid id="projects">
        <Row>
          <Col md>
            <img src="img/juliaicon.ico" alt="Julia icon" height="300px" />
            <h3>Julia</h3>
            <p>An accessible online cookbook which allows the user to navigate through their favorite recipes using only their voice.</p>
            <p><a href="https://github.com/1901cs-maries-roc/julia">Github</a></p>
            <p><a href="https://maries-roc-julia.herokuapp.com/">Website</a></p>
          </Col>
          <Col md>
            <img src="img/helpericon.png" alt="The Knitter's Helper icon" height="300px" />
            <h3>The Knitter's Helper</h3>
            <p>I pride myself on writing CSS that is easy to read and build on. I focus on keeping my CSS lean and fast to load, and I make it a habit to stay up to date on current best practices.</p>
            <p><a href="https://github.com/scoy028/theKnittersHelper">Github</a></p>
          </Col>
          <Col md>
            <img src="img/puppermittens.png" alt="Puppermittens icon" height="200px" />
            <h3>PupperMittens</h3>
            <p>You can trust me to take a designer's PSD and quickly & accurately convert it into a webpage that is a pixel-perfect match.</p>
            <p><a href="https://github.com/saturn-charm/grace-shopper">Github</a></p>
            <p><a href="https://puppermittens.herokuapp.com/">Website</a></p>
          </Col>
        </Row>
      </Container>
    )
  }
}
