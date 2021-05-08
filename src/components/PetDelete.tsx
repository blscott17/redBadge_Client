import React, { Component } from 'react';
import './style.css';
import APIURL from '../helpers/environment';

export interface PetDeleteProps {
  
}
 
export interface PetDeleteState {
  
}
 
class PetDelete extends React.Component<PetDeleteProps, PetDeleteState> {
  constructor(props: PetDeleteProps) {
    super(props);
    this.state = {};
  }
  render() { 
    return ( <div></div> );
  }
}
 
export default PetDelete;