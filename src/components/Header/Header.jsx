import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import scss from './Header.module.scss';
import Favorite from '../Favorite/Favorite';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '../../context/ThemeProvider';
import droid from './img/droid.svg'
import lightsaber from './img/lightsaber.svg'
import space from './img/space-station.svg'
import burger_menu from './img/menu-bar.png'
import { useClickOutside } from '../../hooks/useCLickOutside';

function Header() {

    const [icon, setIcon] = useState(space)

    const [isOpen, setOpen] = useState(false)

    const menuRef = useRef(null)
    useClickOutside(menuRef, () => setOpen(false))


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

    const location = useLocation();

    const toggleMenu = () => {
        setOpen(true);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    useEffect(() => {
        // При каждом изменении маршрута (переходе на другую страницу), закрываем бургер-меню
        closeMenu();
    }, [location]);

    return (
        <div className={scss.container}>
            {
                <img className={scss.logo} src={icon} alt="" />
            }
            <ul ref={menuRef} className={`${scss.list__container} ${isOpen ? scss.active : ''}`}>
                <li className={scss.list__item}><NavLink to="/">Home</NavLink></li>
                <li className={scss.list__item}><NavLink to='/people'>People</NavLink></li>
                <li className={scss.list__item}><NavLink to='/search'>Search</NavLink></li>
                <li className={scss.list__item}><NavLink to="/notFound">Not Found</NavLink></li>
                <li className={scss.list__item}><NavLink to="/fail">Fail</NavLink></li>
            </ul>
            <div className={scss.menu__left}>
                <img onClick={() => setOpen(!isOpen)} className={scss.burger_menu} src={burger_menu} />
            </div>
            <Favorite />
        </div>
    );
}

export default Header;
