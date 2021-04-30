import React from 'react';

import '../style.css';

interface PetCreateProps {
  name?: any;
  value?: any;
}
interface PetCreateState {
  name : string,
  type : string,
  breed: string,
  sex: string,
  age: number,
  size: string,
  hairlength: string,
  // vaccinated: boolean
  errors : {
    name :  string,
    type: string,
    size : string,
    hairlength: string
    // vaccinated: string
  }
}


export default class PetCreate extends React.Component <PetCreateProps, PetCreateState>{
  
  handleChange = (event : any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'name':
         errors.name = value.length < 1 ? 'Pet Name must be entered' : '';
         break;      
      case 'type':
         errors.type = value.length < 1 ? 'Pet type must be entered' : '';
         break;
      case 'size':
          errors.size = value.length < 1 ? 'Size must be entered' : '';
          break;
      case 'hairlength':
            errors.hairlength = value.length < 1 ? 'Hair length must be entered' : '';
            break;
      // case 'vaccinated': 
      //   if (errors.vaccinated === false) {'Pet must be vaccinated to be groomed'}; 
      //   break;
      default:
        break;
    }
  this.setState(Object.assign(this.state, { errors,[name]: value }));
  console.log(this.state.errors);
  }

  handleSubmit = (event : any) => {
    event.preventDefault();
    let validity = true;
    Object.values(this.state.errors).forEach(

      (val) => val.length > 0 && (validity = false)
    );
    if(validity === true){
       console.log("Registering can be done");
    }else{
       console.log("You cannot be registered!!!")
    }
 }

  constructor(props: PetCreateProps) {
    super(props);
    const initialState = {
      name : '',
      type : '',
      breed: '',
      sex: '',
      age: 0,
      size: '',
      hairlength: '',
      // vaccinated: {false},
      errors : {
        name :  '',
        type : '',
        breed: '',
        sex : '',
        age: '', 
        size: '',
        hairlength: ''
// vaccinated: {false}
      }
    }
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);

 }

  render() {
    const {errors} = this.state  
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='petName'>
              <label htmlFor='petName'>User Name</label>
              <br></br>
              <input type='text' name='petName' onChange={this.handleChange} />
              {errors.name.length > 0 &&  <span style={{color: "red"}}>{errors.name}</span>}
            </div>
            <div className='type'>
              <label htmlFor='type'>Type</label>
              <input
                type='text'
                name='type'
                onChange={this.handleChange} />
                {errors.type.length > 0 &&  <span style={{color: "red"}}>{errors.type}</span>}
            </div>
            <div className='petBreed'>
              <label htmlFor='petBreed'>Pet</label>
              <br></br>
              <input type='text' name='petBreed' onChange={this.handleChange} />
            </div>
            <div className='petSex'>
              <label htmlFor='petSex'>Pet Sex</label>
              <br></br>
              <input type='text' name='petSex' onChange={this.handleChange} />
            </div>
            <div className='petAge'>
              <label htmlFor='petAge'>Pet Age</label>
              <br></br>
              <input type='number' name='petAge' onChange={this.handleChange} />
            </div>
            <div className='size'>
              <label htmlFor='size'>Size of Pet</label>
              <input
                type='text'
                name='size'
                onChange={this.handleChange} />
                {errors.size.length > 0 &&  <span style={{color: "red"}}>{errors.size}</span>}
            </div>
            <div className='hairlength'>
              <label htmlFor='hairlength'>Type</label>
              <input
                type='text'
                name='hairlength'
                onChange={this.handleChange} />
                {errors.hairlength.length > 0 &&  <span style={{color: "red"}}>{errors.hairlength}</span>}
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}