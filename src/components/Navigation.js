import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStock } from '../actions/index';

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
import axios from 'axios';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);
    const [searchBar, setSearchBar] = useState("");

    const toggle = () => setIsOpen(!isOpen);
    var currUser = '';

    if(typeof localStorage !== "undefined"){
        if(localStorage.getItem("userInformation") !== null){
            currUser = JSON.parse(localStorage.getItem("userInformation")).name.split(" ").map((n)=>n[0]).join("");
        }
    }

    const logoutUser = () => {
        if(typeof localStorage !== "undefined"){
            /*
            axios.post('http://localhost:3000/api/user/logout', {}, {withCredentials: true})
                .then(res => {
                    localStorage.clear();
                    setLoggedIn(false);
                }).catch(err=>{console.log('cannot log user out')})
            */
        }     
    }

    const handleChange = (e) => {
        setSearchBar(e.target.value);
    }

    const handleSubmit = async (e) => {
        props.updateStock(searchBar.toUpperCase());
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
                                <Input type="text" placeholder="Search Stock" className="mr-sm-2 p-3" id="search-bar" value={searchBar} onChange={handleChange}/>
                                <Button variant="outline-success" className="mr-sm-3" onClick={handleSubmit}><b>Search</b></Button>
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
                                {currUser !== '' ? (
                                    <React.Fragment>
                                        <DropdownItem tag="a" href="/profile_page">
                                            Profile Page
                                        </DropdownItem>
                                        <DropdownItem tag="a" href="/my_stocks">
                                            My Stocks
                                        </DropdownItem>
                                    </React.Fragment>
                                ) : (
                                    <div></div>
                                )}
                                <DropdownItem divider />
                                {currUser === '' ? (
                                    <DropdownItem tag="a" href="/account_page">
                                        Log in
                                    </DropdownItem>
                                ) : (
                                    <DropdownItem tag="a" href="/" onClick={logoutUser}>
                                        Logout
                                    </DropdownItem>
                                )}
                                
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
			</Navbar>      
	);
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateStock}, dispatch)
}

export default connect(null, mapDispatchToProps)(Navigation);