import React, { Component } from 'react'
import About from './about'
import Work from './work'
import Contact from './contact'

export default class Main extends Component {
  render() {
    return (
      <main>
        <About />
        <Work />
        <Contact />
      </main>
    )
  }
}
