import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavItem.css';
const NavItem =({name,link})=>{
    return(
        
            <NavLink className={({isActive})=> isActive ? "navItem navItemactive": "navItem "
        }to={link}>{name}</NavLink>
        
    )
}

export default NavItem;