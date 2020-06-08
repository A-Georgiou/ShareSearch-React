export const updateStock = (payload) => {
    return{
        type: 'STOCK_UPDATE',
        payload,
    }
}