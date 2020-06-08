import React from 'react';
import Navigation from '../components/Navigation';
import Avatar from '../components/Avatar';

class Profile extends React.Component {
	render(){
		return(
			<div>
				<Navigation/>
				<div className="user-information">
					<Avatar name="AG" width="5em" height="5em" />
					<p>Email Address:</p>
					<p>Contact Number:</p>
				</div>
			</div>
		);
	}
}

export default Profile;