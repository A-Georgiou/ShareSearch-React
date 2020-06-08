import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Badge } from 'reactstrap';

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
	return(
            <div className="watch-data">
                <div className="watch-list-info">
                    <Badge color="secondary" style={{fontSize: '1.5em'}}>{props.data.name}:</Badge>
                    <h5>P<p>10</p></h5>
                </div>
                    <Line data={props.data} options={options} />
            </div>
	);
}

export default WatchStocks;