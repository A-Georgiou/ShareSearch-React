import React from 'react';
import Navigation from '../components/Navigation';

class Profile extends React.Component {
	render(){
		return(
			<div>
				<Navigation/>
				<div className="my-stocks">
					<p>Email Address:</p>
					<p>Contact Number:</p>
				</div>
			</div>
		);
	}
}

export default Profile;