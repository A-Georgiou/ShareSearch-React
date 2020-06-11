import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";
library.add( faUser );

const Avatar = (props) => {
        const colors = ["#00AA55", "#009FD4", "#B381B3", "#939393", "#E3BC00", "#D47500", "#DC2A2A"];
        const [bgCol, setBgCol] = useState("#009FD4");

        useEffect(() => {
            setBgCol(getColour(props.name));
        })

        function calcNumber(text){
            const charCodes = text.split('').map(char=>char.charCodeAt(0)).join('')
            return parseInt(charCodes,10);
        }

        function getColour(text){
            return colors[calcNumber(text) % colors.length];
        }

		return(
			<div className="avatar" style={{backgroundColor: bgCol, width: props.width, height: props.height}}>
                <p style={{fontSize: props.textSize}}>{props.name}</p> 
            </div>
        );
}

//  : <FontAwesomeIcon icon={['fa', 'user']} color='white' />}

export default Avatar;