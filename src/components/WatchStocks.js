import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Badge } from 'reactstrap';
import {useDrag } from 'react-dnd';
import {ItemTypes} from '../utils/items';

const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
        display: false,
    },
    scales: {
        yAxes: [{
            display: false,
            gridLines: {
              color: 'grey'
            },
            ticks: {
                beginAtZero: true,
                fontSize: 20,
                fontColor: 'whitesmoke'
            }
        }],
        xAxes: [{
            display: false,
            gridLines: {
                color: 'grey'
            },
          ticks: {
              fontColor: 'whitesmoke',
              fontSize: 20
          },
      }]
    }
};

const WatchStocks = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.STOCK_LIST,
            stock_list: props.data
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

	return(
            <div className="watch-data" ref={drag} style={isDragging ? {opacity: '0.1'} : {}}>
                <div className="watch-list-info">
                    <Badge color="secondary" style={{fontSize: '1.5em'}}>{props.data.name}:</Badge>
                    <h5>P<p>10</p></h5>
                </div>
                    <Line data={props.data} width={100} height={10} options={options}/>
            </div>
	);
}

export default WatchStocks;