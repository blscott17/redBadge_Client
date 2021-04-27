import React, { Component } from 'react';
import APIURL from'../../helpers/environment'  //two folders deep
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

type UserState = {
    username: string;
    password: string;
    value: number
};

type AcceptedProps = {
  updateToken: (newToken: string) => void;
  updateValue: (newValue: number) => void;
  // updateRole: (newUserIsAdmin: string) => void;
};

export default class Login extends Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
      super(props);
      this.state = {
          username: '',
          password: '',
          value: 1
      };
  }
    paperStyle = {
    padding: 20,
    height: '67vh',
    width: 300,
    margin: '0 auto'
  };
  avatarStyle = { backgroundColor: '#1bbd7e' };
  style = { margin: '8px 0' };
    handleSubmit = (e: any) => {
      console.log(this.state.username, this.state.password)
        if (
            this.state.username !== '' &&
            this.state.password !== ''
        ) {
            e.preventDefault();
            fetch(`${APIURL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                }),
                
            })
                .then((res) => {
                    if (res.status !== 200) {
                        throw new Error('Wrong credentials or user not found');
                    } else return res.json();
                })
                .then((data) => {
                    console.log(data);
                    this.props.updateToken(data.Token);
                    // this.props.updateRole(data.user.isAdmin);
                    console.log('User successfully logged in')
                })
              .catch((err) => alert(err));  
        } else {
            alert('username password required');
        }
    };
    handleUserNameChange = (event: any) => {
        const username = event.target.value;
        this.setState({ username: username })
    };
    handlePasswordChange = (event: any) => {
        const password = event.target.value;
        this.setState({ password: password })
    };
//event: React.ChangeEvent<{}>, 
    handleChange = (newValue: number) => {
      this.setState({value:newValue});
      // this.setValue(newValue);
    }

render() {
  return (
    <Grid>
      <Paper style={this.paperStyle}>
        {/* <Grid align='center'> */}
        <Grid>
          <Avatar style={this.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
        onChange={this.handleUserNameChange}
          label='Username'
          placeholder='Enter username'
          fullWidth
          required
        />
        <TextField
        onChange={this.handlePasswordChange}
          label='Password'
          placeholder='Enter password'
          type='password'
          // margin-bottom='25px'
          fullWidth
          required
        />
        <br></br>
        <Button
          onClick={this.handleSubmit}
          type='submit'
          color='primary'
          variant='contained'
          style={this.style}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          {/* {' '} */}
          If you do not have an account?
          {/* <Link href='#' onClick={() => this.handleChange('event', 1)}> */}
          <Link href='#' onClick={() => this.props.updateValue(1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

}
