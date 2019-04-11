import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
            <div className="full-width">
                <div className="one-third-width">
                    <h1>Stephanie Coy</h1>
                </div>
                <div className="two-thirds-width">
                    <nav>
                        <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="https://medium.com/@stephanie.a.coy">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <h2><span>Hi,</span> I'm a new developer that loves clean & creative code.</h2>
            </div>
        </header>
      </div>
    )
  }
}
