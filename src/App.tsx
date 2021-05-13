//import * as React from 'react';
import React, { Component } from 'react';
import Auth from './components/Auth/index';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

type sessionState = {
  token: string;
  isAdmin: string;
  firstname: string;
};

export default class App extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);

    this.state = {
      token: '',
      isAdmin: 'false',
      firstname: ''
    };
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  updateToken = (token: string) => {
    localStorage.setItem('token', token);
    this.setState({ token: token });
    console.log(token);
  };

  clearToken = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  // Make sure you pass the update Role down to the login
  updateRole = (newRole: string) => {
    localStorage.setItem('role', newRole);
    this.setState({ isAdmin: newRole });
    console.log(newRole);
  };
  protectedViews = () => {
    return localStorage.getItem('token') ? (
      <Dashboard token={this.state.token} clickLogout={this.clearToken} />
    ) : (
      <Auth updateToken={this.updateToken} updateRole={this.updateRole} />
    );
  };

  // <Navbar clickLogout={this.clearToken} />

  render() {
    return <div className='App'>{this.protectedViews()}</div>;
  }
}

// <div className='App'>
// <Auth
// updateToken={this.updateToken}
// updateRole={this.updateRole}
// //  <SignUp />
// />
// <Pets token={this.state.token}/>
// </div>
