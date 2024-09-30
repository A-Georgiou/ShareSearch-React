import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button, Col, Row } from 'reactstrap';
import axios from 'axios';

const Register = (props) => {
    
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [emailFeedback, setEmailFeedback] = useState('');
    const [registered, setRegistered] = useState(false);

    function handleFirstChange(e){
        setFirstName(e.target.value);
    }

    function handleSurnameChange(e){
        setSurname(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
        /*
        axios.post('http://167.172.57.114:3000/api/user/register/validateEmail', {email: e.target.value}, {withCredentials: true})
        .then(res => {
            setEmailFeedback(res.data.responseText);
            setValidEmail(res.data.valid);
        })
        */
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
        const passwordRegex = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
        if(e.target.value.length === 0){
            setValidPassword('');
        }else if(e.target.value.length < 6 || !passwordRegex.test(e.target.value)){
            setValidPassword('invalid');
        }else{
            setValidPassword('valid');
        }
    }

    function handleSubmit(){
        if(email !== '' && password !== '' && firstName !== '' && surname !== ''){
            var name = firstName + ' ' + surname;
            axios.post('http://167.172.57.114:3000/api/user/register', {name: name, email: email, password: password})
                .then(res => {
                    setRegistered(true);
                })
        }
    }

    const registerForm = (
        <React.Fragment>
            <h4>Register:</h4>
            <hr/>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">First Name:</Label>
                        <Input placeholder="First Name" value={firstName} onChange={handleFirstChange}/>
                        <FormFeedback></FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Last Name:</Label>
                        <Input placeholder="Surname" value={surname} onChange={handleSurnameChange}/>
                        <FormFeedback></FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
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
        </React.Fragment>
    );

    const successfullyRegistered = (
        <React.Fragment>
            <h1 style={{margin:'auto', textAlign:'center', paddingBottom: '.5em'}}>Successfully Registered.</h1>
            <meta http-equiv = "refresh" content = "1; url = /account_page" />
        </React.Fragment>
    );

    return(
        <Form style={{width:'40em', margin: 'auto', marginTop: '2em', border:'.4em solid rgba(55, 55, 55, 0.7)', borderRadius:'10px', padding: '2em 2em .6em 2em'}}>
            {!registered ? registerForm : successfullyRegistered}
        </Form>
    );
}

export default Register;
