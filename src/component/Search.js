import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let searchTerm  = this.searchTerm.value
    let cb          = "&callback=JSON_CALLBACK"
    let api         = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=12&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=2&exlimit=max&piprop=thumbnail&pithumbsize=400&gsrsearch="
    
    if(!searchTerm) {
      return;
    }

    this.props.setResult(true)
    this.props.setData(false)
    this.props.jsonp(api + searchTerm + cb, (err, data) => {
      if(err){
        console.log(err)
      } else {
        this.props.setData(data.query.pages)
      }
    })
    
  }

  render() {
    return(
      <form className="searchForm" onSubmit={ this.handleSubmit }>
        <input type="text" ref={ input => this.searchTerm = input } placeholder="Search term" />
        <button type="submit" className="searchButton">
          <span className="hidden">Search</span>
        </button>
      </form>
    )
  }
}

export default Search
