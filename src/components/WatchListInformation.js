import React, { useState, useEffect } from "react";
import axios from "axios";

const WatchListInformation = (props) => {
    const [dataResult, setDataResult] = useState(null);
    
    useEffect( () => {
        if(props.getSelectedFavourite !== null){
            async function getStockInformation(){
                const result = await axios.get(`http://localhost:3001/api/stock_quote?symbol=${props.getSelectedFavourite}`, {withCredentials: true});
                if(result.request.status == 200){
                    setDataResult(result.data);
                }
            }
            getStockInformation();
        }
    }, [props.getSelectedFavourite]);

    return(
        <div className="watch-list-information">
            {dataResult != null ? (
                <div>
                    <h1><u>{dataResult.price.shortName}</u> [{dataResult.price.symbol}]</h1>
                    <br />
                    <h3><b>Exchange:</b> {dataResult.price.exchange}</h3>
                    <h3><b>Currency:</b> {dataResult.price.currency}</h3>
                    <h3><b>Day Low:</b> {dataResult.price.currencySymbol}{dataResult.summaryDetail.dayLow}, <b>Day High:</b> {dataResult.price.currencySymbol}{dataResult.summaryDetail.dayHigh}</h3>
                </div>
            ): (
                <div>
                    <h1>No Data</h1>
                </div>
            )}
        </div>
    );
}

export default WatchListInformation;