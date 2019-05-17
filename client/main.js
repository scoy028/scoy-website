import React, { Component } from 'react'
import About from './components/about'
import Contact from './components/contact'
import Intro from './components/intro'
import Work from './components/work'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Intro />
        <About />
        <Work />
        <Contact />
      </main>
    )
  }
}
