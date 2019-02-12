import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar'
import Main from './containers/Main'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Login from './components/Login'
import backgroundImage from './img/karaoke.jpg'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

const API = 'http://localhost:3000/'

const RAPIDAPIKEY = '228ddf9fdfmsh4e1d0f24954da3ap1a7372jsnbe9d54c789fd'

let unirest = require('unirest');

class App extends Component {
  constructor(){
    super()
        this.state = {
          users: [],
          songs: [],
          selected_songs: [],
          currentUser: null,
          loading: true
        }
  }



fetchRapidApi = (searchString) => {
  fetch(`https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/track.search?q=${searchString}&page_size=5&page=1`, {
    method: "GET",
    headers: {"X-RapidAPI-Key":RAPIDAPIKEY}
  })
  .then(res => res.json())
  .then(res => {
    console.log("Current Track Info: ",res)
  })
}


  handleLogin = (username, password) => {
    fetch(API + 'login',
    {
      method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        console.log(data)
        alert('Incorrect username/password combination')
      } else {
        this.setState({
          currentUser: data.user
        })
        localStorage.setItem("token", data.token)
      }
    })
  }

  componentDidMount(){
    this.fetchData("users")
    this.fetchData("songs")
    this.fetchData("selected_songs")
    this.fetchRapidApi("Estelle feat Kanye West -American Boy")
    let token = localStorage.getItem('token')
    if(token){
      fetch(API + 'profile', {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(data => {
        console.log("userdata at fetch", data)
        this.setState({
          currentUser: data,
          loading:false
        })
      })
    } else {
      this.setState({loading: false})
    }
  }

  handleLogOut = () => {
    console.log("clear local storage", this.localStorage)
    this.setState({
      currentUser: null
    })
    localStorage.clear()
  }

  handleViewSongInfo = () => {

  }

  fetchData(dataType){
    fetch(API + `${dataType}`)
    .then(res => res.json())
    .then(data => {
      let key = dataType
      let val = data
      let obj = {}
      obj[key] = val
      console.log(dataType, data)
      this.setState(obj)
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <NavBar currentUser={this.state.currentUser ?
            this.state.currentUser.name : ""} onLogOut={this.handleLogOut}/>
          {!this.state.loading ? <Switch>
            <Route exact path="/" render={() => {
              return this.state.currentUser ?
              <Main songData={this.state.songs}
                    playlistData={this.state.selected_songs}
                    userData={this.state.users}
                    currentUserData={this.state.currentUser}
              /> : <Redirect to='/login' />
            }} />
            <Route exact path="/profile" render={() => {
              return this.state.currentUser ?
              <Profile  user={this.state.currentUser}
                        handleClick={this.handleViewSongInfo}
              /> : <Redirect to='/login' />
            }} />
            <Route exact path="/login" render={() => {
              console.log("currentUser??", this.state.currentUser)
              return this.state.currentUser ?
              <Main songData={this.state.songs}
                    playlistData={this.state.selected_songs}
                    userData={this.state.users}
                    currentUserData={this.state.currentUser}
              /> : <Login onLogIn={this.handleLogin} handleLogOut={this.handleLogOut} />
            }} />
            <Route component={NotFound} />
          </Switch> : null }
        </div>
      </div>
    );
  }
}

export default withRouter(App);
// <img src={backgroundImage} className="background" alt="" />
