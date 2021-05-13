import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import PetEdit from './PetEdit';
import PetDelete from './PetDelete';
import AppointmentCreate from './AppointmentCreate';
// import AppointmentEdit from './AppointmentEdit';
import AppointmentDelete from './AppointmentDelete';
import {
  CardDeck,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
  CardImg,
  Alert,
  Button,
  Modal,
  CardColumns,
  Row
} from 'reactstrap';
import { Container } from '@material-ui/core';

export interface PetReadProps {
  token: string;
}

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

export interface PetReadState {
  pets: any[];
  name: string;
  id: number;
  type: string;
  breed: string;
  sex: string;
  age: number | string;
  size: string;
  hairlength: string;
  vaccinated: boolean | string;
  editOn: boolean;
  currentPet: PetType;
}

class PetRead extends React.Component<PetReadProps, PetReadState> {
  constructor(props: PetReadProps) {
    super(props);
    this.state = {
      pets: [],
      id: 0,
      name: '',
      type: '',
      breed: '',
      sex: '',
      age: 0,
      size: '',
      hairlength: '',
      vaccinated: false,
      editOn: false,
      currentPet: {
        id: 0,
        name: '',
        type: '',
        breed: '',
        sex: '',
        age: 0,
        size: '',
        hairlength: '',
        vaccinated: false
      }
    };
  }

  //useEffect is more robust and can do more
  //useEffect(() => {
  // fetchWorkouts();
  //},[]);
  componentDidMount = () => {
    this.fetchPet();
  };

  fetchPet = () => {
    let token: string | null;
    if (this.props.token === '') {
      token = localStorage.getItem('token');
    } else {
      token = this.props.token;
    }

    // Note: token in Authorization is now a LOCAL variable no need
    //for this.props.token
    console.log('Pet Read', token);
    if (token !== null) {
      //  fetch(`${APIURL}/pet/get`, {
      fetch(`http://localhost:5000/pet/get`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
        .then((res) => res.json())
        .then((petData) => {
          this.setState({ pets: petData });
          // console.log(petData);
          // alert('Pet read/get successful!');
        });
    }
  };

  toggleModal = () => {
    this.setState({ editOn: !this.state.editOn });
  };
  // this.setState({editOn:!this.state.editOn});

  renderPets = () => {
    return this.state.pets.map((pet) => {
      return (
        // <p>name{pet.name}</p>
        <Card>
          <CardBody>
            <CardTitle>
              About my {pet.type}, {pet.name}
            </CardTitle>

            {/* <p className='plantSubtitle'>Scientific Name:</p>
          <CardSubtitle className='plantSubtitle'>
            {pet.scientific_name}
          </CardSubtitle> */}
            <hr />
            {/* <KillEditButton
            primary
            onClick={() => {
              deletePlants(plants);
            }}>
            Kill Plant!
          </KillEditButton> */}
            <CardText className='AboutPet'>
              <p style={{ color: 'red' }}>Gender: {pet.sex}</p>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p>Size: {pet.size}</p>
              <p>HairLength: {pet.hairlength}</p>
              {/* <p>Vaccinated: {pet.vaccinated} </p>             */}
            </CardText>
            <Button
              style={{ marginBottom: '10px' }}
              onClick={() => {
                this.setState({ currentPet: pet });
                // props.editPlants(plants);
                this.toggleModal();
              }}
            >
              Update Pet Info
            </Button>
            <PetDelete
              pet={pet.id}
              token={this.props.token}
              fetchPet={this.fetchPet}
              petName={pet.name}
            />
            <br />
          </CardBody>
          <Button
            style={{ backgroundColor: 'lightblue', marginTop: '10px' }}
            onClick={() => {
              this.setState({ currentPet: pet });
              // props.editPlants(plants);
              this.toggleModal();
            }}
          >
            Book Appointment
          </Button>
          {/* <AppointmentCreate
            petName={pet.name}
            pet={pet.id}
            token={this.props.token}
          />
          {/* <AppointmentEdit pet={pet.id} token={this.props.token}/>
          <AppointmentDelete pet={pet.id} token={this.props.token} /> */}{' '}
        </Card>
      );
    });
  };

  render() {
    console.log('THIS PET STATE', this.state.currentPet);
    console.log('THIS STATE editOn', this.state.editOn);
    return (
      <div>
        <Modal isOpen={this.state.editOn} toggle={this.toggleModal}>
          <PetEdit
            // pet={pet.id}
            token={this.props.token}
            pet={this.state.currentPet}
            // petName={this.props.}
            toggleModal={this.toggleModal}
          />
        </Modal>
        <Modal isOpen={this.state.editOn} toggle={this.toggleModal}>
          <AppointmentCreate
            // pet={pet.id}
            token={this.props.token}
            pet={this.state.currentPet}
            // pet={this.props.id}
            // petName={this.props.}
            toggleModal={this.toggleModal}
          />
        </Modal>
        <Container>
          <Row>
            <CardColumns>{this.renderPets()}</CardColumns>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PetRead;
