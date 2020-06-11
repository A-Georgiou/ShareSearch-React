import React from 'react';
import Navigation from '../components/Navigation';
import WatchList from '../components/WatchList';
class Profile extends React.Component {
	render(){
		return(
			<div>
				<Navigation/>
				<WatchList/>
			</div>
		);
	}
}

export default Profile;