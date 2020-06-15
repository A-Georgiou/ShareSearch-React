import React from 'react';
import classnames from 'classnames';
import { NavItem, NavLink } from 'reactstrap';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/items';

const NavComp = props => {

    const toggle = (tab) => {
        if(props.activeTab !== tab) props.toggleFunc(tab);
    }

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.STOCK,
            stock: props.stockItem,
            index: props.index
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return(
        <div ref={drag} style={isDragging ? {opacity:'0.1'} : {}}>
            <NavItem>
                <NavLink  className={classnames({ active: props.activeTab === props.index})} onClick={() => { toggle(props.index) }} style={{cursor: 'pointer', padding:'.3em .3em', fontSize:'1.2em'}}>
                    <div><b>{props.stockItem.symbol}</b></div>
                </NavLink>
            </NavItem>
        </div>
    );
}

export default NavComp;