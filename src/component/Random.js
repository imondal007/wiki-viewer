import React, { Component } from 'react';
import './Random.css'

class Random extends Component {
  render() {
    return(
      <a className="randomLink" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">Random entry</a>
    )
  }
}

export default Random;