import React, { useState, useEffect} from 'react';
import StockNewBody from './StockNewBody';
import { TabContent, TabPane, Nav, Row} from 'reactstrap';
import { bindActionCreators } from 'redux';
import NavComp from './NavComp';
import {connect} from 'react-redux';
import { updateStock, removeStock } from '../actions/index';
import { useDrop, useDrag} from 'react-dnd';
import { ItemTypes } from '../utils/items';
import axios from 'axios';
import stock from '../../../sharesearch-stock-service/models/stock';

const StockTabs = (props) => {

    const [stockArray, setStockArray] = useState([]);

    useEffect( () => {
        var newLocal = [];
        if(localStorage.getItem("searched-stocks")){
            const localStorageStocks = JSON.parse(localStorage.getItem("searched-stocks"));
            const propStocks = props.stock.stocks;

            newLocal = localStorageStocks.concat(propStocks.filter((item) => localStorageStocks.indexOf(item) < 0))
        }else{
            newLocal = props.stock.stocks;
        }

        localStorage.setItem("searched-stocks", JSON.stringify(newLocal));

        async function fetchData(){
            const result = JSON.parse(localStorage.getItem("searched-stocks"));
            let stock = [];
            for(var i = 0; i < result.length; i++){
                const apiUrl = `http://localhost:3001/api/getBothData?symbol=${result[i]}`;
                const resultAPI = await axios.get(apiUrl);
                resultAPI.data.historicalStock = resultAPI.data.historicalStock.reverse();
                stock.push(resultAPI.data);
            }
            setStockArray(stock);
        }
        fetchData();
      }, [props.stock.stocks]);

    const [activeTab, setActiveTab] = useState(0);

    async function toggleFavourite(data){
        setActiveTab(0);
        if (stockArray.filter(e => e.symbol === data.stock_list.symbol).length > 0) {
            console.log('value already exists');
        }else{
            const result = await axios.post('http://localhost:3000/api/posts/stock_remove', {favourite: data.stock_list.symbol}, {withCredentials: true});
            props.updateStock(data.stock_list.symbol);
        }
    }

    async function removeItem(data){
        if(localStorage.getItem("searched-stocks")){
            setActiveTab(0);
            var localData = JSON.parse(localStorage.getItem("searched-stocks"));
            localData = localData.filter(symbol =>  symbol !== data.stock_list.symbol)
            localStorage.setItem("searched-stocks", JSON.stringify(localData));
            props.removeStock(data.stock_list.symbol);
        }
    }


    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.STOCK_LIST,
        drop: (item, monitor) => toggleFavourite(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    })

    if(stockArray.length > 0){
        return(
            <div className="stock-tabs" ref={drop} style={isOver ? {backgroundColor:'rgb(244,244,255)', opacity: '0.2'} : {} }>
            <Nav tabs>
                {stockArray.map((stockItem, index) => (
                    <div key={index}>
                        <NavComp toggleFunc={setActiveTab}  stockItem={stockItem} index={index} activeTab={activeTab}/>
                    </div>
                ))}
                <TabContent activeTab={activeTab}>
                    {stockArray.map((stockItem, index) => (
                        <TabPane tabId={index} key={index}>
                            <Row>
                                <StockNewBody starsCount={stockItem.starRating} data={stockItem} index={index} removeItem={removeItem} toggleFavourite={toggleFavourite}/>
                            </Row>
                        </TabPane>
                    ))}
                </TabContent>
            </Nav>
        </div>
    );
    }else{
        return(
        <div className="stock-tabs" ref={drop} style={isOver ? {backgroundColor:'rgb(244,244,255)', opacity: '0.2'} : {} }>
            <h5>Loading Stocks...</h5>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    stock: state.stock
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateStock, removeStock}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StockTabs);