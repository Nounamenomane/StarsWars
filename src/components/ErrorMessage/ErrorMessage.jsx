import React, { useEffect, useRef } from 'react'
import scss from './ErrorMessage.module.scss'
import video from './video/video.mp4'

function ErrorMessage() {

    const videoRef = useRef(null)
    const playbackRate = 1.0

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, [])
    return (
        <>
            <p className={scss.text}>
                The dark side of the force has won.<br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>
            <video
                loop
                className={scss.video}
                autoPlay
                muted
                src={video}
                ref={videoRef}
            >

            </video>
        </>
    )
}

export default ErrorMessage