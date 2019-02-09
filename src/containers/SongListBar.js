import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SongList from '../components/SongList'

class SongListBar extends Component {

  render(){
    return (
          <div className="five wide column">
            <SearchBar />
            <SongList songListTitle="Songs Available" />
          </div>
    )
  }
}

export default SongListBar
