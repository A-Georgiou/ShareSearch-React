import React, { useState, useEffect } from 'react';

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
                {props.name}
            </div>
        );
}

export default Avatar;