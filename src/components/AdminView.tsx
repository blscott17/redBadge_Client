import * as React from 'react';
import { Component } from 'react';
import { Button, Table } from 'reactstrap';
import APIURL from '../helpers/environment';

export interface AdminViewProps {
  token: string;
}

export interface AdminViewState {
  appointments: IReadAllResponse[];
  pets: Pet[];
}

class AdminView extends React.Component<AdminViewProps, AdminViewState> {
  constructor(props: AdminViewProps) {
    super(props);
    this.state = { appointments: [], pets: [] };
  }

  fetchAppointments = () => {
    let url = `${APIURL}/user/read`;
    let token: string | null;
    if (this.props.token === '') {
      token = localStorage.getItem('token');
    } else {
      token = this.props.token;
    }

    // Note: token in Authorization is now a LOCAL variable no need
    //for this.props.token
    if (token !== null) {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
        .then((res) => res.json())
        .then((apptData: IReadAllResponse[]) => {
          console.log('Appt Data of Admin', apptData);

          let petArray: Pet[] = [];

          apptData.forEach((data) => petArray.push(...data.pets));

          this.setState({ appointments: apptData, pets: petArray });
        });
    }
  };

  componentDidMount() {
    this.fetchAppointments();
  }
  handleDelete = (petId: number) => {
    // Same as delete on the appointdelete
    // on your final .then() make sure you call the method this.fetchAppointments()
  };

  displayTable = () => {
    let appointmentArray = [];
    // console.log(this.state.pets.filter((pet) => pet.id == 4)[0].name);
    return this.state.appointments.map(
      (data: IReadAllResponse, apptIndex: number) =>
        data.appointments.map((appointment, index) => (
          <tr>
            <th scope='row'>{index + 1}</th>
            <td>
              {appointment.datetime.split('T')[0]}{' '}
              {appointment.datetime.split('T')[1].slice(0, 5)}
            </td>
            <td>{appointment.note}</td>
            <td>
              {data.firstname} {data.lastname}
            </td>
            <td>
              {/* <td>{renderPetName()}</td> */}
              {/* try filter to find the pet I want */}
              {
                this.state.pets.filter((pet) => appointment.petId == pet.id)[0]
                  .name
              }
              {/* {data.pets.map((pet, index) => (
                <>
                  <th scope='row'>{index + 1}</th>
                  <td>{pet.name}</td>
                </>
              ))} */}
            </td>

            <td>
              <Button
                color='danger'
                onClick={() => this.handleDelete(appointment.petId)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
    );
  };

  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Appointment Date-Time</th>
              <th>Appointment Note</th>
              <th>Pet Owner</th>
              <th>Pet Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.length > 0 ? this.displayTable() : null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AdminView;

export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  sex: string;
  age: number;
  size: string;
  hairlength: string;
  vaccinated: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface Appointment {
  id: number;
  datetime: string;
  note: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  petId: number;
}

export interface IReadAllResponse {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  active: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  pets: Pet[];
  appointments: Appointment[];
}
