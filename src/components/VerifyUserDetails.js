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
                localStorage.setItem('userInformation', JSON.stringify(user));
            })
    }, []);

    return(
        <div>
        </div>
    );
}


export default VerifyUserDetails;