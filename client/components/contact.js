import React, { Component } from 'react'
import Nav from './nav'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <footer id="contact">
                <div className="full-width">
                    <div className="half-width">
                        <img src="img/photo_taker.png" id="contact-img" alt="my contact image" />
                    </div>
                    <div className="half-width" id="contact-info">
                        <h2>Like what you see?</h2>
                        <h3 id="email-header">I love to meet new people, so feel free to contact me!</h3>
                        <a href="mailto:stephanie.a.coy@gmail.com"><img src="img/icon-envelope.png" id="envelope" alt="envelope icon" />stephanie.a.coy [@] gmail.com</a>
                        <h3 id="socialmedia-header">Or, find me on the interwebs.</h3>
                        <ul>
                            <li><a href="https://twitter.com/SCoy028"><img src="img/icon-twitter.png" alt="twitter icon" /></a></li>
                            <li><a href="https://www.tumblr.com/blog/scoy"><img src="img/icon-tumblr.png" alt="tumblr icon" /></a></li>
                            <li><a href="https://www.instagram.com/scoy028/"><img src="img/icon-instagram.png" alt="instagram icon" /></a></li>
                            <li><a href="https://www.linkedin.com/in/coystephanie/"><img src="img/icon-linkedin.png" alt="linkedin icon" /></a></li>
                            <li><a href="https://github.com/scoy028"><img src="img/icon-github.png" alt="github icon" /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
      </div>
    )
  }
}
