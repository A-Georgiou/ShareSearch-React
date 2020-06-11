import React from 'react';
import Navigation from '../components/Navigation';
import {Row, Col, Container} from 'reactstrap';

class Profile extends React.Component {
	render(){
	return(
		<div>
			<Navigation displaySearch={false}/>
			<div className="user-information">
				<Container>
					<Row style={{padding: '1em'}}>
						<Col xs="2" className="avatar-col"></Col>
						<Col xs="9"><p className="user-name-form"><b><u>A</u></b></p></Col>
					</Row>
					<Row style={{padding: '1em'}}>
						<Col xs="2"></Col>
						<Col><p><b>Email Address:</b> a</p></Col>
					</Row>
				</Container>
			</div>
		</div>
		);
	}
}
//<Avatar name={user.nickname.substring(0,2).toUpperCase()} width="5em" height="5em" textSize="3em"/>
export default Profile;