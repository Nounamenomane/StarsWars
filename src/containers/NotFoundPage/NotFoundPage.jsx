import React from 'react'
import scss from './NotFoundPage.module.scss'
import img from './img/not-found.jpg'
import { useLocation } from 'react-router-dom'

function NotFoundPage() {
    const location = useLocation()
    return (
        <>
            <img className={scss.img} src={img} alt="Not Found" />
            <p className={scss.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage