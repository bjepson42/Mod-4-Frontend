import React, { Component } from 'react'
import SongList from '../components/SongList'

class PlayListBar extends Component {

  render(){
    return (
          <div className="five wide column">
            <SongList songListTitle="Top 10 Songs" songData={this.props.topTen}/>
            <SongList songListTitle="My Favorite Songs" songData={this.props.myFavorites}/>
          </div>
    )
  }
}

export default PlayListBar
