import React, { Component } from 'react'
import Song from './Song'

class SongList extends Component {

  render(){
    return (
          <div>
          <h2>{this.props.songListTitle}</h2>
            <div className="songList">
              {this.props.songData.map(song => {
                return <Song handleClick={this.props.handleClick} songData={song} key={`song-${song.Id}`}/>
              })}
            </div>
          </div>
    )
  }
}

export default SongList
