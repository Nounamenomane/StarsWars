import React from 'react'
import scss from './HomePage.module.scss'
import ChooseSite from '../../components/HomePage/ChooseSite/ChooseSite'


function HomePage() {
    return (
        <>
            <h1 className="header__text">HomePage</h1>
            <ChooseSite />
        </>
    )
}

export default HomePage