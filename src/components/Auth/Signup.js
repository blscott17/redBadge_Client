import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label='Email'
            placeholder='Enter your Email Address'
          />
          <TextField
            fullWidth
            label='Password'
            placeholder='Enter your Password'
          />
          <TextField
            fullWidth
            label='First Name'
            placeholder='Enter your First Name'
          />
          <TextField
            fullWidth
            label='Last Name'
            placeholder='Enter your Last Name'
          />
          <TextField
            fullWidth
            label='Phone Number'
            placeholder='Enter your Phone Number'
          />
          <TextField
            fullWidth
            label='Street Address'
            placeholder='Enter your Street address'
          />
          <TextField fullWidth label='City' placeholder='Enter your City' />
          <TextField
            fullWidth
            label='State'
            placeholder='Enter your State Abbreviation'
          />
          <TextField
            fullWidth
            label='ZipCode'
            placeholder='Enter your Zipcode'
          />
          <Button type='submit' variant='contained' color='primary'>
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
