import React from 'react'
import loading from './img/loading.svg'
import scss from './UiLoading.module.scss'

function UiLoading() {
    return (
        <>
            <img className={scss.loader} src={loading} alt="loader" />
        </>
    )
}

export default UiLoading