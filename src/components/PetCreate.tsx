import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';

type PetCreateState = {
  name : string,
  type : string,
  breed: string,
  sex: string,
  age: number,
  size: string,
  hairlength: string,
  vaccinated: boolean
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

 handleSubmit = () => {
  fetch(`${APIURL}/pets/create`, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json', 
      Authorization: this.props.token     
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
    alert('Plant successfully added!');
  });
};

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Pet Create</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='petName'>
              <label htmlFor='petName'>Pet Name</label>
              <br></br>
              <input type='text' name='petName'/>
            </div>
            <div className='type'>
              <label htmlFor='type'>Type</label>
              <input
                type='text'
                name='type'
              />
            </div>
            <div className='petBreed'>
              <label htmlFor='petBreed'>Pet</label>
              <br></br>
              <input type='text' name='petBreed'/>
            </div>
            <div className='petSex'>
              <label htmlFor='petSex'>Pet Sex</label>
              <br></br>
              <input type='text' name='petSex'/>
            </div>
            <div className='petAge'>
              <label htmlFor='petAge'>Pet Age</label>
              <br></br>
              <input type='number' name='petAge'/>
            </div>
            <div className='size'>
              <label htmlFor='size'>Size of Pet</label>
              <input
                type='text'
                name='size'
              />
            </div>
            <div className='hairlength'>
              <label htmlFor='hairlength'>Length of Hair</label>
              <input
                type='text'
                name='hairlength'
              />
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};