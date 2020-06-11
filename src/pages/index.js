import React from 'react';
import Navigation from '../components/Navigation';
import StockTabs from '../components/StockTabs';
import WatchList from '../components/WatchList';

import '../../bootstrap/css/bootstrap.min.css';
import '../static/mainstyle.css';

class Index extends React.Component {
	render(){
		return(
			<div>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
				<Navigation displaySearch={true}/>
				<div className="stock-container">
					<WatchList/>
					<StockTabs />
				</div>
			</div>
		);
	}
}


export default Index;