import React from 'react';
import {
  Collapse,
<<<<<<< HEAD
=======
  Button,
>>>>>>> 1aaa0664f0db606bb5195bf47d07044328fdfed6
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
=======
>>>>>>> 1aaa0664f0db606bb5195bf47d07044328fdfed6

export interface SitebarProps {
  token: string;
  clickLogout: Function;
}

<<<<<<< HEAD
const Sitebar: React.SFC<SitebarProps> = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: 'grey' }}>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <Collapse navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
=======
const Sitebar: React.SFC<SitebarProps> = (props) => {
  return (
    <div>
      <Navbar style={{ backgroundColor: 'grey' }}>
        <NavbarBrand style={{ color: 'white' }} href='/'>
          Happy Tales Mobile Grooming
        </NavbarBrand>
        <Nav className='mr-auto' navbar>
          {/* <NavItem>
            <NavLink href='/components/'>Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://github.com/reactstrap/reactstrap'>
              GitHub
            </NavLink>
          </NavItem> */}
        </Nav>
        <NavbarText>
          <Button onClick={() => props.clickLogout()}>Logout</Button>
        </NavbarText>
>>>>>>> 1aaa0664f0db606bb5195bf47d07044328fdfed6
      </Navbar>
    </div>
  );
};

export default Sitebar;
