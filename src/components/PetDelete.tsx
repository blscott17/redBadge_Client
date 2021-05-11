import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import { Table, Button, Alert } from 'reactstrap';

type PetDeleteProps = {
  token: string;
  pet: number;
  fetchPet: Function;
  petName: string;
};

class PetDelete extends React.Component<PetDeleteProps> {
  constructor(props: PetDeleteProps) {
    super(props);
    this.state = {};
  }

  deletePet = () => {
    let token: string | null;
    if (this.props.token === '') {
      token = localStorage.getItem('token');
    } else {
      token = this.props.token;
    }

    // Note: token in Authorization is now a LOCAL variable no need
    //for this.props.token
    console.log('Pet Delete', token);
    if (token !== null) {
      console.log('DELETE', this.props.pet);
      fetch(`${APIURL}/pet/delete/${this.props.pet}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: token
        })
      })
        // .then(() => this.props.fetchPlants())
        .then((petData) => {
          // Alert('Pet deleted!')
          this.props.fetchPet();
        });
    }
  };
  render() {
    console.log(this.props.pet);
    return (
      <div>
        <Button
          color='danger'
          onClick={() => {
            this.deletePet();
          }}
        >
          Delete {this.props.petName}
        </Button>
      </div>
    );
  }
}

export default PetDelete;
