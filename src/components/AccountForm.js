import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';

const AccountForm = (props) => {
    const [loginForm, setLoginForm] = useState(true);

	return(
		<React.Fragment>
            {loginForm ? <Login handleLogin={setLoginForm}/> : <Register handleLogin={setLoginForm}/>}
        </React.Fragment>
    );
}

export default AccountForm;