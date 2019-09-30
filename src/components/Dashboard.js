import React, { Component } from 'react';
import {
  Card, 
  CardContent, 
  Typography, 
  CardActions, 
  Switch, 
  Slider, 
  MenuItem,
  Select,
  FormControl,
} from '@material-ui/core'
import Appbar from './Appbar'

class Dashboard extends Component {
  state = {
      online: false,
      volume: [],
      quality: [],
      notifications: [],
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.quality !==prevState.quality) {
      this.setState(this.state.quality)
    }
  }


  handleClick = () => {
    console.log('Button online clicked')
    this.setState({ online: !this.state.online })
  }

  render() { 
    return (
      <div>
        <Appbar />
        <h1>Welcome Alex!</h1>
        <br />
        <div className='container1'>
        <Card className='card1'>
          <CardContent>
            <Typography variant="h5" component="h5">
              Online Mode
            </Typography>
            <Typography variant="body2" component="p">
              Is this application connected
            <br />
            to the internet?
            </Typography>
            </CardContent>
            <CardActions>
            <Switch
            onClick={this.handleClick}{...this.state.online}
            // checked={state.checkedA}
            // onChange={handleChange('checkedA')}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            </CardActions>
          </Card>
          <Card className='card2'>
          <CardContent>
            <Typography variant="h5" component="h5">
              Master Volume
            </Typography>
            <Typography variant="body2" component="p">
              Overrides all other sound
            <br />
            settings in this application
            </Typography>
            </CardContent>
            <CardActions>
            {/* <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography> */}
      <Slider onChange
        defaultValue={30}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        />
          </CardActions>
          </Card>
          <Card className='card3'>
          <CardContent>
            <Typography variant="h5" component="h5">
              Sound Quality
            </Typography>
            <Typography variant="body2" component="p">
              Manually control the music
            <br />
              quality in event of poor
            <br />
              connection   
            </Typography>
            </CardContent>
            <CardActions>
            <FormControl className='Form'>
          <Select
          quality={this.state.quality}
          // onChange={handleChange}
          displayEmpty
          name=''
          // className={classes.selectEmpty}
          >
          <MenuItem quality={1}>Low</MenuItem>
          <MenuItem quality={2}>Normal</MenuItem>
          <MenuItem quality={3}>High</MenuItem>
          </Select>
          </FormControl>
          </CardActions>
          </Card>
        </div>
        <div>
          <h2>System Notifications:</h2>
          Your application is {this.state.online ? 'online' : 'offline'}. You {this.state.online ? 'are' : 'are not'} able to share or stream music to other devices.
        </div>
      </div>
    ) 
  }
}

export default Dashboard;