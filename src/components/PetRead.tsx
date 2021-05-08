import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import PetEdit from './PetEdit';
import PetDelete from './PetDelete';

export interface PetReadProps {
  token: string;
}
 
export interface PetReadState {
  // pet[];
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
      //pet: []
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
  
//  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
//   e.preventDefault()
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
   console.log(petData);
   alert('Pet read/get successful!');
 });
}
};

// editPet = (pet)
// toggleModal = () => {
//   this.setState(!updateActive);
// }

  render() { 
    return ( 
    <div> 
     
    </div>);
  };
}
 
export default PetRead;