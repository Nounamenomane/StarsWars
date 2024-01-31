import React, { useCallback, useEffect, useState } from 'react'
import { getApiResource } from '../../utils/network'
import { API_SEARCH } from '../../api/Api'
import { withErrorApi } from '../../hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'
import SearchPageInfo from '../../components/SearchPageInfo/SearchPageInfo'
import UiLoading from '../../components/UiLoading/UiLoading'
import { debounce } from 'lodash'
import scss from './SearchPage.module.scss'
import icon from './img/cancel.svg'

function SearchPage({ setErrorApi }) {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])
    const [loading, setloading] = useState(false)

    const getPesponse = async (param) => {
        console.log(param);
        setloading(true)
        const res = await getApiResource(API_SEARCH + param)
        if (res) {
            const peopelList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }

            });
            setloading(false)
            setPeople(peopelList);
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getPesponse('')
    }, [])

    const deboncedGetResponse = useCallback(
        debounce(value => getPesponse(value), 300),
        []
    )


    const handleInputChange = (e) => {
        const value = e.target.value
        setInputSearchValue(value)
        deboncedGetResponse(value)
    }

    return (
        <>
            <h1 className='header__text'>Search</h1>
            <div className={scss.wrapper__input}>
                <input type="text"
                    className={scss.input}
                    value={inputSearchValue}
                    onChange={handleInputChange}
                    placeholder='search' />
                <img
                    onClick={() => inputSearchValue && setInputSearchValue('')}
                    src={icon}
                    className={`${scss.clear} ${!inputSearchValue && scss.clear__disabled}`}
                    alt=""
                />
            </div>
            {
                loading
                    ? <UiLoading />
                    : <SearchPageInfo people={people} />
            }
        </>

    )
}

export default withErrorApi(SearchPage)