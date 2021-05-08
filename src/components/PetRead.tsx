import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';

export interface PetReadProps {
  
}
 
export interface PetReadState {
  
}
 
class PetRead extends React.Component<PetReadProps, PetReadState> {
  constructor(props: PetReadProps) {
    super(props);
    this.state = {};
  }
  render() { 
    return ( <div>
      
    </div> );
  }
}
 
export default PetRead;