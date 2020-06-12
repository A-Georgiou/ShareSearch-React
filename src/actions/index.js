export const updateStock = (payload) => {
    return{
        type: 'STOCK_UPDATE',
        payload,
    }
}

export const updateUser = (payload) => {
    return{
        type: 'UPDATE_USER',
        payload,
    }
}

export const logoutUser = () => {
    return{
        type: 'LOGOUT_USER'
    }
}