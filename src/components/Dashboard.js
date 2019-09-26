import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core'
import Appbar from './Appbar'

class Dashboard extends Component {
  // state = {

  //   }

  render() { 
    

    return (
      <div>
        <Appbar />
        <h1>Welcome Alex!</h1>
        <br />
        <div className='container1'>
        <Card className='card1'>
      <CardContent>
        {/* <Typography className='text1' color="textSecondary" gutterBottom>
          Online Mode
        </Typography> */}
        <Typography variant="h5" component="h2">
          Online Mode
        </Typography>
        <Typography className='text2' color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
      </div>
      ) 
  }
}

export default Dashboard;