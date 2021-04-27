import React from 'react';
import './style.css';

interface SignUpProps {
  name?: any;
  value?: any;
}
interface SignUpState {
  username : string,
  password : string,
  firstname: string,
  lastname: string,
  email: string,
  phone: string
  errors : {
    username :  string,
    firstname: string,
    lastname: string,
    password : string,
    email : string,
    phone: string
  }
}

const ERegex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
const PRegex =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export class SignUp extends React.Component <SignUpProps, SignUpState>{
  
  handleChange = (event : any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
         errors.username = value.length < 5 ? 'Username must be 5 characters long!': '';
         break;      
      case 'password':
         errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
         break;
      case 'firstname':
          errors.firstname = value.length < 1 ? 'First Name must be entered' : '';
          break;
      case 'lastname':
            errors.lastname = value.length < 1 ? 'Last Name must be entered' : '';
            break;    
      case 'email':
         errors.email = ERegex.test(value)? '': 'Email is not valid!';
         break;
      case 'phone':
         errors.phone = PRegex.test(value)? '' : 'Phone is not valid!';
         break;
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

  constructor(props: SignUpProps) {
    super(props);
    const initialState = {
      username : '',
      password : '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      errors : {
        username :  '',
        password : '',
        firstname: '',
        lastname: '',
        email : '',
        phone: ''
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
            <div className='fullName'>
              <label htmlFor='fullName'>User Name</label>
              <br></br>
              <input type='text' name='fullName' onChange={this.handleChange} />
              {errors.username.length > 0 &&  <span style={{color: "red"}}>{errors.username}</span>}
            </div>
            <div className='password'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                onChange={this.handleChange} />
                {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
            </div>
            <div className='firstName'>
              <label htmlFor='firstName'>First Name</label>
              <br></br>
              <input type='text' name='firstName' onChange={this.handleChange} />
              {errors.firstname.length > 0 &&  <span style={{color: "red"}}>{errors.firstname}</span>}
            </div>
            <div className='lastName'>
              <label htmlFor='lastName'>Last Name</label>
              <br></br>
              <input type='text' name='lastName' onChange={this.handleChange} />
              {errors.lastname.length > 0 &&  <span style={{color: "red"}}>{errors.lastname}</span>}
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' onChange={this.handleChange} />
              {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}

            </div>
            <div className='phone'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='tel'
                name='phone'
                onChange={this.handleChange} />
                {errors.phone.length > 0 &&  <span style={{color: "red"}}>{errors.phone}</span>}
            </div>
            <div className='submit'>
              <button>Register Me</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// export default SignUp;
