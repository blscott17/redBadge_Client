//import * as React from 'react';
import React, { Component } from 'react';
import Auth from './components/Auth/index';
import Pets from './components/Pets/PetCreate';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

type sessionState = {
  sessionToken: string | null;
  isAdmin: string;
  firstname: string;
}

export default class App extends Component <{}, sessionState> {
  constructor (props:sessionState){
    super(props);

    this.state = {
      sessionToken: '',
      isAdmin: 'false',
      firstname: ''
    };
  }

  componentDidUpdate(){
    console.log('component updated')
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({sessionToken: newToken});
    console.log(newToken);
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({sessionToken:''})
  }

  updateRole= (newRole: string)=> {
    localStorage.setItem('role', newRole);
    this.setState({isAdmin:newRole});
    console.log(newRole);
  }

  render() {
    return (
      <div className='App'>
      <Auth
      updateToken={this.updateToken}
      updateRole={this.updateRole}  
      //  <SignUp />
      />
      <Pets />
      </div>
    );
  }
}
