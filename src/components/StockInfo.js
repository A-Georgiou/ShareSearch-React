import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add( faChevronRight );

const StockInfo = props => {
    let starsArray = []
	var rating = props.starsCount;
	var type = 'fa';
	var color = 'orange';
	for(var i = 0; i < 5; i++){
		if(rating <= 0){
			type = 'far';
		}
		rating--;
		starsArray.push(<FontAwesomeIcon icon={[type, 'star']} color={color} key={i}/>);
	}
	
	return(
		<div className="stock-info">
				<h2>Stock Information:</h2><hr/>
				Correlation Rating: {starsArray.map(function(item, i){return item;})}
				<br/>
				Stock Current Price: ${props.dataDisplay.historicalStock[props.dataDisplay.historicalStock.length -1].adjClose.toFixed(2)}
				<br/>
				Predicted Trend: <div className="predictive-text" style={{color: 'red'}}>Negative</div><br/>
		</div>
	);
}

export default StockInfo;