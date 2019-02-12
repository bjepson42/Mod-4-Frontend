import React, { Component } from 'react'

class NavBar extends Component {
render(){
  console.log("propsdasffasf", this.props.currentUser)
  return (
        <div>
          <h1>KARAOKIFY!</h1>
          <h2>{this.props.currentUser}</h2>
          <button onClick={this.props.onLogOut}>Logout</button>
          <br></br>
        </div>
  )
}



}

export default NavBar
