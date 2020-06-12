import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../actions/index';

const VerifyUserDetails = (props) => {
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/user/user_info', {withCredentials: true})
            .then(res =>{
                const user = {_id: res.data._id, name: res.data.name, email: res.data.email};
                props.updateUser(user);
            })
    }, []);

    return(
        <div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyUserDetails);