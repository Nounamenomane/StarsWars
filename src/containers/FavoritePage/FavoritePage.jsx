import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import scss from '../PeoplePage/PeoplePage.module.scss'
import styles from './FavoritePage.module.scss'

function FavoritePage() {
    const storeDate = useSelector(state => state.favorite);

    // Используем useState для установки локального состояния main
    const [localMain, setLocalMain] = useState(useSelector(state => state.main.main));

    useEffect(() => {
        const arr = Object.entries(storeDate);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setLocalMain(res);
        }

    }, []);


    return (
        <>
            <h1 className='header__text'>Favorites Page</h1>
            <ul className={scss.list__container} >
                {localMain.length ?
                    localMain.map((el) => (
                        <li key={el.id} className={scss.list__item}>
                            <NavLink to={`/person/${el.id}`}>
                                <img className={scss.person__photo} src={el.img} alt="" />
                                <p>{el.name}</p>
                            </NavLink>
                        </li>
                    ))
                    : <h2 className={styles.comment}>No date</h2>}
            </ul>
        </>

    );
}

export default FavoritePage;
