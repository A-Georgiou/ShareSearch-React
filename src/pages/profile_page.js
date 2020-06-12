import React from 'react';
import Navigation from '../components/Navigation';
import {Row, Col, Container} from 'reactstrap';
import { connect } from 'react-redux';
import Avatar from '../components/Avatar';

class Profile extends React.Component {
	render(){
	return(
		<div>
			<Navigation displaySearch={false}/>
			<div className="user-information">
				<Container>
					<Row style={{padding: '1em'}}>
						<Col xs="2" className="avatar-col"><Avatar name={this.props.user.name.split(" ").map((n)=>n[0]).join("")} width="5em" height="5em" textSize="3em"/></Col>
						<Col xs="9"><p className="user-name-form"><b><u>{this.props.user.name}</u></b></p></Col>
					</Row>
					<Row style={{padding: '1em'}}>
						<Col xs="2"></Col>
						<Col><p><b>Email Address:</b> {this.props.user.email}</p></Col>
					</Row>
				</Container>
			</div>
		</div>
		);
	}
}
//

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Profile);