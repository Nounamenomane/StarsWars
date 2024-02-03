import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';
import Favorite from '../Favorite/Favorite';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '../../context/ThemeProvider';
import droid from './img/droid.svg'
import lightsaber from './img/lightsaber.svg'
import space from './img/space-station.svg'

function Header() {

    const [icon, setIcon] = useState(space)

    const isTheme = useTheme()

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(lightsaber); break;
            case THEME_DARK: setIcon(space); break;
            case THEME_NEITRAL: setIcon(droid); break;
            default:
                break;
        }
    }, [isTheme])

    return (
        <div className={scss.container}>
            {
                <img className={scss.logo} src={icon} alt="" />
            }
            <ul className={scss.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to='/people'>People</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to="/notFound">Not Found</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
            </ul>
            <Favorite />
        </div>
    );
}

export default Header;
