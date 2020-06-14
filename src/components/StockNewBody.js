import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faStar as faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar} from "@fortawesome/free-regular-svg-icons";
import { Button } from 'reactstrap';
import StockInfo from './StockInfo';
import {
	ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

library.add( faStar, farStar);

const StockNewBody = (props) => {

		return(
			<div className="scatter-data">
				<div className="header-information">
					<h1 className="stock-name">{props.data.name}</h1>
					<Button style={{fontSize: '1em'}} className="favourite-button" onClick={() => props.toggleFavourite({stock_list: props.data})}>Add to favourites</Button>
					<Button style={{fontSize: '1em'}} className="favourite-button" onClick={() => props.removeItem({stock_list: props.data})}>Close Stock Window</Button>
				</div>
				<div className="stock-main-body">
					<ResponsiveContainer width="98.5%" height="50%">
						<LineChart height={1} width={1} data={props.data.historicalStock} aspect={undefined} >
							<CartesianGrid strokeDasharray="1 1" />
							<XAxis dataKey="date" interval={25}/>
							<YAxis domain={['dataMin', 'dataMax']} allowDecimals={false} dataKey="adjClose" />
							<Line type="monotone" dataKey="adjClose" stroke="#82ca9d" />
						</LineChart>
					</ResponsiveContainer>
					<ResponsiveContainer width="98.5%" height="50%">
						<LineChart height={1} width={1} data={props.data.historicalGoogle} aspect={undefined} >
							<CartesianGrid strokeDasharray="1 1" />
							<XAxis dataKey="formattedAxisTime" />
							<YAxis domain={['dataMin', 'dataMax']} allowDecimals={false} />
							<Line type="monotone" dataKey="value" stroke="#8884d8" />
						</LineChart>
					</ResponsiveContainer>
				</div>
				<StockInfo dataDisplay={props.data} starsCount={props.starsCount}/>
			</div>

			
		);
}

export default StockNewBody;