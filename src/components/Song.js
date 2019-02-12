import React, { Component } from 'react'

class Song extends Component {

  handleClick(event){
    console.log("Clicked on song",event.target.innerText, "key", event.target.id)

  }

  render(){
    return (
          <div onClick={this.props.handleClick} id={this.props.songData.id}>
            {this.props.songData.artist} - {this.props.songData.title}
          </div>
    )
  }
}

export default Song
