import React from 'react';
import classnames from 'classnames';
import {NavItem, NavLink} from 'reactstrap';
import {useDrag} from 'react-dnd';
import ItemTypes from '../utils/items';

const NavComp = (props) => {

    const toggle = (tab) => {
        if(props.activeTab !== tab) props.toggleFunc(tab);
    }

    const[] = useDrag({
        item: {
            type: ItemTypes.STOCK
        }
    })

    return(
        <NavItem>
            <NavLink  className={classnames({ active: props.activeTab === props.index})} onClick={() => { toggle(props.index) }} style={{cursor: 'pointer'}}>
                <div>{props.stockItem.name}</div>
            </NavLink>
        </NavItem>
    );
}

export default NavComp;