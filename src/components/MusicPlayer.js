import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';


class MusicPlayer extends Component {

  render(){
    console.log("playlist", this.props.playlist)
    return (
          <div className="MusicPlayer">
            <ReactAudioPlayer
              src="my_audio_file.mp3"
              autoPlay
              controls
            />
            <br />
            Currently Playing: {this.props.playlist.length !== 0 ? this.props.playlist[0].artist + "-" + this.props.playlist[0].title : null}
            <br />
            Up Next: {this.props.playlist.length !== 0 ? this.props.playlist[1].artist + "-" + this.props.playlist[1].title : null}
          </div>
    )
  }
}


//https://www.npmjs.com/package/react-audio-player


export default MusicPlayer
