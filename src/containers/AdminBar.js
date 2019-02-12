import React, { Component } from 'react'
import LyricsDisplay from '../components/LyricsDisplay'
import MusicPlayer from '../components/MusicPlayer'
import SongList from '../components/SongList'

class VerticalBar extends Component {

  render(){
    return (
          <div className="five wide column">
            <MusicPlayer playlist={this.props.currentPlaylist} />
            <SongList songListTitle="Current Playlist" songData={this.props.currentPlaylist} />
            <LyricsDisplay />
          </div>
    )
  }
}

export default VerticalBar
