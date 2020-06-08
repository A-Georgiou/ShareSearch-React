import React, { useState } from 'react';
import WatchStocks from './WatchStocks';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStock } from '../actions/index';


const WatchList = (props) =>  {
	var templateLineElem = {
		_id: 0,
	   favourite: true,
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

   const stockData = props.stock.stocks.filter((data) => {return data.favourite === true});
   const stockArray = [];
   console.log(stockArray);
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

   function toggleFavourite(data){
	   props.updateStock(data);
   }

	return(
		<div className="watch-list">
				<div className="header">
					<p style={{display: 'inline'}} className="chevron">></p><p>My Watchlist</p>
				</div>
				<hr style={{borderWidth: "1px"}}/>
				{stockArray.map((data, id) => (
					<div onClick={() => toggleFavourite(data)}>
							<WatchStocks borderCol={'red'} data={data} index={id}/>
						<hr/>
					</div>
				))}
		</div>
	);
}

const mapStateToProps = (state) => ({
    stock: state.stock
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateStock}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);