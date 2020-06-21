import React, { useState } from 'react';
import {
	ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { Badge } from 'reactstrap';
import {useDrag } from 'react-dnd';
import {ItemTypes} from '../utils/items';

const WatchStocks = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.STOCK_LIST,
            stock_list: props.data,
            index: props.index
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

	return(
        <div className="watch-data" ref={drag} style={isDragging ? {opacity: '0.1'} : {}}>
            <div className="watch-list-info">
                <Badge color="secondary" style={{fontSize: '1.5em'}}>{props.data.symbol}:</Badge>
                <h5>P<p>{props.data.historicalStock[props.data.historicalStock.length-1].adjClose.toFixed(2)}</p></h5>
            </div>
            <ResponsiveContainer width="100%" height="45%">
					<LineChart height={1} width={1} data={props.data.historicalStock} aspect={undefined}  >
						<CartesianGrid strokeDasharray="1 1" />
                        <YAxis domain={['dataMin', 'dataMax']} />
						<Line type="monotone" dataKey="adjClose" stroke="#82ca9d" dot={false}/>
					</LineChart>
				</ResponsiveContainer>
				<ResponsiveContainer width="100%" height="45%">
					<LineChart height={1} width={1} data={props.data.historicalGoogle} aspect={undefined} >
						<CartesianGrid strokeDasharray="1 1" />
                        <YAxis domain={['dataMin', 'dataMax']} />
						<Line type="monotone" dataKey="value" stroke="#8884d8" dot={false}/>
					</LineChart>
				</ResponsiveContainer>
        </div>
	);
}

export default WatchStocks;