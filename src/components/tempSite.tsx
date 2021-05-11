import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import AdminView from './AdminView';
import Sitebar from './Sitebar';
// import { StringLiteralLike } from 'typescript';
// import APIURL from'../helpers/environment';
// import Navbar from './Navbar';
import PetCreate from './PetCreate';
import PetRead from './PetRead';
// import AppointmentCreate from './AppointmentCreate';
// make sure you bring in your isAdmin as a prop so you can do your turnary
export interface DashboardProps {
  token: string;
  clickLogout: Function;
}

export interface DashboardState {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  // constructor(props: DashboardProps) {
  //   super(props);
  //   this.state = {   };
  // }

  render() {
    return (
      <div>
        {/* <Navbar token={this.props.token} clickLogout={this.props.clickLogout} /> */}
        <Sitebar
          token={this.props.token}
          clickLogout={this.props.clickLogout}
        />
        {/* !this.props.isAdmin ? show your container : null */}
        {localStorage.getItem('role') === 'Customer' ? (
          <Container>
            <Row>
              <Col md='4'>
                <PetCreate token={this.props.token} />
              </Col>
              <Col md='8'>
                <PetRead token={this.props.token} />
              </Col>
            </Row>
          </Container>
        ) : null}
        {/* this.props.isAdmin ? show admin view : null */}
        {localStorage.getItem('role') === 'Admin' ? (
          <Container>
            <AdminView token={this.props.token} />
          </Container>
        ) : null}
        {/* <PetEdit token={this.props.token}/> */}
        {/* <AppointmentCreate token={this.props.token}/> */}
      </div>
    );
  }
}

export default Dashboard;
