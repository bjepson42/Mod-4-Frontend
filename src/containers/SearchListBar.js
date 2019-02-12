import React, { Component } from 'react'
import SongList from '../components/SongList'
import { Search } from 'semantic-ui-react'

class SearchListBar extends Component {
  state = {
      searchString: "",
      currentSongList: []
    }

  componentDidMount(){
    this.setState({
      currentSongList: this.props.songData
    })
  }

  handleSearch = (event) => {
    console.log(event.target.value)
    if (event.target.value !== ""){
      let songsMatchingSearch = this.props.songData.filter(song => (song.title.toLowerCase().includes(event.target.value.toLowerCase()) || song.artist.toLowerCase().includes(event.target.value.toLowerCase())))
      this.setState({
        currentSongList: songsMatchingSearch
      })
    }
  }

  render(){
    return (
          <div className="five wide column">
            <Search onSearchChange={this.handleSearch} showNoResults={false} />
            <SongList songListTitle="Songs Available" songData={this.state.currentSongList.length === 0 ? this.props.songData : this.state.currentSongList} />
          </div>
    )
  }
}

export default SearchListBar
