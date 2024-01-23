import React from 'react'
import scss from './ErrorMessage.module.scss'

function ErrorMessage() {
    return (
        <>
            <p className={scss.text}>
                The dark side of the force has won.<br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>
        </>
    )
}

export default ErrorMessage