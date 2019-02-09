import React, { Component } from 'react'
import PlayListBar from './PlayListBar'
import SongListBar from './SongListBar'
import AdminBar from './AdminBar'

class Main extends Component {

  render(){
    return (
          <div className="ui grid">
            <SongListBar />
            <PlayListBar />
            <AdminBar />
          </div>
    )
  }
}

export default Main
