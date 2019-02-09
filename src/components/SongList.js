import React, { Component } from 'react'
import Song from './Song'

class SongList extends Component {

  render(){
    return (
          <div>
          {this.props.songListTitle}
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
          </div>
    )
  }
}

export default SongList
