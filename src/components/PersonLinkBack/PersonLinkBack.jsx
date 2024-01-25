import React from 'react';
import { useNavigate } from 'react-router-dom';
import scss from './PersonLinkBack.module.scss'
import left from './img/back.svg'

function PersonLinkBack() {
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate('/people');
    };

    return (
        <a className={scss.link} href="#" onClick={handleGoBack}>
            <img className={scss.link__img} src={left} alt="" />
            <span >Go back</span>
        </a>
    );
}

export default PersonLinkBack;
