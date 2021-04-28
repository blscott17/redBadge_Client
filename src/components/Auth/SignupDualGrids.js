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
  const paperStyle = { padding: 20, width: 600, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
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
            <Grid item xs={6}>
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
              <TextField
                fullWidth
                label='Email'
                placeholder='Enter your email'
              />
              <TextField
                fullWidth
                label='Phone Number'
                placeholder='Enter your phone number'
              />
            </Grid>
            <TextField
              fullWidth
              label='Street Address'
              placeholder='Enter your street number '
            />
            <Button type='submit' variant='contained' color='primary'>
              Sign up
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
};

export default Signup;

/*
          <FormControl component='fieldset' style={marginTop}>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              aria-label='gender'
              name='gender'
              style={{ display: 'initial' }}
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
            </RadioGroup>
          </FormControl>
*/
