import React, { Component } from 'react'
import LyricsDisplay from '../components/LyricsDisplay'
import MusicPlayer from '../components/MusicPlayer'
import SongList from '../components/SongList'

class VerticalBar extends Component {

  render(){
    return (
          <div className="five wide column">
            <MusicPlayer />
            <SongList songListTitle="Current Playlist" />
            <LyricsDisplay />
          </div>
    )
  }
}

export default VerticalBar
