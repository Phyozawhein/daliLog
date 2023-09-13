import React from 'react';
import NavItem from '../Navitem/Navitem';
import './Navbar.css';
const Navbar =({navLinks})=>{

    return(
        <ul className="navbar m-2 p-1 bg-white w-full border-2 border-black">
            {navLinks.map((data,index)=> <li key={index}><NavItem name={data[0]} link={data[1]}/></li>)}
        </ul>
    )
}

export default Navbar;