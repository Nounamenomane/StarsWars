import React, { useEffect, useState } from 'react'
import icon from './img/bookmark.svg'
import scss from './Favorite.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Favorite() {
    const [isCounter, setCounter] = useState(0)

    const storeData = useSelector(state => state.favorite)

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCounter('...') : setCounter(length)
    })

    return (
        <div className={scss.container}>
            <Link to="/favorite">
                <span className={scss.counter}>{isCounter}</span>
                <img className={scss.icon} src={icon} alt="favorites" />
            </Link>

        </div>
    )
}

export default Favorite