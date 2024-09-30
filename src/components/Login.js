import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import axios from 'axios';
import VerifyUserDetails from './VerifyUserDetails';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [validAccount, setValidAccount] = useState(true);

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleLogin(){
        if(email != '' && password != ''){
            /*
            axios.post('https://167.172.57.114:3000/api/user/login', {email: email, password: password}, {withCredentials: true})
                .then(res => {
                    setValidAccount(true);
                    setLoggedIn(true);
                }).catch(err => {
                    setValidAccount(false);
                })
            */
        }
    }
	return(
		<Form style={{width:'40em', margin: 'auto', marginTop: '2em', border:'.4em solid rgba(55, 55, 55, 0.7)', borderRadius:'10px', padding: '2em 2em .6em 2em'}}>
            <h4>Login:</h4>
            <hr/>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input placeholder="Email Address" value={email} onChange={handleEmailChange} invalid={validAccount ? false : true}/>
                <FormFeedback>Email or Password Incorrect.</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password:</Label>
                <Input placeholder="Password" type="password" value={password} onChange={handlePasswordChange}/>
                <FormFeedback></FormFeedback>
            </FormGroup>
            <div style={{margin:'auto', textAlign:'center'}}>
                <Button style={{padding:'.5em', marginTop:'.6em'}} onClick={() => handleLogin()}>{!loggedIn ? 'Log in' : 
                (<React.Fragment>
                    <h6 style={{margin:'auto', textAlign:'center', paddingBottom: '.5em'}}>Successfully Logged In.</h6>
                    <VerifyUserDetails />
                    <meta http-equiv = "refresh" content = "1; url = /" />
                </React.Fragment>)}
                </Button>
                <p style={{color:'blue', marginTop:'.2em', cursor:'pointer'}} onClick={()=>{props.handleLogin(false)}}>Not have an account?</p>
            </div>
        </Form>
    );
}

export default Login;
