import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import { Button } from 'reactstrap';

export interface AppointmentDeleteProps {
  token: string;
  pet: number;
}

export interface AppointmentDeleteState {}

class AppointmentDelete extends React.Component<
  AppointmentDeleteProps,
  AppointmentDeleteState
> {
  constructor(props: AppointmentDeleteProps) {
    super(props);
  }
  deleteAppointment = () => {
    let token: string | null;
    if (this.props.token === '') {
      token = localStorage.getItem('token');
    } else {
      token = this.props.token;
    }
    if (token !== null) {
      //console.log("DELETE", this.props.appointment.id)
      //  fetch(`${APIURL}/appointment/delete/${this.props.pet} ${this.req.userId}`), {
      fetch(`${APIURL}/appointment/delete/${this.props.pet}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: token
        })
      })
        .then((res) => res.json())
        .then((apptData) => {
          console.log('APPOINTMENT DATA', apptData);
          alert('Appointment successfully edited!');
        });
    }
  };

  render() {
    return (
      <div>
        <Button
          color='danger'
          style={{ marginTop: '10px' }}
          onClick={this.deleteAppointment}
        >
          Delete Appointment
        </Button>
      </div>
    );
  }
}

export default AppointmentDelete;
