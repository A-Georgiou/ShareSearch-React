import React from 'react';
import Navigation from '../components/Navigation';
import {Row, Col, Container} from 'reactstrap';
import { connect } from 'react-redux';
import Avatar from '../components/Avatar';

class Profile extends React.Component {
	render(){
	var user = null;
	if(localStorage.getItem("userInformation") !== null){
		user = JSON.parse(localStorage.getItem("userInformation"))
	}
	if(user !== null){
	return(
		<div>
			<Navigation displaySearch={false}/>
			<div className="user-information">
				<Container>
					<Row style={{padding: '1em'}}>
						<Col xs="2" className="avatar-col"><Avatar name={user.name.split(" ").map((n)=>n[0]).join("")} width="5em" height="5em" textSize="3em"/></Col>
						<Col xs="9"><p className="user-name-form"><b><u>{user.name}</u></b></p></Col>
					</Row>
					<Row style={{padding: '1em'}}>
						<Col xs="2"></Col>
						<Col><p><b>Email Address:</b> {user.email}</p></Col>
					</Row>
				</Container>
			</div>
		</div>
		);
	}else{
		return(
			<div>
			<Navigation displaySearch={false}/>
			<div className="user-information">
				<Container>
					<h1>User not logged in.</h1>
				</Container>
			</div>
		</div>
		);}
	}
}


export default Profile;