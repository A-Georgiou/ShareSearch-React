import React, { useState, useEffect} from 'react';
import StockBody from './StockBody';
import { TabContent, TabPane, Nav, Row} from 'reactstrap';
import { bindActionCreators } from 'redux';
import NavComp from './NavComp';
import {connect} from 'react-redux';
import { updateStock } from '../actions/index';
import { useDrop, useDrag} from 'react-dnd';
import { ItemTypes } from '../utils/items';


const StockTabs = (props) => {
    var templateLineElem = {
         _id: 0,
        favourite: false,
        name: '',
        starRating: 0,
        labels: [],
        datasets: [{
                label: 'Stock Market Data',
                fill: true,
                lineTension: 0.2,
                backgroundColor: 'rgba(75,192,192,0.1)',
                borderColor: 'rgba(75,192,192,1.0)',
                data: []
        },{
                label: 'Google Trends',
                fill: true,
                lineTension: 0.2,
                backgroundColor: 'rgba(75,192,192,0.1)',
                borderColor: 'rgba(75,192,192,1.0)',
                data: []
        }],
    }

    const stockData = props.stock.stocks.filter((data) => {return data.favourite === false});
    const stockArray = [];

    stockData.forEach((data) => {
        var copyTemplate = JSON.parse(JSON.stringify(templateLineElem));
        copyTemplate._id = data._id;
        copyTemplate.name = data.name;
        copyTemplate.starRating = data.starRating;
        copyTemplate.labels = data.labels;
        copyTemplate.datasets[0].data = data.stockData;
        copyTemplate.datasets[1].data = data.googleData;
        stockArray.push(copyTemplate);
    })

    const [activeTab, setActiveTab] = useState(0);

    function toggleFavourite(data, index){
        if(activeTab === index && stockData.length > 0){
            setActiveTab(0);
        }
        props.updateStock(data);
    }

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.STOCK_LIST,
        drop: (item, monitor) => props.updateStock(item.stock_list),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
       })


	return(
        <div className="stock-tabs" ref={drop} style={isOver ? {backgroundColor:'rgb(244,244,255)', opacity: '0.2'} : {} }>
            <Nav tabs>
                {stockArray.map((stockItem, index) => (
                    <div>
                        <NavComp toggleFunc={setActiveTab}  stockItem={stockItem} index={index} activeTab={activeTab}/>
                    </div>
                ))}
                <TabContent activeTab={activeTab}>
                    {stockArray.map((stockItem, index) => (
                        <TabPane tabId={index}>
                            <Row>
                                <StockBody starsCount={stockItem.starRating} data={stockItem} index={index} toggleFavourite={toggleFavourite}/>
                            </Row>
                        </TabPane>
                    ))}
                </TabContent>
            </Nav>
        </div>
	);
}

const mapStateToProps = (state) => ({
    stock: state.stock
})


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateStock}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StockTabs);