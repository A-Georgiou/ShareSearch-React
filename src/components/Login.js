import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

const Login = (props) => {

        function handleRegister(){
            
        }

		return(
			<Form style={{width:'40em', margin: 'auto', marginTop: '2em', border:'.4em solid rgba(55, 55, 55, 0.7)', borderRadius:'10px', padding: '2em 2em .6em 2em'}}>
                <h4>Login:</h4>
                <hr/>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input placeholder="Email Address" />
                    <FormFeedback>That email is valid.</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input placeholder="Password" />
                    <FormFeedback></FormFeedback>
                    <FormText>Min Character Length: 8 / Must include capital letter.</FormText>
                </FormGroup>
                <div style={{margin:'auto', textAlign:'center'}}>
                    <Button style={{padding:'.5em', marginTop:'.6em'}}>Log in</Button>
                    <p style={{color:'blue', marginTop:'.2em', cursor:'pointer'}} onClick={()=>{props.handleLogin(false)}}>Not have an account?</p>
                </div>
            </Form>
        );
}

export default Login;