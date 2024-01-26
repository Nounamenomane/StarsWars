import React, { useEffect, useState } from 'react';
import { makeConcurrentRequest } from '../../utils/network';
import scss from './PersonFilms.module.scss'

function PersonFilms({ personFilms }) {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await makeConcurrentRequest(personFilms);
                if (res) {
                    setFilmsName(res);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [personFilms]);

    return (
        <div className={scss.wrapper}>
            <ul className={scss.list__container}>
                {filmsName &&
                    filmsName
                        .sort((a, b) => a.episode_id - b.episode_id)
                        .map(({ title, episode_id }) => (
                            <li className={scss.list__item} key={episode_id}>
                                <span className={scss.item__episide}>Episode {episode_id}</span>
                                <span className={scss.item__colon}>: </span>
                                <span className={scss.item__title}>{title}</span>
                            </li>
                        ))}
            </ul>
        </div>
    );
}

export default PersonFilms;
