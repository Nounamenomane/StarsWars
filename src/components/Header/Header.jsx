import React from 'react';
import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';
import { useSelector } from 'react-redux';

function Header() {


    return (
        <div className={scss.container}>
            <ul className={scss.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to='/people/?page=1'>People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;
