import React, { Component } from 'react';
import {AppBar, Box, Toolbar, Typography} from '@material-ui/core'

class Appbar extends Component {
  state = {  }
  render() { 
    return (
      <AppBar position='floating'>
        <Toolbar>
          <Typography component="div">
            <Box fontWeight="fontWeightBold" m={2}>
              Alex's Music App
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      );
  }
}

export default Appbar;