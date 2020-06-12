const initialState = {
    _id: 0,
    name: '',
    email: '',
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'UPDATE_USER':
            const newUser = JSON.parse(JSON.stringify(state))
            newUser._id = action.payload._id;
            newUser.name = action.payload.name;
            newUser.email = action.payload.email;
            return newUser
        case 'LOGOUT_USER':
            return initialState;
        default:
            return state;
    }
}

export default userReducer;