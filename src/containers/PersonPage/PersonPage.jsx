import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeopleImage } from '../../services/getPeopleData';
import scss from './PersonPage.module.scss'
import PersonLinkBack from '../../components/PersonLinkBack/PersonLinkBack';

function PersonPage() {
    const [person, setPerson] = useState({});
    const [personPhoto, setPersonPhoto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getPersonById = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/${id}`);
                setPerson(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching person:', error);
            }
        };

        getPersonById();
        setPersonPhoto(getPeopleImage(id))
    }, [id]);

    return (
        <div className={scss.wrapper}>
            <PersonLinkBack />
            <div className={scss.detail__info}>
                <span className={scss.person__name}>{person.name}</span>
                <div className={scss.container}>
                    <div className={scss.container__photo}>
                        <img className={scss.photo} src={personPhoto} alt="" />
                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default PersonPage;
