import React, { Component } from 'react'
import SongList from '../components/SongList'

class PlayListBar extends Component {

  render(){
    return (
          <div className="five wide column">
            <SongList songListTitle="Top 10 Songs"/>
            <SongList songListTitle="My Favorite Songs"/>
          </div>
    )
  }
}

export default PlayListBar
