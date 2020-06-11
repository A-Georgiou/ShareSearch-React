import React from 'react';
import Navigation from '../components/Navigation';
import AccountForm from '../components/AccountForm';

class Profile extends React.Component {
	render(){
	    return(
            <React.Fragment>
			    <Navigation/>
                <AccountForm/>
            </React.Fragment>
		);
	}
}


export default Profile;