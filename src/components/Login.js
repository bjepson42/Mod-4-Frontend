import React, { Component } from 'react'
import { withRouter } from 'react-router'
import  { Button, Form, Segment, Message } from "semantic-ui-react"

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event, { name, value }) => {
    console.log("handle change", name, value)
    this.setState({
      [name]: value
    })
  }

  handleLogOut = () => {
    localStorage.clear()
    console.log("clear local storage", this.localStorage)
  }

  render(){
    return (
          <div className="login">
            <Form
              onSubmit={() => {this.props.onLogIn(this.state.username, this.state.password)}}
              size="mini"
              key="mini"
              loading={this.props.authenticatingUser}
              error={this.props.failedLogin}
            >
              <Message error header={this.props.failedLogin ? this.props.error : null} />
              <Form.Group widths="equal">
                <Form.Input
                  label="username"
                  placeholder="username"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
                <Form.Input
                  type="password"
                  label="password"
                  placeholder="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
          </div>
    )
  }
}

export default withRouter(Login)
