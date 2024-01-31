import React from 'react'
import { Link } from 'react-router-dom'
import scss from './SearchPageInfo.module.scss'

function SearchPageInfo({ people }) {
    return (
        <>
            {
                people.length
                    ? (<ul className={scss.list__container}>
                        {people.map(({ id, img, name }) =>
                            <li className={scss.list__item} key={id}>
                                <Link to={`/person/${id}`}>
                                    <img className={scss.person__photo} src={img} alt="" />
                                    <p className={scss.person__name}>{name}</p>
                                </Link>
                            </li>
                        )}
                    </ul>)
                    : <h2 className={scss.person__comment}>No results</h2 >
            }
        </>
    )
}

export default SearchPageInfo