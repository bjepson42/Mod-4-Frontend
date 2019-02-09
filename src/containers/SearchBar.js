import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      searchString: ""
    }
  }

  handleSearch = (event) => {
    console.log("in handle search")
    console.log(event.target.value)

  }

  render(){
    return (
          <div>
            <Search onSearchChange={this.handleSearch} showNoResults={false} />
          </div>
    )
  }
}

export default SearchBar
