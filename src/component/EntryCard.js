import React, { Component } from 'react'
import './EntryCard.css'

class EntryCard extends Component {
  render() {
    let thumbnail = null
    if(this.props.data.thumb) {
      thumbnail = <img src={this.props.data.thumb} alt={ this.props.data.title } />
    }
    return(
      <li className="result">
        <a href={ this.props.data.url } target="_blank">
          <span className="caption">
            { thumbnail } </span>
          <span className="result-details">
            <h2>{ this.props.data.title }</h2>
            <p>{ this.props.data.extract }</p>
          </span>
        </a>
      </li>
    )
  }
}

export default EntryCard