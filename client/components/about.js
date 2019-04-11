import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="full-width">
            <h2>A little bit about me.</h2>
            <div className="half-width">
              <p>Originally from Massachusetts, I made the leap to Brooklyn, New York for the variety of experiences on offer. After completing a Masters Degree in Library and Information Science in Archives Management, I explored the crazy world of data analysis and management as a records manager, information architecture as a taxonomist, and organization of media as an archivist. With this variety of experiences, I realized that what I have always been interested in</p>
            </div>
            <div className="half-width">
              <p>is creation, management, and user interaction with information. That eureka moment pushed me in a direction I hadn't considered before; software development. When I learned how to build my first website, I realized I found something that gave me the freedom & versatility I was looking for in my work. Now I've made a commitment to learning full-stack development, where I can use my organization skills and eye for detail to write clean, creative code.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
