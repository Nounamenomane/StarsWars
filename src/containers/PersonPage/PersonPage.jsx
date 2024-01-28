import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeopleImage } from '../../services/getPeopleData';
import scss from './PersonPage.module.scss'
import PersonLinkBack from '../../components/PersonLinkBack/PersonLinkBack';
import PersonFilms from '../../components/PersonFilms/PersonFilms';
import { useDispatch, useSelector } from 'react-redux';
import { removePersonFromFavorite, setPersonToFavorite } from '../../redux/actions';
import favorite from './img/favorite.svg'
import favorite_fill from './img/favorite-fill.svg'


function PersonPage() {
    const [person, setPerson] = useState({});
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorites, setPersonFavorites] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch()
    const storeDate = useSelector(state => state.favorite)

    useEffect(() => {
        const getPersonById = async () => {
            storeDate[id] ? setPersonFavorites(true) : setPersonFavorites(false)
            try {
                const response = await axios.get(`https://swapi.dev/api/people/${id}`);
                setPerson(response.data);
                response.data.films.length && setPersonFilms(response.data.films)
            } catch (error) {
                console.error('Error fetching person:', error);
            }
        };

        getPersonById();
        setPersonPhoto(getPeopleImage(id))
    }, [id]);


    const dispatchFavoritePeople = () => {
        if (personFavorites) {
            dispatch(removePersonFromFavorite([id]))
            setPersonFavorites(false)
        } else {
            dispatch(setPersonToFavorite({
                [id]: {
                    name: person.name,
                    img: personPhoto
                }
            }))
            setPersonFavorites(true)
        }
    }
    return (
        <div className={scss.wrapp}>
            <PersonLinkBack />
            <div className={scss.detail__info}>
                <span className={scss.person__name}>{person.name}</span>
                <div className={scss.container}>
                    <>
                        <div className={scss.container__photo}>
                            <img className={scss.photo} src={personPhoto} alt="" />

                            <img className={scss.favorite} src={personFavorites ? favorite_fill
                                : favorite} onClick={dispatchFavoritePeople} />
                        </div>

                    </>
                    <div className={scss.wrapper__item}>
                        <ul className={scss.list__container}>
                            <li className={scss.list__container}>
                                <span className={scss.item__title}>Height: {person.height}</span>
                                <span className={scss.item__title}>Mass: {person.mass}</span>
                                <span className={scss.item__title}>Hair_color: {person.hair_color}</span>
                                <span className={scss.item__title}>Skin_color: {person.skin_color}</span>
                                <span className={scss.item__title}>Eye_color: {person.eye_color}</span>
                                <span className={scss.item__title}>Birth_year: {person.birth_year}</span>
                                <span className={scss.item__title}>Gender: {person.gender}</span>
                            </li>
                        </ul>
                    </div>
                    {personFilms && (
                        <PersonFilms personFilms={personFilms} />
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default PersonPage;
