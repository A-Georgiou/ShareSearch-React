import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import axios from 'axios';

const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [emailFeedback, setEmailFeedback] = useState('');

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
        axios.post('http://localhost:3000/api/user/register/validateEmail', {email: e.target.value})
        .then(res => {
            setEmailFeedback(res.data.responseText);
            setValidEmail(res.data.valid);
        })
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
        const passwordRegex = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$');
        if(e.target.value.length == 0){
            setValidPassword('');
        }else if(e.target.value.length < 6 || !passwordRegex.test(e.target.value)){
            setValidPassword('invalid');
        }else{
            setValidPassword('valid');
        }
    }

    function handleSubmit(){
        if(email != '' && password != '' && name != ''){
            axios.post('http://localhost:3000/api/user/register', {name: name, email: email, password: password})
                .then(res => {
                    
                })
        }
    }

	return(
		<Form style={{width:'40em', margin: 'auto', marginTop: '2em', border:'.4em solid rgba(55, 55, 55, 0.7)', borderRadius:'10px', padding: '2em 2em .6em 2em'}}>
            <h4>Register:</h4>
            <hr/>
            <FormGroup>
                <Label for="name">Full Name:</Label>
                <Input placeholder="Enter Full Name" value={name} onChange={handleNameChange}/>
                <FormFeedback></FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input placeholder="Enter Email Address" value={email} onChange={handleEmailChange} valid={validEmail === 'valid' ? true : false} invalid={validEmail === 'invalid' ? true : false}/>
                <FormFeedback>{emailFeedback}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password:</Label>
                <Input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} valid={validPassword === 'valid' ? true : false} invalid={validPassword === 'invalid' ? true : false}/>
                <FormFeedback></FormFeedback>
                <FormText>Min Character Length: 8 / Must include capital letter and number.</FormText>
            </FormGroup>
            <div style={{margin:'auto', textAlign:'center'}}>
                <Button style={{padding:'.5em', marginTop:'.6em'}} onClick={() => handleSubmit()}>Register Account</Button>
                <p style={{color:'blue', marginTop:'.2em', cursor:'pointer'}} onClick={() => {props.handleLogin(true)}}>Already have an account?</p>
            </div>
        </Form>
    );
}

export default Register;