import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import { ModalBody } from 'reactstrap'; 

type PetType = {
  id: number,
  name : string,
  type : string,
  breed: string,
  sex: string,
  age: number|string,
  size: string,
  hairlength: string,
  vaccinated: boolean|string,
}

type PetEditState = {
  id: number,
  name : string,
  type : string,
  breed: string,
  sex: string,
  age: number|string,
  size: string,
  hairlength: string,
  vaccinated: boolean|string, 
}
 
type PetEditProps = {
  token:string;
  pet: PetType;
  toggleModal: Function;
}
 
export default class PetEdit extends React.Component<PetEditProps, PetEditState> {
  constructor(props: PetEditProps) {
    super(props);
    this.state = {
      id: this.props.pet.id,
      name : this.props.pet.name,
      type : this.props.pet.type,
      breed: this.props.pet.breed,
      sex: this.props.pet.sex,
      age: this.props.pet.age,
      size: this.props.pet.size,
      hairlength: this.props.pet.hairlength,
      vaccinated: this.props.pet.vaccinated,
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => { 
    e.preventDefault()
    this.props.toggleModal()
    let token:string | null
    if (this.props.token === '') { 
      token = localStorage.getItem('token') 
    } else {
      token = this.props.token
    }
   
 // Note: token in Authorization is now a LOCAL variable no need 
 //for this.props.token
 console.log("Pet Edit", token)
 if (token !== null) {
   console.log("state id", this.props.pet.id,this.state.vaccinated)
   fetch(`${APIURL}/pet/update/${this.props.pet.id}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json', 
       Authorization: token     
     },
     body: JSON.stringify({
       name: this.state.name,
       type: this.state.type,
       breed: this.state.breed,
       sex: this.state.sex,
       age: this.state.age,
       size: this.state.size,
       hairlength: this.state.hairlength,
       vaccinated: this.state.vaccinated
     }),
   })
   .then((res) => res.json())
   .then((logData) => {
     console.log("LOG PET DATA", logData);
     alert('Pet successfully edited!');
   });
 }
 };

 render() {
  return (
    <ModalBody className='wrapper'>
      <div className='form-wrapper'>
        <h2>Edit Pet Attributes</h2>
        <form onSubmit={(e) => this.handleSubmit(e)} noValidate>
          <div className='age'>
            <label htmlFor='age'>Pet Age:</label>
            <br></br>
            <input onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({age:e.currentTarget.value})} type='number' name='age'/>
          </div>
          <div className='size'>
            <label htmlFor='size'>Size:</label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-small' name='size' value='extra-small'/> 
            <label htmlFor='size'>extra-small</label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='small' name='size' value='small'/> 
            <label htmlFor='size'>small</label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio'
            id='medium' name='size' value='medium'/> 
            <label htmlFor='size'>medium</label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='large' name='size' value='large'/> 
            <label htmlFor='size'>large</label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-large' name='size' value='extra-large'/> 
            <label htmlFor='size'>extra-large</label>
            {/* <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-large' name='size' value='extra-large'/> 
            <label htmlFor='size'>extra-large</label> */}
          </div>
          <div className='hairlength'>
            <label htmlFor='hairlength'>Hair Length:</label>
            <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio' id='short' name='hairlength' value='short'/> 
            <label htmlFor='hairlength'>short</label>
            <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio'
            id='medium' name='hairlength' value='medium'/> 
            <label htmlFor='hairlength'>medium</label>
            <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio' id='long' name='hairlength' value='long'/> 
            <label htmlFor='hairlength'>long</label>
            <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio' id='extra-long' name='hairlength' value='extra-long'/> 
            <label htmlFor='hairlength'>extra-long</label>
            <br></br>
          </div>
          <div className='vaccinated'>
            <label htmlFor='vaccinated'>Vaccinated?</label>
            <input onChange={(e) => this.setState({vaccinated:e.target.value})} type='radio' id='false' 
            name='vaccinated' value='false'/> 
            <label htmlFor='vaccinated'>No</label>
            <input onChange={(e) => this.setState({vaccinated:e.target.value})} type='radio' id='true' name='vaccinated' value='true'/> 
            <label htmlFor='vaccinated'>Yes</label>
          </div>
          <p>Pet MUST be vaccinated to receive service!</p>
          <div className='submit'>
            <button type='submit'>Edit</button>
          </div>
        </form>
        <div className='cancel'>
            <button onClick={() => this.props.toggleModal()}>Cancel</button>
          </div>
      </div>
    </ModalBody>
  );
};
}
 
