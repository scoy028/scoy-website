import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class Intro extends Component {
  render() {
    return (
      <Jumbotron fluid id="intro">
        <Container fluid>
          <h2><span>Hi,</span> I'm a software engineer that loves clean & creative code.</h2>
        </Container>
      </Jumbotron>
    )
  }
}
