import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
import { ModalBody } from 'reactstrap'; 

type PetType = {
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
   fetch(`${APIURL}/pet/update/:id`, {
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
     console.log(logData);
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
          <div className='petAge'>
            <label htmlFor='petAge'>Pet Age:</label>
            <br></br>
            <input onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({age:e.currentTarget.value})} type='number' name='petAge'/>
          </div>
          <div className='size'>
            <label htmlFor='size'>Pet Size:  </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-small' name='petSize' value='extra-small'/> 
            <label htmlFor='petSize'>extra-small   </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='small' name='petSize' value='small'/> 
            <label htmlFor='petSize'>small   </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio'
            id='medium' name='petSize' value='medium'/> 
            <label htmlFor='petSize'>medium   </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='large' name='petSize' value='large'/> 
            <label htmlFor='petSize'>large </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-large' name='petSize' value='extra-large'/> 
            <label htmlFor='petSize'>extra-large  </label>
          </div>
          <div className='hairlength'>
            <label htmlFor='hairlength'>Pet Hair Length:  </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='short' name='petHairLength' value='short'/> 
            <label htmlFor='petHairLength'>short  </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio'
            id='medium' name='petHairLength' value='medium'/> 
            <label htmlFor='petHairLength'>medium  </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='long' name='petHairLength' value='long'/> 
            <label htmlFor='petHairLength'>long  </label>
            <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-long' name='petHairLength' value='extra-long'/> 
            <label htmlFor='petHairLength'>extra-long  </label>
            <br></br>
          </div>
          <div className='vaccinated'>
            <label htmlFor='vaccinated'>Is Pet Vaccinated?  </label>
            <input onChange={(e) => this.setState({vaccinated:e.target.value})} type='radio' id='false' name='vaccinated' value='false' defaultChecked/> 
            <label htmlFor='vaccinated'>No   </label>
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
 
