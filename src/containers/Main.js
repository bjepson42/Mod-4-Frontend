import React, { Component } from 'react'
import PlayListBar from './PlayListBar'
import SearchListBar from './SearchListBar'
import AdminBar from './AdminBar'

class Main extends Component {
    state = {
      topTen: [],
      currentUserFavorites: [],
      currentPlaylist: [],
      currentSong: []
    }

  currentSong = () => {
    //find most recent song on list
    return this.currentPlaylist[1]

  }

  returnTopTen = () => {
    console.log("in find return top ten")
    let top10 = [], top10Ids = [], tmp = {}, n = 10
    if(this.props.songData.length !== 0){
    this.props.playlistData.forEach(function(song) {
        tmp[song.song_id] = tmp[song.song_id] ? tmp[song.song_id]+1 : 1;
    });
    top10Ids = Object.keys(tmp).sort(function(a, b) { return tmp[a] - tmp[b] }).slice(-(n)).reverse();
    top10 = top10Ids.map(songId => {
      return this.props.songData.find(song => {
        return parseInt(song.id) === parseInt(songId)})
    })
  }
    return top10;
  }

  returnCurrentUserFavorites = (userId) => {
    let myFavoritePlaylistData = this.props.playlistData.filter(playlistSong => (playlistSong.user_id === userId && this.props.songData.length !== 0))
    let myFavorites = myFavoritePlaylistData.map(favSongData => {
      return this.props.songData.find(song =>
        {return song.id === favSongData.song_id})
    })
    return myFavorites
  }

  toggleSongOnPlaylist(){

  }

  currentPlaylist = () => {
    let myFavoritePlaylistData = this.props.playlistData.filter(playlistSong => (playlistSong.played === false && this.props.songData.length !== 0))
    myFavoritePlaylistData.sort(function(a,b){
      return b.updated_at - a.updated_at
    })
    let currentPlaylist = myFavoritePlaylistData.map(favSongData => {
      return this.props.songData.find(song => song.id === favSongData.song_id)
    })
    return currentPlaylist
  }


  render(){
    return (
          <div className="ui grid">
            <SearchListBar songData={this.props.songData} />
            <PlayListBar  songData={this.props.songData}
                          topTen={this.returnTopTen()}
                          myFavorites={this.returnCurrentUserFavorites(this.props.currentUserData.id)}
            />
            <AdminBar songData={this.props.songData} currentPlaylist={this.currentPlaylist()}/>
          </div>
    )
  }
}

export default Main
