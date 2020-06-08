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
            stock: props.stockItem
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return(
        <div ref={drag} canDrag={true} style={isDragging ? {opacity:'0.1'} : {}}>
            <NavItem>
                <NavLink  className={classnames({ active: props.activeTab === props.index})} onClick={() => { toggle(props.index) }} style={{cursor: 'pointer'}}>
                    <div>{props.stockItem.name}</div>
                </NavLink>
            </NavItem>
        </div>
    );
}

export default NavComp;