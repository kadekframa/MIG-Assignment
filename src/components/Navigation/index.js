import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import LogoMIG from '../../assets/images/logo.png';
// import { loginUser } from '../../utils/CustomerHandler';
import './navigation.css'

const Navigation = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const activateToken = () => {
    // loginUser();
  }
  
  return (
    <header>
      <Navbar color="white" expand="md" light className='shadow-sm px-0 px-lg-4'>
        <NavbarBrand href="/" className='d-flex align-items-center'>
          <img className="img-fluid" src={LogoMIG} alt="Logo Mitramas Infosys Global" width='100px'  />
        </NavbarBrand>

        <NavbarToggler onClick={() => { setNavbarOpen(!isNavbarOpen) }} />

        <Collapse isOpen={isNavbarOpen} className='item-navigation-wrapper' navbar>
          <Nav className="mas-auto" navbar>
            <NavItem className='ms-lg-4'>
              <NavLink href="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav className='ms-lg-4'>
              <DropdownToggle caret nav>Category</DropdownToggle>
              <DropdownMenu light end>
                <DropdownItem>
                  <NavLink href="/customers">
                    List Customers
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/customers-data">
                    Data Customers
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ms-auto user-profile-setting me-2" navbar>
              <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>Kadek Frama</DropdownToggle>

                  <DropdownMenu light end>
                  <DropdownItem>
                      <NavLink>My Profile</NavLink>
                  </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Collapse>

      </Navbar>
    </header>
  )
}

export default Navigation;
