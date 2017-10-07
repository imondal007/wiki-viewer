import React, { Component } from 'react'
import './App.css'
import loading from '../img/loading.gif'

// Component
import Search from './Search'
import Random from './Random'
import EntryCard from './EntryCard'

let page        = "https://en.wikipedia.org/?curid="

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { pages: null, page : page, result: false }

    this.setData = this.setData.bind(this)
    this.setResult = this.setResult.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  setResult(result) {
    this.setState({ result })
  }

  setData(pages) {
    this.setState({ pages })
  }

  clearSearch(event) {
    this.setResult(false)
    this.setData(false)
    event.preventDefault()

  }
  
  render() {

    // Showing random entry loading button if thhere is no search result to show
    let toRender = null
    
    if(!this.state.pages && this.state.result){
      toRender = <img className="loader" src={loading} alt="loading..."/> 
    } 
    
    if( this.state.pages ) {
      toRender = <ul className="results">
                    {
                      Object.keys(this.state.pages)
                        .map(key => {
                          return <EntryCard
                                    key={ key }
                                    data = { 
                                      Object.assign(
                                        {},
                                        { title : this.state.pages[key].title },
                                        { url : this.state.page + this.state.pages[key].pageid }, 
                                        { extract : this.state.pages[key].extract },
                                        { thumb : this.state.pages[key].thumbnail ?  this.state.pages[key].thumbnail.source : null }
                                      )
                                    }
                                 />
                        }
                      )
                    }
                  </ul>
    }

    // Generet Dynamic class
    let dynamicClass = "";
    if(!this.state.result) {
      dynamicClass = " no-result"
    }

    return(
      <div className={"App" + dynamicClass}>
        <div className="hero-area">
          <div className="container">
          <a href="/" onClick={this.clearSearch} className="clearsearch" > &#x1F878; </a>  
          <Search jsonp={ this.props.jsonp } setData={ this.setData }  setResult={ this.setResult } />
          <Random />
          </div>
        </div>
        <div className="result-area container">
          { toRender }
        </div>
      </div>
    )
  }
}

export default App;