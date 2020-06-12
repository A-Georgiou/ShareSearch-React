import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add( faChevronRight );

class StockInfo extends React.Component {
	render(){
        let starsArray = []
	var rating = this.props.starsCount;
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
					<h2>Stock / Trend Information:</h2><hr/>
					Correlation Rating: {starsArray.map(function(item, i){
						return item;
					})}
					<br/>
					Stock Current Price: {this.props.dataDisplay[this.props.dataDisplay.length-1]}
					<br/>
					Predicted Trend: <div className="predictive-text" style={{color: 'red'}}>Negative</div><br/>
			</div>
		);
	}
}

export default StockInfo;