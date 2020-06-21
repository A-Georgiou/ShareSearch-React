import React, { useState, useEffect } from 'react';
import WatchStocks from './WatchStocks';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStock, removeStock } from '../actions/index';
import { useDrop, useDrag} from 'react-dnd';
import { ItemTypes } from '../utils/items';
import axios from 'axios';

const WatchList = (props) =>  {
   	const [stockArray, setStockArray] = useState([]);
	const [updatedVal, setUpdatedVal] = useState(0);

  	useEffect(() => {
		  if(typeof localStorage !== "undefined"){
			async function fetchData(){
				const result = await axios.get('http://localhost:3000/api/posts/favourites', {withCredentials: true})
				localStorage.setItem('favourites', JSON.stringify(result.data.favourites))
				const favourites = result.data.favourites;
				let stock = [];
				for(var i = 0; i < favourites.length; i++){
					const apiUrl = `http://localhost:3001/api/getBothData?symbol=${favourites[i]}`;
					const resultAPI = await axios.get(apiUrl);
					resultAPI.data.historicalStock = resultAPI.data.historicalStock.reverse();
					stock.push(resultAPI.data);
				}
				
				setStockArray(stock);
			}

			fetchData();
		}
  	}, [updatedVal, props.stock.stocks]);

   async function toggleFavourite(data){
	   if(typeof localStorage !== "undefined"){
		if (stockArray.filter(e => e.symbol === data.stock.symbol).length > 0) {
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

   const [{isOver}, drop] = useDrop({
	accept: ItemTypes.STOCK,
	drop: (item, monitor) => toggleFavourite(item),
	collect: monitor => ({
		isOver: !!monitor.isOver(),
	})
   })


	return(
		<div className="watch-list" ref={drop} style={isOver ? {backgroundColor:'rgb(244,244,255)', opacity: '0.2'} : {} }>
				<div className="header">
					<p style={{display: 'inline'}} className="chevron">></p><p>My Watchlist</p>
				</div>
				<hr style={{borderWidth: "1px"}}/>
				{stockArray.map((data, id) => (
					<div key={id} onClick={() => {props.setSelectedFavourite && props.setSelectedFavourite(data.symbol)}}>
							<WatchStocks borderCol={'red'} data={data} index={id}  />
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
    return bindActionCreators({updateStock, removeStock}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);