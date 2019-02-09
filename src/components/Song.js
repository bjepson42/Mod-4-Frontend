import React, { Component } from 'react'

class Song extends Component {

  handleClick(event){
    console.log("Clicked on song",event.target.innerText)

  }

  render(){
    return (
          <div onClick={this.handleClick}>
            Don't Fear the Reaper - Blue Oyster Cult
          </div>
    )
  }
}

export default Song
