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
import searchLogo from '../static/5613.jpg';

const StockTabs = (props) => {

    /*
    stockArray: Current stock list
    updatedVal: Handles updating windows to re-render DOM (default 0)
    activeTab: sets current active stock tab (default 0)
    */
    const [stockArray, setStockArray] = useState([]);
    const [updatedVal, setUpdatedVal] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    //On Load Handle populating stock body data from local storage searches (cache'd)
    useEffect( () => {
        if(typeof localStorage !== "undefined"){
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
                    try{
                        const resultAPI = await axios.get(apiUrl);
                        resultAPI.data.historicalStock = resultAPI.data.historicalStock.reverse();
                        stock.push(resultAPI.data);
                    }catch(err){
                        console.log('removing invalid request: ', result[i]);
                        const localStorageTemp = JSON.parse(localStorage.getItem("searched-stocks"));
                        newLocal = localStorageTemp.filter(symbol => symbol !== result[i]);
                        localStorage.setItem("searched-stocks", JSON.stringify(newLocal));
                        props.removeStock(result[i]);
                    }
                }
                setStockArray(stock);
            }
            fetchData();
        }
      }, [props.stock.stocks]);

    async function removeFavourite(data){
        if (stockArray.filter(e => e.symbol === data.stock_list.symbol).length > 0) {
            console.log('value already exists');
        }else{
            const result = await axios.post('http://localhost:3000/api/posts/stock_remove', {favourite: data.stock_list.symbol}, {withCredentials: true});
            props.updateStock(data.stock_list.symbol);
        }
    }

    async function addFavourite(data){
        if(typeof localStorage !== "undefined"){
            setActiveTab(0);
            if(!JSON.parse(localStorage.getItem("favourites"))){
                localStorage.setItem("favourites", JSON.stringify([]));
            }

            const currFavourites = JSON.parse(localStorage.getItem("favourites"));

            if (currFavourites.filter(e => e.symbol === data.stock.symbol).length > 0) {
                console.log('value already exists');
            }else{
                const result = await axios.post('http://localhost:3000/api/posts/stock_favourite', {favourite: data.stock.symbol}, {withCredentials: true});
                var localData = JSON.parse(localStorage.getItem("searched-stocks"));
                localData = localData.filter(symbol =>  symbol !== data.stock.symbol)
                localStorage.setItem("searched-stocks", JSON.stringify(localData));
                await props.removeStock(data.stock.symbol);
                await setUpdatedVal(updatedVal+1);
            }
        }
    }

    async function removeItem(data){
        if(typeof localStorage !== "undefined"){
            if(localStorage.getItem("searched-stocks")){
                setActiveTab(0);
                var localData = JSON.parse(localStorage.getItem("searched-stocks"));
                localData = localData.filter(symbol =>  symbol !== data.stock_list.symbol)
                localStorage.setItem("searched-stocks", JSON.stringify(localData));
                props.removeStock(data.stock_list.symbol);
            }
        }
    }

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.STOCK_LIST,
        drop: (item, monitor) => removeFavourite(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    })

    if(stockArray.length > 0){
        return(
            <div className="stock-tabs" ref={drop} style={isOver ? {backgroundColor:'rgb(244,244,255)', opacity: '0.2'} : {} }>
            <Nav tabs>
                {stockArray.map((stockItem, index) => (
                    <div key={index} >
                        <NavComp toggleFunc={setActiveTab}  stockItem={stockItem} index={index} activeTab={activeTab}/>
                    </div>
                ))}
                <TabContent activeTab={activeTab}>
                    {stockArray.map((stockItem, index) => (
                        <TabPane tabId={index} key={index}>
                            <Row>
                                <StockNewBody starsCount={4} data={stockItem} index={index} removeItem={removeItem} addFavourite={addFavourite}/>
                            </Row>
                        </TabPane>
                    ))}
                </TabContent>
            </Nav>
        </div>
    );
    }else{
        return(
        <div className="missing-stock" ref={drop} style={isOver ? {backgroundColor:'white', opacity: '0.2'} : {} }>
            <img src={searchLogo} />
            <h2 style={{padding:'1em'}}>Search for a stock to get started.</h2>
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