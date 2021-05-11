import React, { Component } from 'react';
import APIURL from '../../helpers/environment';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

type UserState = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

type AcceptedProps = {
  updateToken: Function;
  updateValue: Function;
  updateRole: Function;
};

export default class Signup extends Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zipcode: ''
    };
  }

  // const Signup = () => {
  paperStyle = { padding: 20, width: 300, margin: '0 auto' };
  headerStyle = { margin: 0 };
  avatarStyle = { backgroundColor: '#1bbd7e' };

  handleSubmit = (e: any) => {
    console.log(
      this.state.email,
      this.state.password,
      this.state.firstname,
      this.state.lastname,
      this.state.phone,
      this.state.street,
      this.state.city,
      this.state.state,
      this.state.zipcode
    );
    if (
      this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.firstname !== '' &&
      this.state.lastname !== '' &&
      this.state.city !== '' &&
      this.state.state !== '' &&
      this.state.zipcode !== ''
    ) {
      e.preventDefault();
      fetch(`${APIURL}/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          phone: this.state.phone,
          street: this.state.street,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode
        })
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error('Wrong credentials or user not found');
          } else return res.json();
        })
        .then((data) => {
          console.log(data);
          this.props.updateToken(data.sessionToken);
          this.props.updateRole(data.user.isAdmin);
          console.log('You have successfully registered with Happy Tales!');
        })
        .catch((err) => alert(err));
    } else {
      alert('all fields are required');
    }
  };

  handleEmailChange = (event: any) => {
    const email = event.target.value;
    this.setState({ email: email });
  };
  handlePasswordChange = (event: any) => {
    const password = event.target.value;
    this.setState({ password: password });
  };
  handleFirstNameChange = (event: any) => {
    const firstname = event.target.value;
    this.setState({ firstname: firstname });
  };
  handleLastNameChange = (event: any) => {
    const lastname = event.target.value;
    this.setState({ lastname: lastname });
  };
  handlePhoneNumberChange = (event: any) => {
    const phone = event.target.value;
    this.setState({ phone: phone });
  };
  handleStreetAddressChange = (event: any) => {
    const street = event.target.value;
    this.setState({ street: street });
  };
  handleCityChange = (event: any) => {
    const city = event.target.value;
    this.setState({ city: city });
  };
  handleStateChange = (event: any) => {
    const state = event.target.value;
    this.setState({ state: state });
  };
  handleZipCodeChange = (event: any) => {
    const zipcode = event.target.value;
    this.setState({ zipcode: zipcode });
  };
  render() {
    return (
      <Grid>
        <Paper style={this.paperStyle}>
          <Grid>
            <Avatar style={this.avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={this.headerStyle}>Sign Up</h2>
            <Typography variant='caption' gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form>
            <TextField
              onChange={this.handleEmailChange}
              fullWidth
              label='Email'
              placeholder='Enter your Email Address'
              required
            />
            <TextField
              onChange={this.handlePasswordChange}
              fullWidth
              label='Password'
              placeholder='Enter your Password'
              required
            />
            <TextField
              onChange={this.handleFirstNameChange}
              fullWidth
              label='First Name'
              placeholder='Enter your First Name'
              required
            />
            <TextField
              onChange={this.handleLastNameChange}
              fullWidth
              label='Last Name'
              placeholder='Enter your Last Name'
              required
            />
            <TextField
              onChange={this.handlePhoneNumberChange}
              fullWidth
              label='Phone Number'
              placeholder='Enter your Phone Number'
              required
            />
            <TextField
              onChange={this.handleStreetAddressChange}
              fullWidth
              label='Street Address'
              placeholder='Enter your Street address'
              required
            />
            <TextField
              onChange={this.handleCityChange}
              fullWidth
              label='City'
              placeholder='Enter your City'
              required
            />
            <TextField
              onChange={this.handleStateChange}
              fullWidth
              label='State'
              placeholder='Enter your State Abbreviation'
              required
            />
            <TextField
              onChange={this.handleZipCodeChange}
              fullWidth
              label='ZipCode'
              placeholder='Enter your Zipcode'
              required
            />
            <Button
              onClick={this.handleSubmit}
              type='submit'
              variant='contained'
              color='primary'
              style={this.headerStyle}
              fullWidth
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}
