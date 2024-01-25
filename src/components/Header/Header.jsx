import React from 'react';
import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';

function Header() {


    return (
        <div className={scss.container}>
            <ul className={scss.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to='/people'>People</NavLink></li>
                <li><NavLink to="/notFound">Not Found</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;