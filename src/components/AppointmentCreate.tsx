import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import { ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';

type PetType = {
  id: number;
  name: string;
  type: string;
  breed: string;
  sex: string;
  age: number | string;
  size: string;
  hairlength: string;
  vaccinated: boolean | string;
};

type AppointmentCreateState = {
  id: number;
  name: string;
  type: string;
  breed: string;
  sex: string;
  age: number | string;
  size: string;
  hairlength: string;
  vaccinated: boolean | string;
  datetime: string;
  note: string;
};

type AppointmentCreateProps = {
  token: string;
  // pet: number;
  pet: PetType;
  // petName: string;
  toggleModal: Function;
};

export default class AppointmentCreate extends React.Component<
  AppointmentCreateProps,
  AppointmentCreateState
> {
  constructor(props: AppointmentCreateProps) {
    super(props);
    this.state = {
      id: this.props.pet.id,
      name: this.props.pet.name,
      type: this.props.pet.type,
      breed: this.props.pet.breed,
      sex: this.props.pet.sex,
      age: this.props.pet.age,
      size: this.props.pet.size,
      hairlength: this.props.pet.hairlength,
      vaccinated: this.props.pet.vaccinated,
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
      fetch(`${APIURL}/appointment/create/${this.props.pet.id}`, {
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
      // <>
      <ModalBody className='wrapper'>
        <div className='form-wrapper'>
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
        </div>
      </ModalBody>
      // </>
    );
  }
}
