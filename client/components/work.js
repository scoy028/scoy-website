import React, { Component } from 'react'
import Nav from './nav'

export default class Work extends Component {
  render() {
    return (
      <div>
        <section id="work">
                <div className="full-width">
                    <div className="third-width">
                        <img src="img/icon-html.png" alt="HTML icon" />
                        <h3>Hand-Coded HTML</h3>
                        <p>My focus is writing clean, well formatted, semantic HTML5 by hand to make sure that the content is easy to read, easy to collaborate, easy to trouble-shoot and accessible.</p>
                    </div>
                    <div className="third-width">
                        <img src="img/icon-css.png" alt="CSS icon" />
                        <h3>Well-Organized CSS</h3>
                        <p>I pride myself on writing CSS that is easy to read and build on. I focus on keeping my CSS lean and fast to load, and I make it a habit to stay up to date on current best practices.</p>
                    </div>
                    <div className="third-width">
                        <img src="img/icon-pencil.png" alt="Pencil icon" />
                        <h3>Ease Converting Designs into Code</h3>
                        <p>You can trust me to take a designer's PSD and quickly & accurately convert it into a webpage that is pixel-perfect match.</p>
                    </div>
                </div>
            </section>
      </div>
    )
  }
}
