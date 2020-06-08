import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faStar as faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar} from "@fortawesome/free-regular-svg-icons";
import { Button } from 'reactstrap';
import StockInfo from './StockInfo';
library.add( faStar, farStar);

  const options = {
	maintainAspectRatio: false,
	responsive: true,
	  legend: {
		  labels: {
			  fontColor: '#373737'
		  }
	  },
	  scales: {
		  yAxes: [{
			  gridLines: {
				color: 'rgba(55, 55, 55, 0.1)'
			  },
			  ticks: {
				  beginAtZero: true,
				  fontSize: 20,
				  fontColor: '#373737'
			  }
		  }],
		  xAxes: [{
			  gridLines: {
				  color: 'rgba(55, 55, 55, 0.1)'
			  },
			ticks: {
				fontColor: '#373737',
				fontSize: 20
			},
		}]
	  }
  };


const StockBody = (props) => {
		return(
			<div className="scatter-data">
				<div className="header-information">
					<h1 className="stock-name">{props.data.name}</h1>
					<Button style={{fontSize: '1em'}} className="favourite-button" onClick={() => props.toggleFavourite(props.data, props.index)}>Add to favourites</Button>
				</div>
				<div className="stock-main-body">
        			<Line data={props.data} options={options} />
				</div>
				<StockInfo dataDisplay={props.data} starsCount={props.starsCount}/>
			</div>
		);
}

export default StockBody;