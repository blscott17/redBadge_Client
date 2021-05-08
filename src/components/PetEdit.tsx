import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';

// export interface PetEditProps {
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
 
// export interface PetEditState {
type PetEditProps = {
  token:string;
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

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
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
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h2>Pet Edit</h2>
        <form onSubmit={(e) => this.handleSubmit(e)} noValidate>
          <div className='petName'>
            <label htmlFor='petName'>Pet Name:</label>
            <br></br>
            <input onChange={(e)=> this.setState({name:e.target.value})} type='text' name='petName'/>
          </div>
          <div className='type'>
            <label htmlFor='type'>Pet Type:  </label>
            <input onChange={(e) => this.setState({type:e.target.value})} type='radio' id='Dog' name='petType' value='Dog'/> 
            <label htmlFor='petType'>Dog</label>
            <input onChange={(e) => this.setState({type:e.target.value})} type='radio' id='Cat' name='petType' value='Cat'/> 
            <label htmlFor='petType'>Cat</label>
            <br></br>
            {/* <input onChange={(e)=> this.setState({type:e.target.value})} type='text' name='type' /> */}
          </div>
          <div className='petBreed'>
            <label htmlFor='petBreed'>Pet Breed:</label>
            <br></br>
            <input onChange={(e)=> this.setState({breed:e.target.value})} type='text' name='petBreed'/>
          </div>
          <div className='petGender'>
            <label htmlFor='petGender'>Pet Gender:  </label>
            <input onChange={(e) => this.setState({sex:e.target.value})} type='radio' id='Male' name='petGender' value='Male'/> 
            <label htmlFor='petGender'>Male</label>
            <input onChange={(e) => this.setState({sex:e.target.value})} type='radio' id='Female' name='petGender' value='Female'/> 
            <label htmlFor='petGender'>Female</label>
            {/* <br></br>
            <input onChange={(e)=> this.setState({sex:e.target.value})} type='text' name='petSex'/> */}
          </div>
          <div className='petAge'>
            <label htmlFor='petAge'>Pet Age:</label>
            <br></br>
            <input onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({age:e.currentTarget.value})} type='number' name='petAge'/>
          </div>
          <div className='size'>
            <label htmlFor='size'>Pet Size:  </label>
            {/* <p>How big is your pet?</p> */}
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
            {/* <input onChange={(e)=> this.setState({size:e.target.value})} type='text' name='size' /> */}
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
            {/* <br></br>
            <input onChange={(e)=> this.setState({hairlength:e.target.value})}type='text' name='hairlength' /> */}
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
            <button>Edit</button>
          </div>
        </form>
      </div>
    </div>

  );
};
}
 
