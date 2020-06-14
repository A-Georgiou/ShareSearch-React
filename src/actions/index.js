export const updateStock = (payload) => {
    return{
        type: 'STOCK_UPDATE',
        payload,
    }
}

export const removeStock = (payload) => {
    return{
        type: 'REMOVE_STOCK',
        payload,
    }
}