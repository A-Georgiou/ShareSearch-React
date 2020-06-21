import React from 'react';
import Navigation from '../components/Navigation';
import WatchList from '../components/WatchList';
import WatchListInformation from '../components/WatchListInformation';

class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedFavourite: null
		};
		this.setSelectedFavourite = this.setSelectedFavourite.bind(this);
	}

	setSelectedFavourite(selectedFav){
		this.setState({selectedFavourite: selectedFav});
	}

	render(){
		return(
			<div>
				<Navigation/>
				<div className="stock-container">
					<WatchList setSelectedFavourite={this.setSelectedFavourite} getSelectedFavourite={this.state.selectedFavourite}/>
					<WatchListInformation getSelectedFavourite={this.state.selectedFavourite}/>
				</div>
			</div>
		);
	}
}

export default Profile;