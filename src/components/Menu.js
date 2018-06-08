import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }
    return(
        <div>
            <ul>
                <li><NavLink exact to ="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to ="/counter" activeStyle={activeStyle}>Counter</NavLink></li>
                <li><NavLink to ="/counter/sean" activeStyle={activeStyle}>Counter Sean</NavLink></li>
                <li><NavLink to ="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr />
        </div>
    )
};

export default Menu;