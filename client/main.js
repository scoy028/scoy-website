import React, { Component } from 'react'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'

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
