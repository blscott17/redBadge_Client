import React, { Component } from 'react';
// import { StringLiteralLike } from 'typescript';
// import APIURL from'../helpers/environment'; 
import Navbar from './Navbar'
import PetCreate from './PetCreate';
import PetEdit from './PetEdit';
// import AppointmentCreate from './AppointmentCreate';



export interface DashboardProps {
  token: string
  clickLogout: Function
}
 
export interface DashboardState {
  
}
 
class Dashboard extends React.Component<DashboardProps, DashboardState> {
  // constructor(props: DashboardProps) {
  //   super(props);
  //   this.state = {   };
  // }




  render() { 
    return ( <div>
      <Navbar token={this.props.token}
      clickLogout={this.props.clickLogout}/>
      <PetCreate token={this.props.token}/>
      <PetEdit token={this.props.token}/>
    </div> );
  }
}
 
export default Dashboard;