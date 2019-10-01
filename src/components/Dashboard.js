import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Switch,
  Slider,
  MenuItem,
  Select,
  FormControl
} from "@material-ui/core";
import Appbar from "./Appbar";

class Dashboard extends Component {
  state = {
    online: false,
    volume: 50,
    quality: 2,
    notifications: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.quality !== prevState.quality) {
      // set the quality message in this.state.notifications
      const notes = this.state.notifications;
      if (this.state.quality === 1) {
        notes['quality'] = 'the quality is low'
      } else {
        notes['quality'] = ''
      }
      this.setState({ notifications: notes });
    }
    if (this.state.online !== prevState.online) {
      // set the online message in this.state.notifications
      const notes = this.state.notifications;
      if (this.state.online) {
        notes['online'] = 'Online'
      } else {
        notes['online'] = ''
      }
      this.setState({ notifications: notes });
    }
    if (this.state.volume !== prevState.volume) {
      // set the volume message in this.state.notifications
      const notes = this.state.notifications;
      if (this.state.volume >= 80) {
        notes['volume'] = 'too high'
      } else {
        notes['volume'] = ''
      }
      this.setState({ notifications: notes });
    }
  }

  handleVolumeChange = (event, value) => {
    this.setState({ volume: value })
  }

  handleChange = event => {
    this.setState({ quality: event.target.value });
  };

  handleClick = () => {
    console.log("Button online clicked");
    this.setState({ online: !this.state.online });
  };

  render() {
    return (
      <div>
        <Appbar />
        <h1>Welcome Alex!</h1>
        <br />
        <div className="container1">
          <Card className="card1">
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
                onClick={this.handleClick}
                {...this.state.online}
                // checked={state.checkedA}
                // onChange={handleChange('checkedA')}
                value="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </CardActions>
          </Card>
          <br />
          <Card className="card2">
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
              <Slider
                onChange={this.handleVolumeChange}
                value={this.state.volume}
                // defaultValue={30}
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
          <br />
          <Card className="card3">
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
              <FormControl className="Form">
                <Select
                  value={this.state.quality}
                  onChange={this.handleChange}
                  displayEmpty
                  name=""
                  // className={classes.selectEmpty}
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </div>
        <div className="notifications">
          <h2>System Notifications:</h2>
          {/* <p>Your application is {this.state.online ? 'online' : 'offline'}. You {this.state.online ? 'are' : 'are not'} able to share or stream music to other devices.</p> */}
          {Object.keys(this.state.notifications).map(n => {
            return <p>{this.state.notifications[n]}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
