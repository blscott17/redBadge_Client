import React from 'react';
import {
  Collapse,
  Button,
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

export interface SitebarProps {
  token: string;
  clickLogout: Function;
}

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
      </Navbar>
    </div>
  );
};

export default Sitebar;
