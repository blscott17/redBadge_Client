import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';

type AppointmentEditProps = {
  token:string;
  pet: number;
  
}
 
type AppointmentEditState = {
  id: number,
  datetime: string,
  note: string,
}
 
 export default class AppointmentEdit extends React.Component<AppointmentEditProps, AppointmentEditState> {
  constructor(props: AppointmentEditProps) {
    super(props);
    // this.state = { }
      // id: this.props.appointment.id,
      // datetime : this.props.appointment.datetime,
      // // note : this.props.appointment.note,
      // };
  }

  handleSubmit = (e: React.SyntheticEvent) => { 
    e.preventDefault()
    // this.props.toggleModal()
    let token:string | null
    if (this.props.token === '') { 
      token = localStorage.getItem('token') 
    } else {
      token = this.props.token
    }
   
 // Note: token in Authorization is now a LOCAL variable no need 
 //for this.props.token
 console.log("Appointment Edit", token)
 if (token !== null) {
  //  console.log("appointment id", this.props.appointment.id,this.state.note)
   fetch(`${APIURL}/appointment/update/${this.props.pet}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json', 
       Authorization: token     
     },
     body: JSON.stringify({
       datetime: this.state.datetime,
       note: this.state.note,
     }),
   })
   .then((res) => res.json())
   .then((apptData) => {
     console.log("APPOINTMENT DATA", apptData);
     alert('Appointment successfully edited!');
   });
 }
 };
  render() { 
    return ( 
      <div></div>
     );
  }
}
 
 