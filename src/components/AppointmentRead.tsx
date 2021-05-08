import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';

export interface AppointmentReadProps {
  
}
 
export interface AppointmentReadState {
  
}
 
class AppointmentRead extends React.Component<AppointmentReadProps, AppointmentReadState> {
  constructor(props: AppointmentReadProps) {
    super(props);
    this.state = { };
  }
  render() { 
    return ( <div></div> );
  }
}
 
export default AppointmentRead;