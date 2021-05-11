import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NotesSharp } from '@material-ui/icons';

type AppointmentCreateProps = {
  token: string;
  pet: number;
  petName: string;
};

type AppointmentCreateState = {
  datetime: string;
  note: string;
};

export default class AppointmentCreate extends React.Component<
  AppointmentCreateProps,
  AppointmentCreateState
> {
  constructor(props: AppointmentCreateProps) {
    super(props);
    this.state = {
      datetime: '',
      note: ''
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // this.props.toggleModal()
    let token: string | null;
    if (this.props.token === '') {
      token = localStorage.getItem('token');
    } else {
      token = this.props.token;
    }

    // Note: token in Authorization is now a LOCAL variable no need
    //for this.props.token
    console.log('Appointment Edit', token);
    if (token !== null) {
      console.log('datetime and note', this.state.datetime, this.state.note);
      fetch(`${APIURL}/appointment/create/${this.props.pet}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify({
          datetime: this.state.datetime,
          note: this.state.note
        })
      })
        .then((res) => res.json())
        .then((apptData) => {
          console.log('APPOINTMENT DATA', apptData);
          alert('Appointment successfully created!');
        });
    }
  };

  render() {
    return (
      <>
        <h3>Create an Appointment</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)} noValidate>
          <FormGroup>
            <Label htmlFor='grooming'>Booking Date Time</Label>
            <Input
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.setState({ datetime: e.currentTarget.value })
              }
              id='grooming'
              type='datetime-local'
              name='groomingdate'
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor='note'>Notes About Appointment</Label>
            <Input
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.setState({ note: e.currentTarget.value })
              }
            />
          </FormGroup>
          <Button type='submit'>Create</Button>
        </Form>
      </>
      // <div></div>
    );
  }
}
