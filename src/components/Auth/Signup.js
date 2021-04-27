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
            label='User Name'
            placeholder='Enter your username'
          />
          <TextField
            fullWidth
            label='Password'
            placeholder='Enter your password'
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
          <TextField fullWidth label='Email' placeholder='Enter your email' />
          <TextField
            fullWidth
            label='Phone Number'
            placeholder='Enter your phone number'
          />
          <TextField
            fullWidth
            label='Street Address'
            placeholder='Enter your street address'
          />
          <TextField fullWidth label='City' placeholder='Enter your city' />
          <TextField fullWidth label='State' placeholder='Enter your state' />
          <TextField
            fullWidth
            label='ZipCode'
            placeholder='Enter your zipcode'
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
