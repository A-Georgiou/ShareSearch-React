import React, { useState } from 'react';
import Avatar from './Avatar';

import VerifyUserDetails from '../components/VerifyUserDetails';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Form,
    FormGroup,
    Button,
    Input,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
  } from 'reactstrap';

import { connect } from 'react-redux';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    var currUser = '';
    if(props.user.name != ''){
        currUser = props.user.name.split(" ").map((n)=>n[0]).join("")
    }
	return(
			<Navbar dark expand="md" className="navigation-bar">
                <NavbarBrand href="/" className="d-flex justify-content-start">
                    <h3 className="brand-text"><b>ShareSearch</b></h3>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end">
                    <Nav navbar>
                        {props.displaySearch ? 
                        (<Form inline>
                            <FormGroup>
                                <Input type="text" placeholder="Search Stock" className="mr-sm-2 p-3" id="search-bar"/>
                                <Button variant="outline-success" className="mr-sm-3"><b>Search</b></Button>
                            </FormGroup>
                        </Form>) : 
                        (<div></div>)}
                        

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                            <Avatar name={currUser ? currUser : ''}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag="a" href="/">
                                    Home
                                </DropdownItem>
                                    <DropdownItem tag="a" href="/profile_page">
                                        Profile Page
                                    </DropdownItem>
                                    <DropdownItem tag="a" href="/my_stocks">
                                        My Stocks
                                    </DropdownItem>
                                <DropdownItem divider />
                                {props.user._id === 0 ? (
                                    <DropdownItem tag="a" href="/account_page">
                                        Log in
                                    </DropdownItem>
                                ) : (
                                    <DropdownItem tag="a" href="/account_page">
                                        Logout
                                    </DropdownItem>
                                )}
                                
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <VerifyUserDetails />
			</Navbar>      
	);
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Navigation);