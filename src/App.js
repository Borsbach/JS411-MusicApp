import React, { Component } from 'react';
import './App.css';
import {Button, TextField} from '@material-ui/core';
import Dashboard from './components/Dashboard'
import Appbar from './components/Appbar'

class App extends Component {
    state ={
      loggedIn: false
    }

    handleClick = () => {
      console.log('Button clicked')
      this.setState({ loggedIn: !this.state.loggedIn })
    }

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />
    } else {
  return (
    <div>
      <Appbar />
      <br />
      <TextField className='username'
        id="standard-input"
        label="Username*"
        type="username"
        autoComplete="current-password"
        margin="normal"
      />
      <br />
      <TextField className='password'
        id="standard-password-input"
        label="Password*"
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <br />
      <Button onClick={this.handleClick} variant="contained" color="primary">
        Login
      </Button>
    </div>
  )};
}
}

export default App;
