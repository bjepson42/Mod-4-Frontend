import React from "react"
import { Card } from "semantic-ui-react"
import { Redirect } from 'react-router-dom'
import Song from './Song'

const Profile = ({user, handleLogOut}) => (
  <Card>
    <Card.Content>
      <Card.Header>{user.username}</Card.Header>
      <Card.Description>Favorite Songs: <br />{user.songs.map(song => {
        return <Song handleClick={this.props.handleClick} songData={song} key={`song-${song.Id}`}/>
      })}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Profile
