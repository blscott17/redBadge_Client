import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';

export interface AppointmentDeleteProps {
  
}
 
export interface AppointmentDeleteState {
  
}
 
class AppointmentDelete extends React.Component<AppointmentDeleteProps, AppointmentDeleteState> {
  constructor(props: AppointmentDeleteProps) {
    super(props);
    this.state = {};
  }
  render() { 
    return (<div></div>);
  }
}
 
export default AppointmentDelete;