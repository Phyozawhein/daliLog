import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css";
import tenant from '../assets/img/tenant.svg';
import pkage from '../assets/img/package.svg';

const Home =()=>{
    return(
        <div className="flex flex-row justify-center ">
            <NavLink  className="homeNav" to="/package-management"><img src={pkage} className="homeIcons"/> <span>Package Managment </span></NavLink>
            <NavLink  className="homeNav" to="/tenant-management"><img src={tenant} className="homeIcons"/> <span>Tenant Managment </span></NavLink>
        </div>
    )
}

export default Home;