import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import PetEdit from './PetEdit';
import PetDelete from './PetDelete';
import {
  CardDeck,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
  CardImg,
  Alert,
} from 'reactstrap';

export interface PetReadProps {
  token: string;
}
 
export interface PetReadState {
  pets: any[],
  name : string,
  type : string,
  breed: string,
  sex: string,
  age: number|string,
  size: string,
  hairlength: string,
  vaccinated: boolean|string
}
 
class PetRead extends React.Component<PetReadProps, PetReadState> {
  constructor(props: PetReadProps) {
    super(props);
    this.state = {
      pets: [],
      name : '',
      type : '',
      breed: '',
      sex: '',
      age: 0,
      size: '',
      hairlength: '',
      vaccinated: false,
    };
  }
  
//  editPets = (pets) => {
//    this.setState(pets);
//  }
//   toggleModal = () => {
//     this.setState.
//     this.setState(!updateActive);
//   };

//useEffect is more robust and can do more
//useEffect(() => {
// fetchWorkouts();
//},[]);
componentDidMount = () => {
  this.fetchPet();
}

fetchPet = () => {
  let token:string | null
  if (this.props.token == '') { 
    token = localStorage.getItem('token') 
  } else {
    token = this.props.token
  }
 
// Note: token in Authorization is now a LOCAL variable no need 
//for this.props.token
console.log("Pet Read", token)
if (token !== null) {
//  fetch(`${APIURL}/pet/get`, {
   fetch(`http://localhost:5000/pet/get`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json', 
     Authorization: token     
   },

 })
 .then((res) => res.json())
 .then((petData) => {
   this.setState({pets:petData})
   console.log(petData);
   alert('Pet read/get successful!');
 });
}
};

// editPet = (pet)
// toggleModal = () => {
//   this.setState(!updateActive);
// }



renderPets = () => {
  return (
    this.state.pets.map(pet => {
      return(
        // <p>name{pet.name}</p>
        <Card id='petCard'>


        <CardBody id='petBody'>
          <CardTitle>About my {pet.type}, {pet.name}</CardTitle>

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
          </KillEditButton>
          <KillEditButton
            onClick={() => {
              // window.location.reload(true)
              props.editPlants(plants);
              props.toggleModal();
            }}>
            Add/Edit Notes
          </KillEditButton> */}
            <CardText className='AboutPet'>
            <p>Gender:     {pet.sex}</p>  
            <p>Breed:      {pet.breed}</p> 
            <p>Age:        {pet.age}</p>
            <p>Size:       {pet.size}</p>
            <p>HairLength: {pet.hairlength}</p>
            <p>Vaccinated: {pet.vaccinated} </p>            
          </CardText>
          <br />
        </CardBody>
      </Card>
      ) 
    } )
  )
}


  render() { 
    console.log("THIS STATE", this.state.pets)
    return ( 
    <div> 
     {this.renderPets()}
    </div>);
  };
}
 
export default PetRead;