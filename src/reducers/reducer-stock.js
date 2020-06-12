const initialState = {
    stocks:[
{
    _id: 0,
    favourite: false,
    name: 'AAPL',
    starRating: 3,
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    stockData: [65, 59, 80, 81, 56, 55, 40, 10, 10, 10],
    googleData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
},
{
    _id: 1,
    favourite: false,
    name: 'ABCD',
    starRating: 2,
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    stockData: [65, 59, 80, 81, 56, 55, 40, 10, 10, 10],
    googleData: [10, 20, 40, 35, 33, 45, 39, 30, 10, 10]
},
{
    _id: 2,
    favourite: true,
    name: 'AAPL',
    starRating: 5,
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    stockData: [65, 59, 80, 81, 56, 55, 40, 10, 10, 10],
    googleData: [60, 50, 75, 76, 45, 45, 39, 30, 10, 10]
}
]}

const stockReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'STOCK_UPDATE':
            const newStocks = JSON.parse(JSON.stringify(state))
            var withoutStock = {}
            for(var i = 0; i < newStocks.stocks.length; i++){
                if(newStocks.stocks[i]._id === action.payload._id){
                    newStocks.stocks[i].favourite = !newStocks.stocks[i].favourite;
                    var withoutStock = newStocks.stocks.filter(stock => stock._id !== action.payload._id)
                    withoutStock.push(newStocks.stocks[i])
                }
            }

            newStocks.stocks = withoutStock; 

            return newStocks
        default:
            return state
    }
}

export default stockReducer;