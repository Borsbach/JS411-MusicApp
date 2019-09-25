import React, { Component } from 'react';
import './App.css';
import {AppBar, Box, Toolbar, Typography, Button, TextField} from '@material-ui/core';
import Dashboard from './components/Dashboard'

class App extends Component {
    state ={
      loggedIn: false
    }

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />
    } else {
  return (
    <div>
      <AppBar position='float'>
        <Toolbar>
          <Typography component="div">
            <Box fontWeight="fontWeightBold" m={2}>
              My Music App
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
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
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  )};
}
}

export default App;
