const initialState = {
    stocks:[]
}

const stockReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'STOCK_UPDATE':
            const newStocks = JSON.parse(JSON.stringify(state))
            newStocks.stocks.push(action.payload); 
            return newStocks
            break;
        case 'REMOVE_STOCK':
            const removedStock = JSON.parse(JSON.stringify(state));
            removedStock.stocks = removedStock.stocks.filter(symbol => symbol !== action.payload);
            return removedStock;
            break;
        default:
            return state;
            break;

    }
}

export default stockReducer;