import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';
// Changed age and boolean to avoid the error: Type 'string' is not assignable to type 'number'|'boolean'
type PetCreateState = {
  name : string,
  type : string,
  breed: string,
  sex: string,
  age: number|string,
  size: string,
  hairlength: string,
  vaccinated: boolean|string
}

type AcceptedProps = {
 token: string;

};

export default class PetCreate extends React.Component <AcceptedProps, PetCreateState>{
  
 constructor(props: AcceptedProps) {
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
    }
 }

 handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
   e.preventDefault()
   let token:string | null
   if (this.props.token == '') { 
     token = localStorage.getItem('token') 
   } else {
     token = this.props.token
   }
  
// Note: token in Authorization is now a LOCAL variable no need 
//for this.props.token
console.log("Pet Create", token)
if (token !== null) {
  fetch(`${APIURL}/pet/create`, {
    method: 'Post',
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
    alert('Pet successfully added!');
  });
}
};

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Pet Create</h2>
          <form onSubmit={(e) => this.handleSubmit(e)} noValidate>
            <div className='petName'>
              <label htmlFor='petName'>Pet Name:</label>
              <br></br>
              <input onChange={(e)=> this.setState({name:e.target.value})} type='text' name='petName'/>
            </div>
            <div className='type'>
              <label htmlFor='type'>Pet Type:</label>
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
              <label htmlFor='size'>Pet Size:</label>
              <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-small' name='size' value='extra-small'/> 
              <label htmlFor='size'>extra-small</label>
              <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='small' name='size' value='small'/> 
              <label htmlFor='size'>small</label>
              <input onChange={(e) => this.setState({size:e.target.value})} type='radio'
              id='medium' name='size' value='medium'/> 
              <label htmlFor='size'>medium   </label>
              <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='large' name='size' value='large'/> 
              <label htmlFor='size'>large</label>
              <input onChange={(e) => this.setState({size:e.target.value})} type='radio' id='extra-large' name='size' value='extra-large'/> 
              <label htmlFor='size'>extra-large  </label>
            </div>
            <div className='hairlength'>
              <label htmlFor='hairlength'>Pet Hair Length:</label>
              <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio' id='short' name='hairlength' value='short'/> 
              <label htmlFor='hairlength'>short  </label>
              <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio'
              id='medium' name='hairlength' value='medium'/> 
              <label htmlFor='hairlength'>medium  </label>
              <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio' id='long' name='hairlength' value='long'/> 
              <label htmlFor='hairlength'>long  </label>
              <input onChange={(e) => this.setState({hairlength:e.target.value})} type='radio' id='extra-long' name='hairlength' value='extra-long'/> 
              <label htmlFor='hairlength'>extra-long  </label>
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
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

// console.log("Pet Create", token, this.props.token, localStorage.getItem('token'))